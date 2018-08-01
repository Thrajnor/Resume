import React from 'react'

import Layout from '../components/layout'
import Paper from '../components/paper'
import Avatar from '../components/avatar'

const IndexPage = () => (
  <Layout>
    <Paper>
      <Avatar gridSize='6' alt='Marcin' src={require('../images/AvatarCV.png')}/>
    </Paper>
  </Layout>
)

export default IndexPage
