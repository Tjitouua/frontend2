import type { ReactNode } from "react";


interface Props {
    children: ReactNode;
    onClick?: () => void;
    type?: "submit" | "button" | "reset";
    className?: string;
}


const Button: React.FC<Props> = ({ children, onClick, type = "button", className="" }) => {

    const base = "py-2 rounded-2xl text-white px-10 bg-[var(--color-primaryy)] cursor-pointer hover:bg-[var(--color-primaryy)]/70";


     return (
        <button 
        type={type}
        onClick={onClick}
        className={`${base} ${className}`}>
        {children}
        </button>
     )
}

export default Button;