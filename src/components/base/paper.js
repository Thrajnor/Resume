import React from 'react';
import MaterialPaper from '@material-ui/core/Paper';
import propTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: '4rem auto',
    maxWidth: '79.3688rem',
    minWidth: '28.8rem',
    minHeight: '112.252rem',
    padding: '2rem',
    position: 'relative',
  },
});

const Paper = (props) => {
  const { classes } = props
  return (
    <MaterialPaper
    className={classes.root}
    >
      <Grid container spacing={24}>
        {props.children}
      </Grid>
    </MaterialPaper>
  )
}


Paper.propTypes = {
  classes: propTypes.object.isRequired,
};

export default withStyles(styles)(Paper)