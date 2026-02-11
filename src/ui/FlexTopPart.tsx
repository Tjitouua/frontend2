import type { ReactNode } from "react";


interface Props {
    children?: ReactNode;
    className?: string;
}


const FlexTopPart:React.FC<Props> = ({ children, className }) => {

    const base = "flex w-full min-h-screen items-start flex-col px-15 py-7";


     return (
        <div className={`${base} ${className}`}>
           {children}
        </div>
     )
}

export default FlexTopPart;