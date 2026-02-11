import type { ReactNode } from "react";


interface Props {
    children: ReactNode;
}


const Section:React.FC<Props> = ({ children }) => {
      return (
         <div className="w-full lg:w-6/7 min-h-screen flex flex-col">
           {children}
        </div>
      )
}

export default Section;