import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import type React from "react";


interface ServicesProps {
    image: string;
    title: string;
    desc: string;
}



const ServicesCard: React.FC<ServicesProps> = ({ image, title, desc }) => {
     return (
        <div className="flex flex-col mb-2 cursor-pointer rounded-xl shadow shadow-black/30 transform transition-all duration-300 hover:-translate-y-2 hover:bg-[var(--color-secondary-border)]/50 hover:text-[var(--color-primaryy)]">
            {/* Image Part  */}
            <div className="h-35 bg-cover bg-center rounded-t-xl" style={{ backgroundImage: `url(${image})` }}>
                {/* <img className="w-full h-full rounded-t-xl" src="/images/IDs.jpg" /> */}
            </div>
            {/* Info Part  */}
            <div className="px-4 cursor-pointer py-2 pb-3 flex flex-col border-t border-t-transparent rounded-b-xl" style={{ borderBottomColor: "var(--color-text-muted)", borderLeftColor: "var(--color-text-muted)", borderRightColor: "var(--color-text-muted)" }}>
                <label className="font-bold font-serif">{title}</label>
                <label className="text-sm" style={{color: "var(--color-text-muted)"}}>{desc}</label>
                <Link to="#" className="flex gap-2 items-center text-sm font-semibold mt-1 hover:underline" style={{color: "var(--color-primaryy)"}}>Access service <IoIosArrowForward className="mt-1" /></Link>
            </div>
        </div>
     )
}

export default ServicesCard;


//   borderBottomColor: "var(--color-text-muted)",
//  //   borderLeftColor: "var(--color-text-muted)",
//   borderRightColor: "var(--color-text-muted)",