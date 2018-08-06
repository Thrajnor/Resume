import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typo from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import propTypes from 'prop-types';

const styles = {
  divider: {
    border: '0',
    height: '2px',
    backgroundImage: 'linear-gradient(to right, #fff, rgba(0, 0, 0, 1), #fff)',
    marginLeft: '5%',
    marginBottom: '0',
  }
}

const Divider = (props) => {
  const { classes } = props
  return (
    <Grid item xs={Number(props.gridSize)}>
        <Typo>{props.icon} {props.title}</Typo>
        <hr className={classes.divider} />
    </Grid>
  )
}

Divider.propTypes = {
  classes: propTypes.object.isRequired,
};

export default withStyles(styles)(Divider)