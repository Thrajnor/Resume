import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typo from '@material-ui/core/Typography';

const Header = (props) => {
  return (
    <Grid item xs md={4}>
      <Typo variant='headline'> {props.firstName} </Typo>
      <Typo variant='headline'> {props.lastName} </Typo>
      <Typo variant='display1'>{props.disc}</Typo>
    </Grid>
  )
}

export default Header