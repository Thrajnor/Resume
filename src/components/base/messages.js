// App.js
import React, { Component } from 'react'
import { withAlert } from 'react-alert'
import Typo from '@material-ui/core/Typography';
 
class Message extends Component  {
  render () {
    let duration = this.props.duration
    let message = this.props.message
    let type = this.props.type

 
    if (this.props.message === 'copy') {
      message = (<Typo variant='caption'>Copied to Clipboard!</Typo>)
    }

    if (!this.props.type) {
      type = 'success'
    }
    if (!this.props.duration) {
      duration = 3000
    }

    return (
      <span
        onClick={() => {
          this.props.alert.show( message, {
          timeout: duration,
          type: type,
          transition: 'fade'
          })
        }}
      >
        {this.props.children}
      </span>
    )
  }
}
 
export default withAlert(Message)