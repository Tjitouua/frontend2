import type React from "react";
import { FaAngleDown } from "react-icons/fa6";

interface GeneralInfoProps {
    title: string;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}


const GeneralInfoUI: React.FC<GeneralInfoProps> = ({ title, onMouseEnter, onMouseLeave }) => {
     return (
        <div
         onMouseEnter={onMouseEnter}
         onMouseLeave={onMouseLeave}
         className="w-full py-3 px-5 text-sm cursor-pointer hover:bg-[var(--color-primaryy)]/50">
              <label className="items-center cursor-pointer flex justify-between">{title} <FaAngleDown className="text-sm" /></label>
        </div>
     )
}

export default GeneralInfoUI;