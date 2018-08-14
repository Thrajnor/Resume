import MaterialAvatar from '@material-ui/core/Avatar'
import React from 'react';
import propTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
  AvatarContainer: {
    maxWidth: '100%',
    height: 'auto',
  },
  Avatar: {
    width: '100%',
    height: '100%',
    margin: 0,
    boxShadow: '0px .5px 5px 0px rgba(0, 0, 0, 0.2), 0px .25px 2px 0px rgba(0, 0, 0, 0.14), 0px .125px 1px -2px rgba(0, 0, 0, 0.12);'
  }
});

class Avatar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isWindowDefined: false
    };
  }
  componentDidMount() {
    this.setState({isWindowDefined: true})
  }
  render() {
    let lightBox = ''
    const { classes } = this.props
    const { isOpen } = this.state;
    
    if (this.state.isWindowDefined) {
      let LightBox = require('react-image-lightbox').default
      import('react-image-lightbox/style.css')
      lightBox = (
        isOpen && window && (
          <LightBox
            mainSrc={require('images/fullAvatar.jpg')}
            onCloseRequest={() => this.setState({ isOpen: false })}
          />
        )
      )
    } 

    return (
      <>
        <Grid item xs={12} sm={5} md={Number(this.props.gridSize)} className={classes.AvatarContainer}>
          <div className={classes.AvatarContainer}>
            <MaterialAvatar className={classes.Avatar} onClick={() => this.setState({ isOpen: true })} alt={this.props.alt} src={this.props.src}/>
          </div>
        </Grid>
        {lightBox}
      </>
    )
  }
}

Avatar.propTypes = {
  classes: propTypes.object.isRequired,
};

export default withStyles(styles)(Avatar)