import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typo from '@material-ui/core/Typography';

const Footer = (props) => {
  return (
    <Grid item xs={Number(props.gridSize)}>
      <Typo variant='caption'>{props.disc}</Typo>
      <Grid container spacing={16}>
        <Grid item xs={3} />
        <Grid item xs={3} />
        <Grid item xs={3} />
        <Grid item xs={3}><Typo variant='caption' align='right'>{props.powered} {props.poweredIcon}</Typo></Grid>
      </Grid>
    </Grid>
  )
}

export default Footer