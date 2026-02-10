import type { ReactNode } from "react";


interface Props {
    children: ReactNode;
}


const Page:React.FC<Props> = ({ children }) => {
  return (
    <div className="w-full min-h-screen flex ">
        {children}
    </div>
  );
};

export default Page;
