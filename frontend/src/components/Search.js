import React, { useState } from 'react';

const Search = ({ assignRole, roles }) => {
  // State to manage the search input
  const [searchTerm, setSearchTerm] = useState('');
  
  // State to track the currently selected role for assigning a public figure
  const [selectedRole, setSelectedRole] = useState('');
  
  // State to manage any error messages (e.g., if no role is selected)
  const [error, setError] = useState('');

  // State to store a list of available celebrities (in a real app, this could come from an API)
  const [celebrities, setCelebrities] = useState([
    { id: 1, name: 'Celebrity One', photo: 'url', age: 45, birthplace: 'Place A' },
    { id: 2, name: 'Celebrity Two', photo: 'url', age: 50, birthplace: 'Place B' }
  ]);
  
  // State to manage the creation of a new celebrity
  const [newCelebrity, setNewCelebrity] = useState({ name: '', photo: '', age: '', birthplace: '' });

  // Update search term as the user types in the input field
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter celebrities based on the search term (case insensitive)
  const filteredCelebrities = celebrities.filter((celeb) =>
    celeb.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to assign the selected celebrity to the selected role
  const handleAssignClick = (celeb) => {
    // Ensure a role is selected before assigning
    if (!selectedRole) {
      setError('Please select a role before assigning.');
    } else if (roles[selectedRole]) {
      // Check if the selected role is already filled
      setError('This role is already filled. Please choose another.');
    } else {
      // Assign the celebrity to the role and reset the selection
      assignRole(selectedRole, celeb);
      setSelectedRole(''); // Clear selected role
      setError(''); // Clear any errors
    }
  };

  // Function to handle the creation of a new celebrity
  const handleNewCelebritySubmit = () => {
    // Ensure the new celebrity has both a name and a photo before adding
    if (newCelebrity.name && newCelebrity.photo) {
      // Add the new celebrity to the list
      setCelebrities([...celebrities, { ...newCelebrity, id: celebrities.length + 1 }]);
      // Reset the new celebrity form
      setNewCelebrity({ name: '', photo: '', age: '', birthplace: '' });
    }
  };

  return (
    <div>
      {/* Input field for searching celebrities */}
      <input
        type="text"
        placeholder="Search for a public figure..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      
      {/* Dropdown to select a role for assignment */}
      <select onChange={(e) => setSelectedRole(e.target.value)} value={selectedRole}>
        <option value="">Select Role</option>
        {/* Dynamically generate options for each role */}
        {Object.keys(roles).map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>
      
      {/* Display any error messages */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* List of celebrities filtered by the search term */}
      <ul>
        {filteredCelebrities.map((celeb) => (
          <li key={celeb.id}>
            {/* Display celebrity photo and name */}
            <img src={celeb.photo} alt={celeb.name} width="50" height="50" />
            {celeb.name}
            {/* Button to assign the selected celebrity to the selected role */}
            <button onClick={() => handleAssignClick(celeb)}>Assign</button>
          </li>
        ))}
      </ul>

      {/* Form for adding a new celebrity */}
      <h3>Add a New Celebrity</h3>
      <input
        type="text"
        placeholder="Name"
        value={newCelebrity.name}
        onChange={(e) => setNewCelebrity({ ...newCelebrity, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Photo URL"
        value={newCelebrity.photo}
        onChange={(e) => setNewCelebrity({ ...newCelebrity, photo: e.target.value })}
      />
      <input
        type="number"
        placeholder="Age"
        value={newCelebrity.age}
        onChange={(e) => setNewCelebrity({ ...newCelebrity, age: e.target.value })}
      />
      <input
        type="text"
        placeholder="Birthplace"
        value={newCelebrity.birthplace}
        onChange={(e) => setNewCelebrity({ ...newCelebrity, birthplace: e.target.value })}
      />
      {/* Button to add the new celebrity */}
      <button onClick={handleNewCelebritySubmit}>Add Celebrity</button>
    </div>
  );
};

export default Search;

