import MaterialAvatar from '@material-ui/core/Avatar'
import React from 'react';
import propTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  AvatarContainer: {
    maxWidth: '100%',
    height: 'auto',
  },
  Avatar: {
    width: '100%',
    height: '100%',
    margin: 0,
    boxShadow: '0px .5px 5px 0px rgba(0, 0, 0, 0.2), 0px .25px 2px 0px rgba(0, 0, 0, 0.14), 0px .125px 1px -2px rgba(0, 0, 0, 0.12);'
  }
});

const Avatar = (props) => {
  const { classes } = props
  return (
    <Grid item xs={12} sm={5} md={Number(props.gridSize)} className={classes.AvatarContainer}>
      <div className={classes.AvatarContainer}>
        <MaterialAvatar className={classes.Avatar} alt={props.alt} src={props.src}/>
      </div>
    </Grid>
  )
}

Avatar.propTypes = {
  classes: propTypes.object.isRequired,
};

export default withStyles(styles)(Avatar)