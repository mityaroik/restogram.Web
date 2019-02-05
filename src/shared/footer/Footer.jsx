import React from 'react';
import { Grid, Typography } from '@material-ui/core';


export class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return <Grid container justify={'space-between'} className="footer">
      <Typography className="footer__copyright">Copyright © 2019 Restogram all rights reserved. </Typography>
    </Grid>
  }
}

export default Footer;
