import React from 'react';
import propTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typo from '@material-ui/core/Typography';
import Divider from 'components/base/divider';
import Collapse from '@material-ui/core/Collapse';
import MediaQuery from 'react-responsive';



const styles = theme => ({
  text: {
    textAlign: 'left'
  },
  Experience: {
    float: 'right'
  },
  marginRight: {
    [theme.breakpoints.up('sm')]: {
      marginRight: '.9725rem',
      marginLeft: '.9725rem'
    },
  }
});
class Skills extends React.Component {
  state = {
    checked: false,
  };

  handleChange = () => {
    this.setState(state => ({ checked: !state.checked }));
  };



  render() {
    const { checked } = this.state;
    const { classes } = this.props
    // sorts skillsArray
    const biggerFirst = () => {
      let array = this.props.skills
      const compare = (a,b) => {
        if (a.experience < b.experience)
          return 1;
        if (a.experience > b.experience)
          return -1;
        return 0;
      }

      let skillsArray = array.sort(compare)
      
      // skillsArray = skillsArray.reverse()
      return skillsArray
    }
    let skillsArray = biggerFirst()

    // make experience radio
    const experience = (num) => {
      let checked = [] 
      let unchecked = []
      if (num === '') {
        return
      }
      for(let i = 0; i < num; i++) {
        checked.push(<i className="material-icons" key={i}>radio_button_checked</i>)
      }
      for(let i = 0; i < (5 - num); i++) {
        checked.push(<i className="material-icons" key={i + 5}>radio_button_unchecked</i>)
      }
      return (
        <span className={classes.Experience}>
          {checked} {unchecked}
        </span>
      )
    }

    // Fix classes
    let fixClasses = [classes.text, classes.marginRight].join(' ')

    // make list of skills
    const skills = skillsArray.map((skill) => {
      return (
        <Grid item xs={Number(this.props.gridSizeXS)} sm={Number(this.props.gridSizeSM)} md={Number(this.props.gridSize)} key={skill.name}>
          <Typo className={fixClasses} variant={skill.variant}>
            {skill.icon} <span className={skill.fix}>{skill.name}</span>
            {experience(skill.experience)}
          </Typo>
        </Grid>
      )
    })

    // caret (triangle) work
    let caret
    if (this.state.checked === false) {
      caret = 'fas fa-caret-right'
    } else if (this.state.checked === true) {
      caret = 'fas fa-caret-down'
    }

    return (
        <>
          <Grid item xs={12}>
            <MediaQuery query='(max-width: 454px)'>
              <Grid container spacing={24}>
                <Divider gridSize='12' nameClass={'clickable'} click={this.handleChange} caret={caret} icon={this.props.icon} title={this.props.title}/>
                <Grid item xs={12}>
                  <Collapse in={checked}>
                    <Grid container spacing={0}>
                      {skills}
                    </Grid>
                  </Collapse>
                </Grid>
              </Grid>
            </MediaQuery>
            <MediaQuery query='(min-width: 455px)'>
              <Grid container spacing={24}>
                <Divider gridSize='12' icon={this.props.icon} title={this.props.title}/>
                <Grid item xs={12}>
                  <Grid container spacing={0}>
                    {skills}
                  </Grid>
                </Grid>
              </Grid>
            </MediaQuery>
          </Grid>
        </>
    )
  }
}

Skills.propTypes = {
  classes: propTypes.object.isRequired,
};

export default withStyles(styles)(Skills)