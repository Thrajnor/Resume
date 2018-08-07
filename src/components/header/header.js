import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typo from '@material-ui/core/Typography';

const Header = (props) => {
  return (
    <Grid item xs={Number(props.gridSize)}>
      <Typo variant='title'> {props.children} </Typo>
      <Typo variant='subheading'>{props.disc}</Typo>
    </Grid>
  )
}

export default Header