import type React from "react";



interface LeadersProps {
    image: string;
    name: string;
    position: string;
    department: string;
}


const LeadersCard:React.FC<LeadersProps> = ({ image, name, position, department }) => {
     return (
        <div className="flex flex-col rounded-xl w-62 shrink-0">
                      {/* Image div  */}
                      <div className="relative w-full h-80 rounded-t-xl bg-cover bg-[center_50%]" style={{backgroundImage: `url(${image})`}}>

                      {/* Side Effect div  */}
                       <div className="absolute w-full h-15 bg-gradient-to-b from-transparent via-[var(--color-secondary-border)]/80 to-[var(--color-secondary-border)] bottom-0 left-0 z-20">

                       </div>

                      </div>
                       

                      {/* Info div  */}
                      <div className="w-full flex flex-col px-4 gap-1 items-center justify-center h-30 rounded-b-xl bg-[var(--color-secondary-border)]">
                            <label className="text-xs text-center text-[var(--color-text-heading)] font-serif font-bold">{name}</label>
                            <label className="text-xs text-center text-[var(--color-primaryy)] font-semibold">{position}</label>
                            <label className="text-xs text-center text-[var(--color-text-muted)]">{department}</label>
                      </div>
                 </div>
     )
}

export default LeadersCard;

