import React from 'react'

import Layout from '../components/layout/layout'
import Paper from '../components/base/paper'
import Avatar from '../components/header/avatar'
import Contact from '../components/header/contact'
import Header from '../components/header/header';
import Paragraph from '../components/header/paragraph';
import Divider from '../components/base/divider';
import Skills from '../components/body/skills';

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
      <Paragraph gridSize='12'>i'm proactive and eager to learn new things through work.</Paragraph>
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
      <Divider gridSize='12' icon={<i className="fas fa-check-circle"></i>} title='Certificates'/>
      <Divider gridSize='12' icon={<i className="far fa-handshake"></i>} title='Soft Skills'/>
    </Paper>
  </Layout>
)

export default IndexPage
