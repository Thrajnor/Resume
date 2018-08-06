import React from 'react';
import propTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typo from '@material-ui/core/Typography';



const styles = theme => ({
  text: {
    textAlign: 'left'
  },
  Experience: {
    float: 'right'
  }
});

const Skills = (props) => {
  const { classes } = props
  // sorts skillsArray
  const biggerFirst = () => {
    let array = props.skills
    let skillsArray = array.sort(array.experience)
    // skillsArray = skillsArray.reverse()
    return skillsArray
  }
  let skillsArray = biggerFirst()

  // make experience radio
  const experience = (num) => {
    let checked = [] 
    let unchecked = []
    if (num == 0) {
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

  // make list of skills
  const skills = skillsArray.map((skill) => {
    return (
      <Grid item xs={Number(props.gridSize)} key={skill.name}>
        <Typo className={classes.text}>{skill.icon} {skill.name} {experience(skill.experience)}</Typo>
      </Grid>
    )
  })
  return (
    <Grid item xs={12}>
      <Grid container spacing={24}>
        {skills}
      </Grid>
    </Grid>
  )
}

Skills.propTypes = {
  classes: propTypes.object.isRequired,
};

export default withStyles(styles)(Skills)