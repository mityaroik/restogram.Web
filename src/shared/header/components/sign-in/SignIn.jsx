import React from 'react';

import { Grid, Typography, Button, Dialog } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import CloseIcon from '@material-ui/icons/Close';

export class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  render() {
    return <Grid className = "signIn">
    <Button onClick={this.handleClickOpen} className='signIn__openBtn'>
      <AccountCircle className = 'signIn__icon'/>
      <Typography className = 'signIn__textBtn' variant="subheading">Вхід в акаунт</Typography>
    </Button>

    <Dialog
        onClose={this.handleClose}
        open={this.state.open}
      >
          <CloseIcon color="primary" onClick={this.handleClose} cursor="pointer" className="signIn__closeBtn" />
          
          <Button onClick={this.handleClose} variant="contained" color="primary" className="signIn__saveBtn">
            Увійти
            </Button>
      </Dialog>
    </Grid>
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
};

export default SignIn;

