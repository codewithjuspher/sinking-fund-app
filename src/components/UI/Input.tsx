import React from "react";
import "@/styles/components/input.css";

interface InputProps {
    label: string;
    type?: 'text' | 'password' | 'email' | 'number';
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    className?: string;
    style?: React.CSSProperties;
}

const Input: React.FC<InputProps> = ({
    label,
    type = '',
    value,
    onChange,
    placeholder = '',
    className = '',
    style = {},
}) => (
    <div className={`flex flex-col gap-1`} style={style}>
        <label className="input-label">{label}</label>
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`input-field ${className}`}
        />
    </div>
);

export default Input;