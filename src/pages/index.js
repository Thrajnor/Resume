import React from 'react'

import Layout from '../components/layout/layout'
import Paper from '../components/base/paper'
import Avatar from '../components/header/avatar'
import Contact from '../components/header/contact'
import Header from '../components/header/header';
import Paragraph from '../components/body/paragraph';
import Divider from '../components/base/divider';
import Skills from '../components/body/skills';
import Footer from '../components/body/footer';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';

const IndexPage = () => {
  return (
    <Layout>
      <Paper>
        <Avatar gridSize='3' alt='Marcin' src={require('../images/AvatarCV.png')}/>
        <Grid item xs>
          <Grid container spacing={0}>
            <Header gridSize='4' disc='Web Developer' firstName='Marcin' lastName='Zaborowski'></Header>
            <Contact gridSize='5' 
                     Mail='marcin.zaborowski@protonmail.com' 
                     LinkedIn='linkedin.com/in/marcin-zaborowski/' 
                     Github='github.com/Thrajnor' 
                     Home='Wrocław, Poland' 
                     Phone='536 486 861'/>
          </Grid>
        </Grid>
        <Paragraph gridSize='12' subheading="I'm proactive and eager to learn new things through work." />
        <Divider gridSize='12' icon={<i className="fas fa-cogs"></i>} title='Skills'/>
          <Skills gridSizeXS='12' gridSizeSM='4' gridSize='3' skills={[
              {variant: 'display3', icon:<i className="fab fa-html5"></i>, name: 'Html5', experience: '4'},
              {variant: 'display3', icon:<i className="fab fa-css3-alt"></i>, name: 'Css3', experience: '4', fix:'smallTextFix'},
              {variant: 'display3', icon:<i className="fab fa-git-square"></i>, name: 'Git', experience: '3', fix:'smallTextFix'},
              {variant: 'display3', icon:<i className="fab fa-js-square"></i>, name: 'JavaScript', experience: '3'},
              {variant: 'display3', icon:<i className="fab fa-react"></i>, name: 'React', experience: '3'},
              {variant: 'display3', icon:<i className="fab fa-sass"></i>, name: 'Sass', experience: '3', fix:'smallTextFix'},
              {variant: 'display3', icon:<i className="fab fa-node-js"></i>, name: 'NodeJs', experience: '2'},
              {variant: 'display3', icon:<i className="fab fa-vuejs"></i>, name: 'VueJS', experience: '2'},
            ]} />
        <Divider gridSize='12' icon={<i className="fas fa-comments"></i>} title='Languages'/>
          <Skills gridSizeXS='12' gridSizeSM='6' gridSize='6' skills={[
              {variant: 'display3', icon:'', name: 'English', experience: '5'},
              {variant: 'display3', icon:'', name: 'Polish', experience: '5'},
            ]} />
        <Divider gridSize='12' icon={<i className="fas fa-code"></i>} title='Work Experience'/>
          <Paragraph gridSize='12' title='Freelancing' subTitle='(July 2018 – Present)' />
        <Divider gridSize='12' icon={<i className="fas fa-check-circle"></i>} title='Certificates'/>
          <Paragraph gridSize='12' title='The Web Developer Bootcamp' subTitle='(09 May 2018)' subheading={<ButtonBase><a href='https://www.ude.my/UC-ENB0NKS0'>https://www.ude.my/UC-ENB0NKS0</a></ButtonBase>} />
        <Divider gridSize='12' icon={<i className="far fa-lightbulb"></i>} title='Interests'/>
          <Skills gridSizeXS='6' gridSizeSM='3' gridSize='3' skills={[
              {variant: 'body2', icon:'', name: 'Coding', experience: ''},
              {variant: 'body2', icon:'', name: 'Scouting', experience: ''},
              {variant: 'body2', icon:'', name: 'Cooking', experience: ''},
              {variant: 'body2', icon:'', name: 'Veganism', experience: ''},
              {variant: 'body2', icon:'', name: 'Psychology', experience: ''},
              {variant: 'body2', icon:'', name: 'Hiking', experience: ''},
              {variant: 'body2', icon:'', name: 'Gaming', experience: ''},
              {variant: 'body2', icon:'', name: 'Technology', experience: ''},
            ]} />
        <Footer gridSize='12' disc='I hereby give consent for my personal data included in my application to be processed for the purposes of the recruitment process under the Personal Data Protection Act as of 29 August 1997, consolidated text: Journal of Laws 2016, item 922 as amended.' powered='Powered by React' poweredIcon={<i className="fab fa-react"></i>} />
      </Paper>
    </Layout>
  )
}

export default IndexPage
