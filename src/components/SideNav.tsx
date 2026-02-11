
import { useEffect, useRef, useState } from "react";
import FlexTopPart from "../ui/FlexTopPart";
import GeneralInfoUI from "../ui/GeneralInfoUI";
import { RxCross2 } from "react-icons/rx";


const SideNav = () => {
    const [left, setLeft] = useState(0);
    // const [hovered, setHovered] = useState(false);
    const sidebarRef = useRef<HTMLDivElement | null>(null);
    const [activeItem, setActiveItem] = useState<string | null>(null);



    useEffect(() => {
  const update = () => {
    if (!sidebarRef.current) return;

    setLeft(
      sidebarRef.current.getBoundingClientRect().right
    );
  };

  update();
  window.addEventListener("resize", update);
  return () => window.removeEventListener("resize", update);
}, []);





    const GeneralInfoList = [
        {
            title: "About Namibia",
            sections: [
               "History",
               "Geography",
               "Population",
               "Economy",
               "National Symbols",
            ],
        },
        {
            title: "Government",
            sections: [
                "The Constitution",
                "Branches of Government",
                "President & Cabinet",
                "Parliament",
                "Ministries"
            ]
        },
        {
            title: "Laws",
            sections: [
                "Legal System",
                "Acts & Regulations",
                "Courts",
                "Legal Aid"
            ]
        },
        {
            title: "Citizenship",
            sections: [
                "Citizenship Types",
                "Permanent Residence",
                "Visas & Permits",
                "Dual Citizenship"
            ]
        },
        /*
        {
            title: "Public Services"
        },
        */
        {
            title: "Health & Education",
            sections: [
                "Healthcare System",
                "Hospitals & Clinics",
                "Schools",
                "Universities & TVET"
            ]
        },
        {
            title: "Safety & Security",
            sections: [
                "Police",
                "Emergency Contacts",
                "Crime Reporting",
                "Disaster Management"
            ]
        },
        {
            title: "Environment",
            sections: [
                "National Parks",
                "Wildlife",
                "Environmental Protection",
                "Climate"
            ]
        },
        {
            title: "Culture & Tourism",
            sections: [
                "Cultural Heritage", 
                "Tourist Attractions",
                "Events & Festivals",
                "Museums"
            ]
        },
        {
            title: "Infrastructure",
            sections: [
                "Roads & Transport", 
                "Ports & Airports",
                "Water & Electricity",
                "Telecommunications"
            ]
        }
    ]



    return (


        <div className="w-[14%] flex items-start shrink-0 relative">
        <div ref={sidebarRef} className="w-full flex flex-col text-white py-5 gap-1 min-h-screen sticky top-0 bg-[var(--color-primary)]">
            
           <div className="w-full min-h-20 p-3">
               <div className="w-full h-20 bg-[url('/images/namibia.png')] bg-cover bg-center">

               </div>
            </div> 

           <label className="text-sm text-white/60 mb-3 sticky top-36 ml-2">General Information</label>
           <div className="flex flex-col sticky top-44">
           {GeneralInfoList.map((info, index) => (
           <GeneralInfoUI
              key = {index}
              title = {info.title}
              onClick={() =>
              setActiveItem(prev =>
                prev === info.title ? null : info.title
               )
              }    
            //   onMouseEnter={() => setHovered(true)}
            //   onMouseLeave={() => setHovered(false)}
           />
           ))}
           </div>
        </div>

        {activeItem && (
        <div 
            // onMouseEnter={() => setHovered(true)}
            // onMouseLeave={() => setHovered(false)}
            className="py-3 pt-5 text-[var(--color-text-default)] text-xs px-2 min-w-50 shadow shadow-black/70 flex flex-col bg-white rounded-sm fixed top-36 z-40"  style={{ left}}>
            <div className="flex items-center justify-between mb-3">
                <label className="font-semibold text-md text-black">{activeItem}</label>
                <RxCross2 className="text-md cursor-pointer" onClick={() => setActiveItem(null)} />
            </div>
            <hr className="bg-gray-500 h-[1px] border-0 mb-2"></hr>

            {GeneralInfoList.find(item => item.title === activeItem)
            ?.sections.map((section, index) => (
            
            <div key={index} className="py-2 px-2 hover:bg-[var(--color-primary)] hover:text-white cursor-pointer">
                <label>{section}</label>
            </div>
            ))}
        </div>
        )}

        </div>
    )
}

export default SideNav;
