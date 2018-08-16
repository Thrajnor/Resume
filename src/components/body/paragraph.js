import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typo from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import propTypes from 'prop-types';
import Divider from 'components/base/divider';
import windowSize from 'react-window-size';
import Collapse from '@material-ui/core/Collapse';

let collapse = false
const styles = theme => ({
  date: {
    fontWeight: '400',
    fontSize: '1.5rem',
  },
});

class Paragraph extends React.Component {
  render() {
    const { classes } = this.props
    let paragraph
    // collapse when mobile
    if (this.props.windowWidth < 454 && this.props.windowWidth !== 0) {
      console.log (this.props.windowWidth)
      collapse = true
    } else if (this.props.windowWidth !== 0) {
      collapse = false
    }


    // make header paragraph work
    
    if (this.props.title) {
      console.log(collapse)
      paragraph = (
        <SlideToggle
        duration={500}
        collapsed={collapse}>
          {({onToggle, setCollapsibleElement, range}) => (
            <>
              <Divider gridSize='12' icon={this.props.icon} title={this.props.title} click={onToggle}/>
              <Grid item xs={Number(this.props.gridSize)}>
                <div className="slide-toggle__box" ref={setCollapsibleElement} style={{opacity: Math.max(0.5, range)}}>
                  <Typo variant='body1'>{this.props.name} <em className={classes.date}>{this.props.date}</em></Typo>
                  <Typo variant='subheading'>{this.props.subheading}</Typo>
                </div>
              </Grid>
            </>
          )}
        </SlideToggle>
      )
    } else {
      paragraph = (
        <>
          <Divider gridSize='12' icon={this.props.icon} title={this.props.title}/>

          <Grid item xs={Number(this.props.gridSize)}>
            <Collapse>
              <Typo variant='body1'>{this.props.name} <em className={classes.date}>{this.props.date}</em></Typo>
              <Typo variant='subheading'>{this.props.subheading}</Typo>
            </Collapse>
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

export default windowSize(withStyles(styles)(Paragraph))