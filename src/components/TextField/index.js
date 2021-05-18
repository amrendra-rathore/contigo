import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { commentRegex } from 'convert-source-map';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '99%',
      justifyContent: ''
    },
  },
}));
  
export default function BasicTextFields() {
  const classes = useStyles();
  
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <h3>This is a Disabled Input </h3>
      <TextField disabled id="standard-disabled" label="Disabled" defaultValue="Disabled Input" variant="outlined" />
      <h3>A Valid Input </h3>
      <TextField id="outlined-basic" label="Accessible" variant="outlined" />
      <h3>An Input with errors</h3>
      <TextField id="outlined-basic" label="101" variant="outlined" />
    </form>
  );
}