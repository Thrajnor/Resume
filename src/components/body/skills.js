import React from 'react';
import propTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typo from '@material-ui/core/Typography';
import Divider from 'components/base/divider';



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
    [theme.breakpoints.up('sm')]: {
      marginRight: '1.945rem',
    },
  }
});
class Skills extends React.Component {

  render() {
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
          <Typo className={skill.fix === 'mr' ? fixClasses : classes.text} variant={skill.variant}>
            {skill.icon} <span className={skill.fix}>{skill.name}</span>
            {experience(skill.experience)}
          </Typo>
        </Grid>
      )
    })


    return (
        <>
          <Divider gridSize='12' icon={this.props.icon} title={this.props.title}/>
          <Grid item xs={12}>
            <Grid container spacing={0} className='slide-toggle__box-inner' style={{ opacity: Math.max(0.5, range) }}>
              {skills}
            </Grid>
          </Grid>
        </>
    )
  }
}

Skills.propTypes = {
  classes: propTypes.object.isRequired,
};

export default withStyles(styles)(Skills)