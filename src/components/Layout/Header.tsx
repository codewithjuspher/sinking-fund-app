import React from 'react';

const Header: React.FC = () => (
    <header className="bg-blue-600 text-white p-4">
        <h1 className="text-lg font-bold">Sinking Fund App</h1>
        <nav>
            <ul className="flex gap-4">
                <li><a href="/" className="hover:underline">Home</a></li>
                <li><a href="/create-fund" className="hover:underline">Create Fund</a></li>
                <li><a href="/join-fund" className="hover:underline">Join Fund</a></li>
            </ul>
        </nav>
    </header>
);

export default Header;