import React from 'react';
import MaterialPaper from '@material-ui/core/Paper';
import propTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: '1.5rem auto',
    width: '21cm',
    height: '29.7cm',
    padding: '1.5rem',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
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