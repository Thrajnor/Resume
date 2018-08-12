import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  button: {
    margin: '1rem auto 0 auto',
    display: 'block',
    padding: '0 3rem'
  }
}

const Print = (props) => {
  const { classes } = props
  return (
    <>
      <Button className={classes.button} size='medium'><a href={props.src} download="CV-MarcinZaborowski.png">{props.children}</a></Button>
    </>
  )
}

export default withStyles(styles)(Print)