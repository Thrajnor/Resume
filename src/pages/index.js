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

const IndexPage = () => (
  <Layout>
    <Paper>
      <Avatar gridSize='3' alt='Marcin' src={require('../images/AvatarCV.png')}/>
      <Header gridSize='3' disc='Web Developer'>Marcin Zaborowski</Header>
      <Contact gridSize='6' 
               Mail='marcin.zaborowski@protonmail.com' 
               LinkedIn='linkedin.com/in/marcin-zaborowski/' 
               Github='github.com/Thrajnor' 
               Home='Wrocław, Poland' 
               Phone='123 456 789'/>
      <Paragraph gridSize='12' subheading="i'm proactive and eager to learn new things through work." />
      <Divider gridSize='12' icon={<i className="fas fa-cogs"></i>} title='Skills'/>
        <Skills gridSize='3' skills={[
            {icon:<i className="fab fa-html5"></i>, name: 'Html5', experience: '4'},
            {icon:<i className="fab fa-css3-alt"></i>, name: 'Css3', experience: '4'},
            {icon:<i className="fab fa-git-square"></i>, name: 'Git', experience: '3'},
            {icon:<i className="fab fa-js-square"></i>, name: 'JavaScript', experience: '3'},
            {icon:<i className="fab fa-react"></i>, name: 'React', experience: '3'},
            {icon:<i className="fab fa-sass"></i>, name: 'Sass', experience: '3'},
            {icon:<i className="fab fa-node-js"></i>, name: 'NodeJs', experience: '2'},
            {icon:<i className="fab fa-vuejs"></i>, name: 'VueJS', experience: '2'},
          ]} />
      <Divider gridSize='12' icon={<i className="fas fa-comments"></i>} title='Languages'/>
        <Skills gridSize='6' skills={[
            {icon:'', name: 'English', experience: '5'},
            {icon:'', name: 'Polish', experience: '5'},
          ]} />
      <Divider gridSize='12' icon={<i className="fas fa-code"></i>} title='Work Experience'/>
        <Paragraph gridSize='12' title='Freelancing' subTitle='(July 2018 – Present)' />
      <Divider gridSize='12' icon={<i className="fas fa-check-circle"></i>} title='Certificates'/>
        <Paragraph gridSize='12' title='The Web Developer Bootcamp' subTitle='(09 May 2018)' subheading={<ButtonBase><a href='https://www.ude.my/UC-ENB0NKS0'>https://www.ude.my/UC-ENB0NKS0</a></ButtonBase>} />
      <Divider gridSize='12' icon={<i className="far fa-lightbulb"></i>} title='Intrests'/>
        <Skills gridSize='3' skills={[
            {variant: 'body2', icon:'', name: 'Coding', experience: ''},
            {variant: 'body2', icon:'', name: 'Scouting', experience: ''},
            {variant: 'body2', icon:'', name: 'Cooking', experience: ''},
            {variant: 'body2', icon:'', name: 'Veganism', experience: ''},
            {variant: 'body2', icon:'', name: 'Psychology', experience: ''},
            {variant: 'body2', icon:'', name: 'Hiking', experience: ''},
            {variant: 'body2', icon:'', name: 'Gaming', experience: ''},
            {variant: 'body2', icon:'', name: 'Technology', experience: ''},
          ]} />
    </Paper>
  </Layout>
)
        <Footer gridSize='12' disc='I hereby give consent for my personal data included in my application to be processed for the purposes of the recruitment process under the Personal Data Protection Act as of 29 August 1997, consolidated text: Journal of Laws 2016, item 922 as amended.' powered='Powered by React' poweredIcon={<i className="fab fa-react"></i>} />

export default IndexPage
