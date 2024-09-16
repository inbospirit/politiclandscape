// components/DreamTeam.js
import React, { useState } from 'react';
import Search from './Search'; // Fixed import path
import RoleList from './RoleList'; // Fixed import path

const DreamTeam = () => {
  const [roles, setRoles] = useState({
    presidente: null,
    ministroEconomia: null,
    jefeRelaciones: null,
    ministroDefensa: null,
    ministroInterior: null,
    ministroJusticia: null,
    salud: null,
    educacion: null,
    trabajo: null,
    transporte: null,
    agricultura: null,
    tecnologia: null,
  });

  const assignRole = (role, celeb) => {
    setRoles({ ...roles, [role]: celeb });
  };

  return (
    <div>
      <h1>Dream Team Gobierno</h1>
      <Search assignRole={assignRole} roles={roles} />
      <RoleList roles={roles} />
    </div>
  );
};

export default DreamTeam;
