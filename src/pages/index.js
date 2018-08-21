import React from 'react'

import Layout from 'components/layout/layout'
import Paper from 'components/base/paper'
import Avatar from 'components/header/avatar'
import Contact from 'components/header/contact'
import Header from 'components/header/header';
import Paragraph from 'components/body/paragraph';
import Skills from 'components/body/skills';
import Footer from 'components/body/footer';
import Print from 'components/body/print';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import Loading from 'components/base/loading';

const IndexPage = () => {
  return (
    <Loading>
      <Layout>
        <Print src={require('images/CV.pdf')}>Download PDF!</Print>
        <Paper>
          <Avatar gridSize='3' alt='Marcin' src={require('images/AvatarCV.png')}/>
          <Grid item xs sm={7} md>
            <Grid container spacing={0}>
              <Header gridSize='4' disc='Web Developer' firstName='Marcin' lastName='Zaborowski'></Header>
              <Contact gridSize='5' 
                      Mail='mzaborowski@protonmail.com' 
                      LinkedIn='linkedin.com/in/marcin-zaborowski' 
                      Github='github.com/Thrajnor' 
                      Home='Wrocław, Poland' 
                      Phone='+48 536 486 861'/>
            </Grid>
          </Grid>
          <Paragraph gridSize='12' subheading="I'm proactive and eager to learn new things through work." />
          <Skills gridSizeXS='12' gridSizeSM='12' gridSize='6' title='Skills' icon={<i className="fas fa-cogs"></i>} skills={[
              {variant: 'display3', icon:<i className="fab fa-html5"></i>, name: 'Html5', experience: '4', fix:'smallTextFix'},
              {variant: 'display3', icon:<i className="fab fa-git-square"></i>, name: 'Git', experience: '3', fix:'smallTextFix'},
              {variant: 'display3', icon:<i className="fab fa-js-square"></i>, name: 'JavaScript', experience: '3'},
              {variant: 'display3', icon:<i className="fab fa-react"></i>, name: 'React', experience: '3', fix:'smallTextFix'},
              {variant: 'display3', icon:<i className="fab fa-sass"></i>, name: 'Sass', experience: '3', fix:'smallTextFix'},
              {variant: 'display3', icon:<i className="fab fa-node-js"></i>, name: 'NodeJs', experience: '2'},
              {variant: 'display3', icon:<i className="fab fa-vuejs"></i>, name: 'VueJS', experience: '1', fix:'smallTextFix'},
              {variant: 'display3', icon:<i className="fab fa-css3-alt"></i>, name: 'Css3', experience: '4', fix:'smallTextFix'},
            ]} />
          <Skills gridSizeXS='12' gridSizeSM='12' gridSize='6' title='Languages' icon={<i className="fas fa-comments"></i>} skills={[
              {variant: 'display3', icon:'', name: 'English', experience: '5', fix:'mr'},
              {variant: 'display3', icon:'', name: 'Polish', experience: '5', fix:'smallTextFix'},
            ]} />
          <Paragraph gridSize='12' name='Freelancing' date='(July 2018 – Present)' title='Work Experience' icon={<i className="fas fa-code"></i>} />
          <Paragraph gridSize='12' 
                    name='The Web Developer Bootcamp' 
                    date='(09 May 2018)' 
                    subheading={<a href='https://www.ude.my/UC-ENB0NKS0'><ButtonBase>https://www.ude.my/UC-ENB0NKS0</ButtonBase></a>}
                    icon={<i className="fas fa-check-circle"></i>}
                    title='Certificates' />
          <Skills gridSizeXS='6' gridSizeSM='3' gridSize='3' title='Interests' icon={<i className="far fa-lightbulb"></i>} skills={[
              {variant: 'body2', name: 'Coding'},
              {variant: 'body2', name: 'Scouting'},
              {variant: 'body2', name: 'Cooking'},
              {variant: 'body2', name: 'Veganism'},
              {variant: 'body2', name: 'Psychology'},
              {variant: 'body2', name: 'Hiking'},
              {variant: 'body2', name: 'Gaming'},
              {variant: 'body2', name: 'Technology'},
            ]} />
          <Footer gridSize='12' disc='I hereby give consent that my personal data will be processed in order to recruit for the position I am applying for.' powered='Powered by React' poweredIcon={<i className="fab fa-react"></i>} />
        </Paper>
      </Layout>
    </Loading>
  )
}

export default IndexPage
