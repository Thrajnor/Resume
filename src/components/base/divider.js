import React from 'react';
import propTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typo from '@material-ui/core/Typography';
import MaterialDivider from '@material-ui/core/Divider';

const Header = (props) => {
  return (
    <Grid item xs={Number(props.gridSize)}>
        <Typo>{props.icon} {props.title}</Typo>
        <MaterialDivider inset />
        {props.children}
    </Grid>
  )
}

Header.propTypes = {
  classes: propTypes.object.isRequired,
};

export default Header