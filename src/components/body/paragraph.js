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
  marginRight: {
    [theme.breakpoints.up('sm')]: {
      marginRight: '.9725rem',
      marginLeft: '.9725rem'
    },
  },
  indent: {
    paddingLeft: '2rem'
  },
  lineHeight: {
    lineHeight: '1.9rem !important'
  },
  text: {
    display: 'inline-block'
  }
});

class Paragraph extends React.Component {
  state = {
    checked: false,
  };

  handleChange = () => {
    this.setState(state => ({ checked: !state.checked }));
  };

  render() {
    const { classes, paragraphs } = this.props
    const { checked } = this.state
    let paragraph

    // caret (triangle) work
    let caret
    if (this.state.checked === false) {
      caret = 'fas fa-caret-right'
    } else if (this.state.checked === true) {
      caret = 'fas fa-caret-down'
    }


    // make header paragraph work

    if (this.props.title) {
      paragraph = (
        <>
          <MediaQuery query='(max-width: 454px)'>
            <Divider gridSize='12' nameClass={'clickable'} click={this.handleChange} caret={caret} icon={this.props.icon} title={this.props.title} />
            <Grid item xs={Number(this.props.gridSize)}>
              {paragraphs.map((prop, key) => {
                return (
                  <Collapse in={checked} key={key}>
                    <span><Typo variant='body1'>{prop.name} </Typo><em className={classes.date}> {prop.date}</em> </span>
                    <Typo variant='body1' className={classes.lineHeight}><em className={classes.date}>{prop.company}</em></Typo>
                    <Typo variant='subheading' className={classes.indent}>{prop.subheading}</Typo>
                  </Collapse>
                )
              })}
            </Grid>
          </MediaQuery>
          <MediaQuery query='(min-width: 454px)'>
            <Divider gridSize='12' icon={this.props.icon} title={this.props.title} />
            {paragraphs.map((prop, key) => {
              return (
                <Grid key={key} item xs={Number(this.props.gridSize)} className={classes.marginRight}>
                  <span><Typo variant='body1' className={classes.text}>{prop.name} </Typo><em className={classes.date}> {prop.date}</em></span>
                  <Typo variant='body1'><em className={classes.date}> {prop.company}</em></Typo>
                  <Typo variant='subheading' className={classes.indent}>{prop.subheading}</Typo>
                </Grid>
              )
            })}
          </MediaQuery>
        </>
      )
    } else {
      paragraph = (

        <>
          <Grid item xs={Number(this.props.gridSize)} className={classes.marginRight}>
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