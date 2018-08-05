import React from 'react';
import propTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typo from '@material-ui/core/Typography';
import MaterialDivider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const Header = (props) => {
  return (
    <Grid item xs={Number(props.gridSize)}>
      <List>
        <ListItem>
          <Avatar>

          </Avatar>
          <Typo>{props.title}</Typo>
        </ListItem>
        <MaterialDivider inset component="li" />
      </List>
    </Grid>
  )
}

Header.propTypes = {
  classes: propTypes.object.isRequired,
};

export default Header