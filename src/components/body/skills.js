import React from 'react';
import propTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typo from '@material-ui/core/Typography';



const styles = theme => ({
  text: {
    textAlign: 'left',
  },
  Experience: {
    float: 'right',
    [theme.breakpoints.up('lg')]: {
      marginLeft: '2rem'
    },
  },
  marginRight: {
    marginRight: '1.945rem',
  }
});

const Skills = (props) => {
  const { classes } = props
  // sorts skillsArray
  const biggerFirst = () => {
    let array = props.skills
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
      <Grid item xs={Number(props.gridSizeXS)} sm={Number(props.gridSizeSM)} md={Number(props.gridSize)} key={skill.name}>
        <Typo className={skill.fix === 'mr' ? fixClasses : classes.text} variant={skill.variant}>
          {skill.icon} <span className={skill.fix}>{skill.name}</span>
          {experience(skill.experience)}
        </Typo>
      </Grid>
    )
  })
  return (
    <Grid item xs={12}>
      <Grid container spacing={0}>
        {skills}
      </Grid>
    </Grid>
  )
}

Skills.propTypes = {
  classes: propTypes.object.isRequired,
};

export default withStyles(styles)(Skills)