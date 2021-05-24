import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Slider } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '99%',
    },
  },
}));
  
export default function BasicTextFields() {
  const classes = useStyles();
  
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <h3>This is a Disabled Input </h3>
      <TextField disabled id="filled-disabled" label="" defaultValue="Disabled Input" variant="outlined"/>
      <h3>A Valid Input </h3>
      <TextField error id="outlined-error-helper-text" label="" placeholder="Accessible" variant="outlined" />
      <h3>An Input with errors</h3>
      <TextField error id="outlined-error-helper-text" label="" helperText="Could not be greater than 100" variant="outlined" />
    </form>
  );
}