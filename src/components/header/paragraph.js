import React from 'react';
import propTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typo from '@material-ui/core/Typography';

const paragraph = (props) => {
  return (
    <Grid item xs={Number(props.gridSize)}>
      <Typo variant='subheading'>{props.children}</Typo>
    </Grid>
  )
}

paragraph.propTypes = {
  classes: propTypes.object.isRequired,
};

export default paragraph