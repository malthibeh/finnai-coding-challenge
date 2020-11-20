import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


const UserForm = (props) => {
    return (
      <form action="/api/user" method="POST">
        <input type="text" name="name"/>
        <input type="number" name="age"/>
        <input type="text" name="email"/>
        <input type="submit" name="submit" value="Create User"/>
    </form>
    );
  }

  module.exports = UserForm;