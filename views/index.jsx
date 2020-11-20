import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import UserForm from './components/Forms';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(_id, name, age, email, date) {
  return { _id, name, age, email, date };
}



var DefaultLayout = require('./layouts/default');

const UserDisplay = (props) => {
  const rows = props.users;
  const [count, setCount] = useState(0);
  const classes = useStyles();

  return (
    <div>
      <UserForm/>
      <Table striped="true" bordered="true" hover="true">
        <thead>
          <tr>
            <th>_id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
         
            {
              rows.map((row) => (
                <tr key={`${row._id}`}>
                    <td>{`${row._id}`}</td>
                    <td>{`${row.name}`}</td>
                    <td>{`${row.age}`}</td>
                    <td>{`${row.email}`}</td>
                    <td>{`${row.date}`}</td>
                  </tr>

                ))
            }
        </tbody>
      </Table>
    </div>
    
  );
}

module.exports = UserDisplay;