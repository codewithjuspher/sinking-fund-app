import React from 'react';
import './Card.css';
import { CardProps } from "@/types";

const Card: React.FC<CardProps> = ({ children, className = 'card', style = {} }) => (
    <div
        className={`bg-white shadow-md rounded-lg p-4 ${className}`}
        style={style}
    >
        {children}
    </div>
);

export default Card;