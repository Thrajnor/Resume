import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import './layout.css'

const theme = createMuiTheme({
  palette: {
    primary:{ main: '#6e5494' }
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Merienda',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontWeightMedium: 500,
    body1: {
      fontSize: '.9rem',
      fontWeight: 700,
    },
    body2: {
      fontSize: '.7rem',
      fontWeight: 400,
    },
    subheading: {
      fontSize: '.7rem',
      fontStyle: 'italic',
    },
    button: {
      fontStyle: 'italic',
    },
    caption: {
      fontSize: '.52rem',
      fontStyle: 'italic',
    }
  },
});

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <div
          style={{
            padding: '0px 1.0875rem 1.45rem',
          }}
        >
          <MuiThemeProvider theme={theme}>
            {children}
          </MuiThemeProvider>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
