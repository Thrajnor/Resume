import React from 'react';
import propTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typo from '@material-ui/core/Typography';

const Header = (props) => {
  return (
    <Grid item xs={Number(props.gridSize)}>
      <Typo variant='body1'> {props.children} </Typo>
      <Typo variant='subheading'>{props.disc}</Typo>
    </Grid>
  )
}

Header.propTypes = {
  classes: propTypes.object.isRequired,
};

export default Header