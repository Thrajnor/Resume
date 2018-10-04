import React from 'react';
import MaterialPaper from '@material-ui/core/Paper';
import propTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: '1rem auto 0 auto',
    maxWidth: '79.3688rem',
    minWidth: '30.5781rem',
    minHeight: '112.252rem',
    padding: '3rem',
    position: 'relative',
  },
  Grid: {
    minHeight: '106.252rem'
  }
});

const Paper = (props) => {
  const { classes } = props
  return (
    <MaterialPaper
      className={classes.root}
    >
      <Grid container spacing={16} className={classes.Grid}>
        {props.children}
      </Grid>
    </MaterialPaper>
  )
}


Paper.propTypes = {
  classes: propTypes.object.isRequired,
};

export default withStyles(styles)(Paper)