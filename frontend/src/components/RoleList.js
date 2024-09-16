import React from 'react';

const RoleList = ({ roles }) => {
  return (
    <div>
      <h2>Assigned Roles</h2>
      {/* List all roles and show the assigned celebrity for each role */}
      <ul>
        {Object.keys(roles).map((role) => (
          <li key={role}>
            <strong>{role}:</strong> 
            {/* Display the name of the assigned celebrity, or a message if not assigned */}
            {roles[role] ? roles[role].name : 'No one assigned yet'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoleList;
