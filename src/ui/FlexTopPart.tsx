import type { ReactNode } from "react";


interface Props {
    children?: ReactNode;
    className?: string;
}


const FlexTopPart:React.FC<Props> = ({ children, className }) => {

    const base = "flex w-full min-h-50 items-start flex-col px-10 py-7";


     return (
        <div className={`${base} ${className}`}>
           {children}
        </div>
     )
}

export default FlexTopPart;