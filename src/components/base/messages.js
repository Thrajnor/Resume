
import React from 'react';
import ReactMessages from 'react-messages';
import { withStyles } from '@material-ui/core/styles';
import Typo from '@material-ui/core/Typography';

const styles = {
} 
 
class Message extends React.Component {
  state = {
    next: false,
    message: 'Just an initial message',
    newMessage: 'lol',
  }
 
  handleClick = () => {
    const { newMessage } = this.state
 
    this.setState({
      message: newMessage,
      newMessage: 'lol',
      next: true
    })
  }
 
  render() {
    const { next } = this.state
    let duration = this.props.duration
    let message = this.props.message
 
    if (this.props.message === 'copy') {
      message = (<Typo variant='caption'><i className="fas fa-clipboard"></i> Copied to Clipboard!</Typo>)
    }

    if (!this.props.duration) {
      duration = 1000
    }

    return (
      <>
        <span onClick={this.handleClick}>{this.props.children}</span>
        <ReactMessages 
          message={message} 
          error={this.props.error}
          next={next}
          icon=''
          duration={duration}
        />
      </>
    )
  }
}

export default withStyles(styles)(Message)