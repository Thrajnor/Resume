import React from 'react'

import Layout from '../components/layout'
import Paper from '../components/paper'
import Avatar from '../components/avatar'
import Contact from '../components/contact'

const IndexPage = () => (
  <Layout>
    <Paper>
      <Avatar gridSize='6' alt='Marcin' src={require('../images/AvatarCV.png')}/>
      <Contact gridSize='6' Mail='protonmail.com' LinkedIn='linkedin.com' Github='github.com' Home='Poland' Phone='123 456 789'/>
    </Paper>
  </Layout>
)

export default IndexPage
