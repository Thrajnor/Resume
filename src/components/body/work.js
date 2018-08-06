import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typo from '@material-ui/core/Typography';

const Work = (props) => {
  return (
    <Grid item xs={Number(props.gridSize)}>
      <Typo variant='body1'>Freelancing</Typo>
      <Typo variant='subheading'>(07/2018 – Present)</Typo>
    </Grid>
  )
}

export default Work