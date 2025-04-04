export interface ButtonProps {
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    className?: string;
    ariaLabel?: string;
    loading?: boolean;
    children?: React.ReactNode | ((type: string) => React.ReactNode);
}

export interface CardProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export interface InputProps {
    label: string;
    type?: 'text' | 'password' | 'email' | 'number';
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    className?: string;
    style?: React.CSSProperties;
}
