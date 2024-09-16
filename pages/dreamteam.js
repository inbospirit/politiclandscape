// pages/dreamteam.js
import React from 'react';
import Layout from '../components/Layout'; // The layout with sidebars
import DreamTeam from '../components/DreamTeam'; // The DreamTeam feature

const DreamTeamPage = () => {
  return (
    <Layout> {/* Use the Layout to wrap the DreamTeam feature */}
      <DreamTeam /> {/* This renders the DreamTeam in the middle */}
    </Layout>
  );
};

export default DreamTeamPage;
