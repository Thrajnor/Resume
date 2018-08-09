import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import './layout.css'

const theme = createMuiTheme({
  props: {
    // withWidth component ⚛️
    MuiWithWidth: {
      // Initial width property
      initialWidth: 'xs', // Breakpoint being globally set 🌎!
    },
  },
  palette: {
    primary:{ main: '#6e5494' }
  },
  breakpoints: {
    values: {
      lg: 775,
      md: 672,
      sm: 455
    }
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
    display3: {
      fontSize: '1.71rem',
      fontWeight: 700,
      color: '#222'
    },
    display2: {
      fontSize: '1.4rem',
      fontStyle: 'italic',
      height: '2rem'
    },
    display1: {
      fontSize: '1.7rem',
      fontStyle: 'italic',
    },
    body1: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    headline: {
      fontSize: '2.44rem',
      fontWeight: 700,
    },
    title: {
      fontSize: '2.5rem'
    },
    body2: {
      fontSize: '1.6rem',
      fontWeight: 400,
    },
    subheading: {
      fontSize: '1.7rem',
      fontStyle: 'italic',
    },
    button: {
      fontStyle: 'italic',
    },
    caption: {
      fontSize: '1.1rem',
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
