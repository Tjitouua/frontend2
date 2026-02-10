
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
            title: "About Namibia"
        },
        {
            title: "Government"
        },
        {
            title: "Laws"
        },
        {
            title: "Citizenship"
        },
        {
            title: "Public Services"
        },
        {
            title: "Health & Education"
        },
        {
            title: "Safety & Security"
        },
        {
            title: "Environment"
        },
        {
            title: "Culture & Tourism"
        },
        {
            title: "Infrastructure"
        }
    ]



    return (


        <div className="w-[14%] flex items-start shrink-0 relative">
        <div ref={sidebarRef} className="w-full flex flex-col text-white py-5 gap-1 min-h-screen sticky top-0 bg-[var(--color-primary)]">
           <label className="text-sm text-white/60 mb-3 sticky top-32 ml-2">General Information</label>
           <div className="flex flex-col sticky top-40">
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
            className="py-5 text-[var(--color-text-default)] text-xs px-2 min-w-50 shadow shadow-black/70 flex flex-col bg-white rounded-sm fixed top-32 z-40"  style={{ left}}>
            <div className="flex items-center justify-between mb-3">
                <label className="font-semibold text-md text-black">About Namibia</label>
                <RxCross2 className="text-md cursor-pointer" onClick={() => setActiveItem(null)} />
            </div>
            <hr className="bg-gray-500 h-[1px] border-0 mb-2"></hr>
            <div className="py-2 px-2 hover:bg-[var(--color-primary)] hover:text-white cursor-pointer">
                <label>History</label>
            </div>
            <div className="py-2 px-2 hover:bg-[var(--color-primary)] hover:text-white cursor-pointer">
                <label>Geography</label>
            </div>
            <div className="py-2 px-2 hover:bg-[var(--color-primary)] hover:text-white cursor-pointer">
                <label>Economy</label>
            </div>
            <div className="py-2 px-2 hover:bg-[var(--color-primary)] hover:text-white cursor-pointer">
                <label>National Symbols</label>
            </div>
        </div>
        )}

        </div>
    )
}

export default SideNav;
