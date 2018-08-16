import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typo from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import propTypes from 'prop-types';
import Divider from 'components/base/divider';
import Collapse from '@material-ui/core/Collapse';
import MediaQuery from 'react-responsive';

const styles = theme => ({
  date: {
    fontWeight: '400',
    fontSize: '1.5rem',
  },
});

class Paragraph extends React.Component {
  state = {
    checked: false,
  };

  handleChange = () => {
    this.setState(state => ({ checked: !state.checked }));
  };

  render() {
    const { classes } = this.props
    const { checked } = this.state
    let paragraph


    // make header paragraph work
    
    if (this.props.title) {
      paragraph = (
            <>
            <MediaQuery query='(max-width: 454px)'>
              <Divider gridSize='12' nameClass={'clickable'} click={this.handleChange} icon={this.props.icon} title={this.props.title}/>
  
              <Grid item xs={Number(this.props.gridSize)}>
                <Collapse in={checked}>
                  <Typo variant='body1'>{this.props.name} <em className={classes.date}>{this.props.date}</em></Typo>
                  <Typo variant='subheading'>{this.props.subheading}</Typo>
                </Collapse>
              </Grid>
            </MediaQuery>
            <MediaQuery query='(min-width: 454px)'>
              <Divider gridSize='12' icon={this.props.icon} title={this.props.title}/>
  
              <Grid item xs={Number(this.props.gridSize)}>
                <Typo variant='body1'>{this.props.name} <em className={classes.date}>{this.props.date}</em></Typo>
                <Typo variant='subheading'>{this.props.subheading}</Typo>
              </Grid>
            </MediaQuery>
            </>
      )
    } else {
      paragraph = (
        <>
          <Grid item xs={Number(this.props.gridSize)}>
            <Typo variant='body1'>{this.props.name} <em className={classes.date}>{this.props.date}</em></Typo>
            <Typo variant='subheading'>{this.props.subheading}</Typo>
          </Grid>
        </>
      )
    }

    return (
      <>
        {paragraph}
      </>
    )
  }
}

Paragraph.propTypes = {
  classes: propTypes.object.isRequired,
};

export default withStyles(styles)(Paragraph)