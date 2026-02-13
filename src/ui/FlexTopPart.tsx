import type { CSSProperties, ReactNode } from "react";


interface Props {
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
}


const FlexTopPart:React.FC<Props> = ({ children, className, style }) => {

    const base = "flex w-full min-h-50 items-start flex-col px-10 py-7";


     return (
        <div className={`${base} ${className}`} style={style}>
           {children}
        </div>
     )
}

export default FlexTopPart;