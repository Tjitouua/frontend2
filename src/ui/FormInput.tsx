import type React from "react";
import type { InputHTMLAttributes } from "react";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    containerClassName?: string;
}


const FormInput: React.FC<FormInputProps> = ({ label, containerClassName = "", className = "", ...props }) => {
    return ( 
        <div className={`w-full flex flex-col gap-2 ${containerClassName}`}>
            <label className="font-semibold">{label}</label>
            <input type="text" className={`border rounded-md p-2 bg-[var(--color-secondary)] ${className}`} placeholder="Enter your 10-digit ID" style={{ borderColor: "var(--color-text-default2)" }}/>
        </div>
    );
}

export default FormInput;