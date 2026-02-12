import { useRef } from "react";
import FlexTopPart from "../ui/FlexTopPart";
import LeadersCard from "../ui/LeadersCard";

import { IoChevronBackOutline } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";




const Leaders = () => {


    const LeadersList = [
        {
            image: "/images/leaders/president3.jpg",
            name: "Netumbo Nandi-Ndaitwah",
            position: "President",
            department: "Head of State"
        },
        {
            image: "/images/leaders/vicePresident.jpg",
            name: " Lucia Witbooi",
            position: "Vice President",
            department: "Office of the Vice President"
        },
        {
            image: "/images/leaders/primeMinister.jpg",
            name: "Elijah Ngurare",
            position: "Prime Minister",
            department: "Office of the Prime Minister"
        },
        {
            image: "/images/leaders/ministerAgriculture.jpg",
            name: "Inge Zaamwani-Kamwi",
            position: "Minister",
            department: "Minister of Agriculture, Fisheries, Water, and Land Reform"
        },
        {
            image: "/images/leaders/ministerDefence.jpg",
            name: "Frans Kapofi",
            position: "Minister",
            department: "Minister of Defence and Veterans Affairs"
        },
        {
            image: "/images/leaders/ministerEducation2.jpg",
            name: "Sanet Steenkamp",
            position: "Minister",
            department: "Minister of Education, Innovation, Youth, Sports, Arts and Culture"
        },
        {
            image: "/images/leaders/ministerEnvironment.jpg",
            name: "Indileni Daniel",
            position: "Minister",
            department: "Minister of Environment and Tourism"
        },
        {
            image: "/images/leaders/ministerFinance.jpg",
            name: "Erica Shafudah",
            position: "Minister",
            department: "Minister of Finance and Social Grants Management"
        },
        {
            image: "/images/leaders/ministerGender.jpg",
            name: "Emma Kantema-Gaomas",
            position: "Minister",
            department: "Minister of Gender Equality and Social Welfare"
        },
        {
            image: "/images/leaders/ministerHealth.jpg",
            name: "Esperance Luvindao",
            position: "Minister",
            department: "Minister of Health and Social Services"
        },
        {
            image: "/images/leaders/ministerMines.jpg",
            name: "Natangwe Ithete",
            position: "Minister",
            department: "Minister of Industrialization, Mines and Energy"
        },
        {
            image: "/images/leaders/ministerInformation.jpg",
            name: "Emma Theofelus",
            position: "Minister",
            department: "Minister of Information and Communications Technology"
        },
        {
            image: "/images/leaders/ministerTrade.jpg",
            name: "Selma Ashipala-Musavyi",
            position: "Minister",
            department: "Minister of International Relations and Trade"
        },
        {
            image: "/images/leaders/ministerJustice.jpg",
            name: "Fillemon Wise Emmanuel",
            position: "Minister",
            department: "Minister of Justice and Labour Relations"
        },
        {
            image: "/images/leaders/ministerUrban.jpg",
            name: "Sankwasa James Sankwasa",
            position: "Minister",
            department: "Minister of Urban and Rural Development"
        },
        {
            image: "/images/leaders/ministerWorks.jpg",
            name: "Veikko Nekundi",
            position: "Minister",
            department: "Minister of Works and Transport"
        },
    ]

    
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if(scrollRef.current) {
            const scrollAmount = 1000;
            if(direction === "left") {
                scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
            } else {
                scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
            }
        }
    };


    return (
        <FlexTopPart className="gap-3 pb-13 relative">
             <label className="font-bold text-2xl text-black">Government Leaders</label>


             <button
             onClick={() => scroll("left")}
              className="absolute left-11 z-30 shadow top-1/2 p-3 rounded-full bg-white/60 cursor-pointer pointer-events-auto">
                    <IoChevronBackOutline />
             </button>

             <button 
             onClick={() => scroll("right")}
             className="absolute shadow -translate-y-1/2 p-3 rounded-full bg-white/60 right-11 z-30 top-1/2 pointer-events-auto cursor-pointer">
                  <IoChevronForward />
             </button>


             {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 py-3 w-full"> */}
                <div 
                ref={scrollRef}
                className="flex overflow-x-auto scrollbar-hidden gap-5 py-3 w-full">
                {LeadersList.map((leader, index) => (
                 <LeadersCard 
                    key={index}
                    image={leader.image}
                    name={leader.name}
                    position={leader.position}
                    department={leader.department}
                 />
                 ))}



             </div>

        </FlexTopPart>
    )
}

export default Leaders;

