import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typo from '@material-ui/core/Typography';

const paragraph = (props) => {
  return (
    <Grid item xs={Number(props.gridSize)}>
      <Typo variant='subheading'>{props.children}</Typo>
    </Grid>
  )
}

export default paragraph