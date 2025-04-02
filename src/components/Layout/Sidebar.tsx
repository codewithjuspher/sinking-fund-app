import React from 'react';

const Sidebar: React.FC = () => (
  <aside className="w-64 bg-gray-100 p-4">
    <ul>
      <li><a href="/">Dashboard</a></li>
      <li><a href="/create-fund">Create Fund</a></li>
      <li><a href="/join-fund">Join Fund</a></li>
    </ul>
  </aside>
);

export default Sidebar;