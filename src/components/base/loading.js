import React from 'react';

class Loading extends React.Component {
state = { isLoading: true }


componentDidMount() {
  this.setState({isLoading: false})
}

render() {
    return (
      this.state.isLoading ? <div></div> : this.props.children
    );
  }
}
 
export default Loading