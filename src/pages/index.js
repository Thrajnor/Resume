import React from 'react'

import Layout from '../components/layout/layout'
import Paper from '../components/base/paper'
import Avatar from '../components/header/avatar'

const IndexPage = () => (
  <Layout>
    <Paper>
      <Avatar gridSize='3' alt='Marcin' src={require('../images/AvatarCV.png')}/>
      <Header gridSize='3' disc='Web Developer'>Marcin Zaborowski</Header>
    </Paper>
  </Layout>
)

export default IndexPage
