import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typo from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  RODO: {
    padding: '0 3rem',
    marginTop: '2rem',
    marginBottom: '.5rem',
    [theme.breakpoints.up('sm')]: {
      marginTop: '1.5rem',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '1rem 3rem 0 3rem',
    },
  },
});

const Footer = (props) => {
  const { classes } = props
  return (
    <>
      <Typo variant='display4' className={classes.RODO}>{props.disc}</Typo>
      <Grid item xs={12}><Typo variant='display4' align='right'>{props.powered} {props.poweredIcon}</Typo></Grid>
    </>
  )
}

export default withStyles(styles)(Footer)