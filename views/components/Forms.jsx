import React from 'react';

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