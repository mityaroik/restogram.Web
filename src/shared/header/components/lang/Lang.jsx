import React from 'react';

import { Grid, Typography, Button, Dialog, TextField } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import MediaQuery from 'react-responsive';

import flag_ua from '../../../../media/flag_ua.png';

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
    return <Grid>
      <Button onClick={this.handleClickOpen} className="lang__openBtn">
        <img src={flag_ua} alt='flag_ua' className="lang__flagImg"/>
        <Typography variant="subheading" className="lang__textBtn">
          <MediaQuery query="(min-width: 960px)">
            {(i) => i ? <span> Українська (UAH - грн) </span> : <span> Укр (грн) </span> }
          </MediaQuery>
        </Typography>
      </Button>

      <Dialog
        onClose={this.handleClose}
        open={this.state.open}
      >
          <CloseIcon color="primary" onClick={this.handleClose} cursor="pointer" className="lang__closeBtn" />
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
            className="lang__label"
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
            className="lang__label"
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
            className="lang__label"
          >
            {currency.map(option => (
              <option key={option.value} value={option.value}>
                {option.value}
              </option>
            ))}
          </TextField>
          <Button onClick={this.handleClose} variant="contained" color="primary" className="lang__saveBtn">
            Зберегти
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

export default Lang;

