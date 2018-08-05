import React from 'react'

import Layout from '../components/layout/layout'
import Paper from '../components/base/paper'
import Avatar from '../components/header/avatar'
import Contact from '../components/header/contact'
import Header from '../components/header/header';
import Paragraph from '../components/header/paragraph';

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
      <Paragraph gridSize='12'>Proactive and ready to work right away.</Paragraph>
    </Paper>
  </Layout>
)

export default IndexPage
