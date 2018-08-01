import React from 'react'

import Layout from '../components/layout'
import Paper from '../components/paper'
import Avatar from '@material-ui/core/Avatar'

const IndexPage = () => (
  <Layout>
    <Paper>
      <Avatar alt='Marcin' src={require('../images/AvatarCV.png')}/>
    </Paper>
  </Layout>
)

export default IndexPage
