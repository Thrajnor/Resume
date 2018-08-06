import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typo from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import propTypes from 'prop-types';

const styles = theme => ({
  subTitle: {
    fontWeight: '400',
    fontSize: '0.85rem',
  },
});

const Paragraph = (props) => {
  const { classes } = props
  return (
    <Grid item xs={Number(props.gridSize)}>
      <Typo variant='body1'>{props.title} <em className={classes.subTitle}>{props.subTitle}</em></Typo>
      <Typo variant='subheading'>{props.subheading}</Typo>
    </Grid>
  )
}

Paragraph.propTypes = {
  classes: propTypes.object.isRequired,
};

export default withStyles(styles)(Paragraph)