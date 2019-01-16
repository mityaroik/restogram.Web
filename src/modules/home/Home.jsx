import React from 'react';
import Header from '../../shared/header/Header'

import { Grid } from '@material-ui/core';

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() { 
      return <Grid container alignItems={"center"} justify={"center"} direction={"column"}>
        <Header />
      </Grid>
  }
};

export default Home;

