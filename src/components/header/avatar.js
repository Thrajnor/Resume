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