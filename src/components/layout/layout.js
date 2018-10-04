import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-oldschool-dark'

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
    primary: { main: '#6e5494' }
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
      'Muli',
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
    display4: {
      fontSize: '1.1rem',
      fontStyle: 'italic',
      fontWeight: '400',
      margin: '0px',
      padding: '0px'
    },
    display3: {
      fontSize: '2.1rem',
      fontWeight: 700,
      color: '#222'
    },
    display2: {
      fontSize: '1.3rem',
      fontStyle: 'italic',
      height: '2rem'
    },
    display1: {
      fontSize: '1.7rem',
      fontStyle: 'italic',
    },
    body1: {
      fontSize: '2.1rem',
      fontWeight: 700,
      lineHeight: '2rem'
    },
    headline: {
      fontSize: '2.44rem',
      fontWeight: 700,
    },
    title: {
      fontSize: '2.3rem',
      fontWeight: 700,
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
      fontSize: '1.2rem',
      fontWeight: 700,
      color: '#fff'
    }
  },
});

const options = {
  position: 'bottom center',
  offset: '3rem',
}

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
            <AlertProvider template={AlertTemplate} {...options}>
              {children}
            </AlertProvider>
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
