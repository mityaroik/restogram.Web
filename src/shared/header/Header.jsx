import React from 'react';
import logo from '../../media/logo.png';
import Lang from '../header/components/lang/Lang';

import { Link } from 'react-router-dom';

import { Grid } from '@material-ui/core';

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return <Grid container alignItems={'center'} justify={'space-around'} direction={'row'} className="header">
      <Link className="logo-link" to="/">
        <Grid item xs={4}> <img src={logo} alt="logo" /> </Grid>
      </Link>
      <Lang />
    </Grid>
  }
}

export default Header;
