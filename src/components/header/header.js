import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typo from '@material-ui/core/Typography';

const Header = (props) => {
  return (
    <Grid item xs sm md={Number(props.gridSize)}>
      <Typo variant='headline'> {props.children} </Typo>
      <Typo variant='display1'>{props.disc}</Typo>
    </Grid>
  )
}

export default Header