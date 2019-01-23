import React from 'react';

import { Grid, Typography, Button, Dialog, TextField } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import flag_ua from '../../../../media/flag_ua.png'

const country = [
  {
    value: 'Україна'
  },
  {
    value: 'England'
  }
];

const language = [
  {
    value: "Українська"
  },
  {
    value: "Русский"
  },
  {
    value: "English"
  }
];

const currency = [
  {
    value: "Українська гривня"
  },
  {
    value: "Долар США"
  }
]

export class Lang extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  render() {
    return <Grid className="lang">
      <Button onClick={this.handleClickOpen}>
        <img src={flag_ua} alt='flag_ua' className="lang__flagImg"/>
        <Typography variant="subheading" className="lang__btn">Українська (UAH - грн)</Typography>
      </Button>

      <Dialog
        onClose={this.handleClose}
        open={this.state.open}
      >
          <CloseIcon color="primary" onClick={this.handleClose} cursor="pointer" />
          {/* Country */}
          <TextField
            select
            label="Країна"
            value={this.state.country}
            variant="outlined"
            SelectProps={{
              native: true,
            }}
            fullWidth
          >
            {country.map(option => (
              <option key={option.value} value={option.value}>
                {option.value}
              </option>
            ))}
          </TextField>

            {/* Language  */}
          <TextField
            select
            label="Мова"
            value={this.state.language}
            variant="outlined"
            SelectProps={{
              native: true,
            }}
            fullWidth
          >
            {language.map(option => (
              <option key={option.value} value={option.value}>
                {option.value}
              </option>
            ))}
          </TextField>

            {/* Сurrency  */}
            <TextField
            select
            label="Валюта"
            value={this.state.currency}
            variant="outlined"
            SelectProps={{
              native: true,
            }}
            fullWidth
          >
            {currency.map(option => (
              <option key={option.value} value={option.value}>
                {option.value}
              </option>
            ))}
          </TextField>
          <Button onClick={this.handleClose} variant="contained" color="primary">
            Зберегти
            </Button>
      </Dialog>
    </Grid>
  }

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
};

export default Lang;

