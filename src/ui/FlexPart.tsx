import type { ReactNode } from "react";


interface Props {
    children?: ReactNode;
    className?: string;
}


const FlexPart:React.FC<Props> = ({ children, className }) => {

    const base = "w-full py-3 flex items-center justify-between";


    return (
        <div className={`${base} ${className}`}>
            {children}
        </div>
    )
}

export default FlexPart;