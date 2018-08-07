import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typo from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  RODO: {
    padding: '9rem 3rem 0 3rem',
    [theme.breakpoints.down('sm')]: {
      padding: '1rem 3rem 0 3rem',
    },
  }
});

const Footer = (props) => {
  const { classes } = props
  return (
    <>
      <Typo variant='caption' className={classes.RODO}>{props.disc}</Typo>
      <Grid item xs={12}><Typo variant='caption' align='right'>{props.powered} {props.poweredIcon}</Typo></Grid>
    </>
  )
}

export default withStyles(styles)(Footer)