import List from '@material-ui/core/List'
import React from 'react';
import propTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import { withStyles } from '@material-ui/core/styles';
import Typo from '@material-ui/core/Typography';



const styles = theme => ({
  bigIcon: {
    fontSize: '3rem',
    lineHeight: '3rem',
  },
  Contact: {
    paddingBottom: '0'
  },
  listItem: {
    textAlign: 'right',
    display: 'list-item',
    padding: '0px',
    marginBottom: '1.5rem',
    color: '#fff'
  },
  root: {
    [theme.breakpoints.up('sm')]: {
      textAlign: 'center'
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    },
  },
  lastListItem: {
    marginBottom: '0px',
  },
  Github: {
    color: '#6e5494',
  },
  LinkedIn: {
    color: '#0077B5', 
  },
  Home: {
    color: '#333',
  },
  Mail: {
    color: '#313335',
  },
  Phone: {
    color: '#313335',
  },
});

class Contact extends React.Component {
  state = {
    width: 454, height: 500
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    const { classes } = this.props
    const links = {
      LinkedIn: 'https://www.linkedin.com/in/marcin-zaborowski/',
      Github: 'https://www.github.com/Thrajnor',
      Maps: 'https://www.google.pl/maps/place/Wroc%C5%82aw/@51.1267432,16.7116858,10z/data=!3m1!4b1!4m5!3m4!1s0x470fe9c2d4b58abf:0xb70956aec205e0f5!8m2!3d51.1078852!4d17.0385376',
    }

    // render conditionally

    let lists

    if (typeof window !== 'undefined' && this.state.width < 672 ) {
      lists = (
        <>
        <Grid item xs>
          <List component="nav" className={classes.Contact}>
            <ListItem className={classes.listItem}>
              <a href={links.LinkedIn}><i className={["fab fa-linkedin", classes.bigIcon, classes.LinkedIn].join(' ')}></i></a>
            </ListItem>
            <ListItem className={classes.listItem}>
              <a href={links.Github}><i className={["fab fa-github", classes.bigIcon, classes.Github].join(' ')}></i></a>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12}>
          <List component="nav" className={classes.Contact}>
            <ListItem className={classes.listItem}>
              <Typo className={[classes.Mail, classes.root].join(' ')} variant='display2'>{this.props.Mail}</Typo>
            </ListItem>
            <ListItem button className={classes.listItem}>
              <a href={links.Maps}><Typo className={[classes.Home, classes.root].join(' ')} variant='display2'><i className="fas fa-map-marker-alt"></i> {this.props.Home}</Typo></a>
            </ListItem>
            <ListItem className={[classes.listItem, classes.lastListItem].join(' ')}>
              <Typo className={[classes.Phone, classes.root].join(' ')} variant='display2'><i className="fas fa-mobile-alt"></i> {this.props.Phone}</Typo>
            </ListItem>
          </List>
        </Grid>
        </>
      )
    } else {
      lists = (
        <Grid item xs>
        <List component="nav" className={classes.Contact}>
          <ListItem className={classes.listItem}>
            <Typo className={classes.Mail} variant='display2'>{this.props.Mail} <i className="fas fa-at"></i></Typo>
          </ListItem>
          <ListItem button className={classes.listItem}>
            <a href={links.LinkedIn}><Typo className={classes.LinkedIn} variant='display2'>{this.props.LinkedIn} <i className="fab fa-linkedin"></i></Typo></a>
          </ListItem>
          <ListItem button className={classes.listItem}>
            <a href={links.Github}><Typo className={classes.Github} variant='display2'>{this.props.Github} <i className="fab fa-github"></i></Typo></a>
          </ListItem>
          <ListItem button className={classes.listItem}>
            <a href={links.Maps}><Typo className={classes.Home} variant='display2'>{this.props.Home} <i className="fas fa-map-marker-alt"></i></Typo></a>
          </ListItem>
          <ListItem className={[classes.listItem, classes.lastListItem].join(' ')}>
            <Typo className={classes.Phone} variant='display2'>{this.props.Phone} <i className="fas fa-mobile-alt"></i></Typo>
          </ListItem>
        </List>
        </Grid>
      )
    }


    return (
      <>{lists}</>
    )
  }
}

Contact.propTypes = {
  classes: propTypes.object.isRequired || propTypes.array.isRequired,
};

export default withStyles(styles)(Contact)