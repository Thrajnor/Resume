import React from 'react';
import Clipboard from 'react-clipboard.js';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  button: {
    all: 'inherit',
    cursor: 'pointer',
    userSelect: 'text'
  }
} 

const Copy = (props) => {
  const { classes } = props
  return (
    <Clipboard className={classes.button} data-clipboard-text={props.copy}>
      {props.children}
    </Clipboard>
  );
}
 
export default withStyles(styles)(Copy)