import React from 'react';
import Header from '../../shared/header/Header'
import Footer from '../../shared/footer/Footer';

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
        <Grid className="home">
          
        </Grid>
        <Footer />
      </Grid>
  }
};

export default Home;

