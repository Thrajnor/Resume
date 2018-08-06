import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typo from '@material-ui/core/Typography';

const paragraph = (props) => {
  return (
    <Grid item xs={Number(props.gridSize)}>
      <Typo variant='body1'>{props.title}</Typo>
      <Typo variant='subheading'>{props.subheading}</Typo>
    </Grid>
  )
}

export default paragraph