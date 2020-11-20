import React from 'react';
import UserForm from './components/Forms';

const UserDisplay = (props) => {
  const rows = props.users;

  return (
    <div>
      <UserForm/>
      <table striped="true" bordered="true" hover="true">
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
      </table>
    </div>
    
  );
}

module.exports = UserDisplay;