import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Message from 'components/base/messages';

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
      <Message message="I've downloaded you a pdf!"><Button className={classes.button} size='medium'><a href={props.src} download="CV-MarcinZaborowski.png">{props.children}</a></Button></Message>
    </>
  )
}

export default withStyles(styles)(Print)