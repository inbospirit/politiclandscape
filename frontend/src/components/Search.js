import React, { useState } from 'react';

const Search = ({ assignRole, roles }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('');

  const celebrities = [
    { id: 1, name: 'Celebrity One', photo: 'url', age: 45, birthplace: 'Place A' },
    { id: 2, name: 'Celebrity Two', photo: 'url', age: 50, birthplace: 'Place B' }
    // You can load the celebrities list dynamically from your API here
  ];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCelebrities = celebrities.filter((celeb) =>
    celeb.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAssignClick = (celeb) => {
    if (selectedRole) {
      assignRole(selectedRole, celeb);
      setSelectedRole(''); // Reset the role selection after assignment
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a public figure..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <select onChange={(e) => setSelectedRole(e.target.value)} value={selectedRole}>
        <option value="">Select Role</option>
        {Object.keys(roles).map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>
      <ul>
        {filteredCelebrities.map((celeb) => (
          <li key={celeb.id}>
            <img src={celeb.photo} alt={celeb.name} width="50" height="50" />
            {celeb.name} <button onClick={() => handleAssignClick(celeb)}>Assign</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;

