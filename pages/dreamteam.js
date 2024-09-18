import React from 'react';
import Layout from '../components/Layout'; // The layout with sidebars
import DreamTeam from '../components/DreamTeam'; // The DreamTeam feature
import ProtectedRoute from '../components/ProtectedRoute'; // Protect the route
import { useSelector } from 'react-redux'; // Redux for authentication

const DreamTeamPage = () => {
  const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated ?? false);

  return (
    <ProtectedRoute isAuthenticated={isAuthenticated}>
      <Layout> 
        <DreamTeam /> {/* DreamTeam is rendered in the middle */}
      </Layout>
    </ProtectedRoute>
  );
};

export default DreamTeamPage;
