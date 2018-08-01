import React from 'react';
import MaterialPaper from '@material-ui/core/Paper';

const Paper = ({children, data}) => {
  return (
    <MaterialPaper
    style={{
      margin: '2px auto',
      width: '21cm',
      height: '29.7cm',
    }}>
      {children}
    </MaterialPaper>
  )
}

export default Paper