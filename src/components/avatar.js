import MaterialAvatar from '@material-ui/core/Avatar'
import React from 'react';
import propTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  Avatar: {
    width: 150,
    height: 150,
    margin: 0,
  }
});

const Avatar = (props) => {
  const { classes } = props
  return (
    <Grid item xs={Number(props.gridSize)}>
      <MaterialAvatar className={classes.Avatar} alt={props.alt} src={props.src}/>
    </Grid>
  )
}

Avatar.propTypes = {
  classes: propTypes.object.isRequired,
};

export default withStyles(styles)(Avatar)