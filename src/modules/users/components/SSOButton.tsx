import React from 'react';
import './SSButton.css';

interface SSOButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean; 
  type?: 'button' | 'submit' | 'reset'; 
  ariaLabel?: string;
  loading?: boolean; 
}

const SSOButton: React.FC<SSOButtonProps> = ({
  onClick,
  children,
  className = '',
  disabled = false,
  type = 'button',
  ariaLabel,
  loading = false,
}) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled || loading}
    aria-label={ariaLabel}
    className={`sso-button ${className}`}
  >
    {loading ? (
      <span className="sso-button-spinner">
        <span className="spinner-border animate-spin"></span> Loading...
      </span>
    ) : (
      children
    )}
  </button>
);

export default SSOButton;