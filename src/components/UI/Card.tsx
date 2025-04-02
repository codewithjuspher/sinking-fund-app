import React from 'react';
import '@/styles/components/card.css';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({ children, className = 'card', style = {} }) => (
    <div
        className={`bg-white shadow-md rounded-lg p-4 ${className}`}
        style={style}
    >
        {children}
    </div>
);

export default Card;