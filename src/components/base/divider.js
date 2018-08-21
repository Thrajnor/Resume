import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typo from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import propTypes from 'prop-types';
import MediaQuery from 'react-responsive';

const styles = {
  divider: {
    border: '0',
    height: '.3rem',
    backgroundImage: 'linear-gradient(to right, #fff, rgba(0, 0, 0, 1), #fff)',
    marginLeft: '5%',
    marginBottom: '0',
  }
}



const Divider = (props) => {
  const { classes } = props
  let grid
  if (props.title) {
    grid =(
      <Grid item className={props.nameClass} xs={Number(props.gridSize)} onClick={props.click}>
        <MediaQuery query='(max-width: 454px)'>
          <Typo variant='title'><i className={props.caret}></i> {props.icon} {props.title}</Typo>
          <hr className={classes.divider} />
        </MediaQuery>
        <MediaQuery query='(min-width: 455px)'>
          <Typo variant='title'>{props.icon} {props.title}</Typo>
          <hr className={classes.divider} />
        </MediaQuery>
      </Grid>
    )
  }
  return (
    <>
    {grid}
    </>
  )
}

Divider.propTypes = {
  classes: propTypes.object.isRequired,
};

export default withStyles(styles)(Divider)