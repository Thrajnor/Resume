import List from '@material-ui/core/List'
import React from 'react';
import propTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Typo from '@material-ui/core/Typography';

const styles = theme => ({
  Contact: {
  },
  listItem: {
    textAlign: 'right',
    display: 'list-item',
    padding: theme.spacing.unit * .1,
    marginBottom: theme.spacing.unit * .1,
    fontSize: ''
  }
});

const Contact = (props) => {
  const { classes } = props
  return (
    <Grid item xs={Number(props.gridSize)}>
      <List component="nav" className={classes.Contact}>
        <ListItem className={classes.listItem}><Typo variant='body1'>{props.Mail}</Typo></ListItem>
        <ListItem className={classes.listItem}><Typo variant='body1'>{props.LinkedIn}</Typo></ListItem>
        <ListItem className={classes.listItem}><Typo variant='body1'>{props.Github}</Typo></ListItem>
        <ListItem className={classes.listItem}><Typo variant='body1'>{props.Home}</Typo></ListItem>
        <ListItem className={classes.listItem}><Typo variant='body1'>{props.Phone}</Typo></ListItem>
      </List>
    </Grid>
  )
}

Contact.propTypes = {
  classes: propTypes.object.isRequired,
};

export default withStyles(styles)(Contact)