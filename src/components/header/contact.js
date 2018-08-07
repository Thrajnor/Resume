import List from '@material-ui/core/List'
import React from 'react';
import propTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import { withStyles } from '@material-ui/core/styles';
import Typo from '@material-ui/core/Typography';



const styles = theme => ({
  Contact: {
  },
  listItem: {
    textAlign: 'right',
    display: 'list-item',
    padding: '.08rem',
    marginBottom: '.08rem',
    color: '#fff'
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
  }
});

const Contact = (props) => {
  const { classes } = props
  const links = {
    LinkedIn: 'https://www.linkedin.com/in/marcin-zaborowski/',
    Github: 'https://github.com/Thrajnor',
    Maps: 'https://www.google.pl/maps/place/Wroc%C5%82aw/@51.1267432,16.7116858,10z/data=!3m1!4b1!4m5!3m4!1s0x470fe9c2d4b58abf:0xb70956aec205e0f5!8m2!3d51.1078852!4d17.0385376',
  }
  return (
    <Grid item xs={Number(props.gridSize)}>
      <List component="nav" className={classes.Contact}>
        <ListItem className={classes.listItem}>
          <Typo className={classes.Mail} variant='subheading'>{props.Mail} <i className="fas fa-at"></i></Typo>
        </ListItem>
        <ListItem button className={classes.listItem}>
          <a href={links.LinkedIn}><Typo className={classes.LinkedIn} variant='subheading'>{props.LinkedIn} <i className="fab fa-linkedin"></i></Typo></a>
        </ListItem>
        <ListItem button className={classes.listItem}>
          <a href={links.Github}><Typo className={classes.Github} variant='subheading'>{props.Github} <i className="fab fa-github"></i></Typo></a>
        </ListItem>
        <ListItem button className={classes.listItem}>
          <a href={links.Maps}><Typo className={classes.Home} variant='subheading'>{props.Home} <i className="fas fa-map-marker-alt"></i></Typo></a>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Typo className={classes.Phone} variant='subheading'>{props.Phone} <i className="fas fa-mobile-alt"></i></Typo>
        </ListItem>
      </List>
    </Grid>
  )
}

Contact.propTypes = {
  classes: propTypes.object.isRequired,
};

export default withStyles(styles)(Contact)