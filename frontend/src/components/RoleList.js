import React from 'react';

const RoleList = ({ roles }) => {
  return (
    <div>
      <h2>Assigned Roles</h2>
      <ul>
        {Object.keys(roles).map((role) => (
          <li key={role}>
            <strong>{role}:</strong>{' '}
            {roles[role] ? roles[role].name : 'No one assigned yet'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoleList;


