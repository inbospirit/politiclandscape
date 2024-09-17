import React from 'react';
import Sidebar from './Sidebar'; // Left sidebar
import ChatSidebar from './ChatSidebar'; // Right sidebar (for member chats)

const Layout = ({ children }) => {
  return (
    <div className="flex">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content Area (DreamTeam in the middle) */}
      <div className="flex-1 p-4">
        {children} {/* This will render DreamTeam or other main content */}
      </div>

      {/* Right Sidebar (for member chats or notifications) */}
      <ChatSidebar />
    </div>
  );
};

export default Layout;
