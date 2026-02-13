import { Link } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa6";
import { LuGraduationCap } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import { GiInjustice } from "react-icons/gi";
import { FiShield } from "react-icons/fi";
import { RiBankLine } from "react-icons/ri";
import { IoBusinessOutline } from "react-icons/io5";
import { FaAccessibleIcon } from "react-icons/fa6";
import { FaRegMap } from "react-icons/fa6";
import { FiHelpCircle } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";



const Footer = () => {




    const ServicesList = [
        {
            name: "Government Vacancies",
            to: "Government Vacancies",
        },
        {
            name: "National ID",
            to: "National ID",
        },
        {
            name: "Police Clearance",
            to: "Police Clearance",
        },
        {
            name: "Passport",
            to: "Passport",
        },
        {
            name: "Birth Certificate",
            to: "Birth Certificate",
        },
        {
            name: "Business Registration",
            to: "Business Registration",
        },
        {
            name: "Permits & Visas",
            to: "Permits & Visas",
        },
    ]




    const DepartmentList = [
        {
            icon: <LuGraduationCap />,
            name: "Education",
            to: "/"
        },
        {
            icon: <FaRegHeart />,
            name: "Health",
            to: "/"
        },
        {
            icon: <GiInjustice />,
            name: "Justice",
            to: "/"
        },
        {
            icon: <FiShield />,
            name: "Defence",
            to: "/"
        },
        {
            icon: <RiBankLine />,
            name: "Finance",
            to: "/"
        },
        {
            icon: <IoBusinessOutline />,
            name: "Trade & Industry",
            to: "/"
        }
    ]




    
    const SupportList = [
        {
            icon: <FaAccessibleIcon />,
            name: "Accessibility",
            to: "/"
        },
        {
            icon: <FaRegMap />,
            name: "Site Map",
            to: "/"
        },
        {
            icon: <FiHelpCircle />,
            name: "Help Center",
            to: "/"
        },
        {
            icon: <IoDocumentTextOutline />,
            name: "FAQs",
            to: "/"
        },
    ]


      return (
        <div className="w-full flex flex-col bg-[var(--color-primary)]/97 px-10">
         <div className="w-full text-sm grid grid-cols-1 sm:grid-cols-2 gap-5 lg:grid-cols-4 xl:grid-cols-5 py-6 text-[var(--color-secondary-card)]">
             
             <div className="py-3 flex flex-col gap-4 px-3">
                 <label className="text-lg font-bold">Republic of Namibia</label>
                <div className="w-21 h-12 bg-[url('/images/Flag_of_Namibia.png')] bg-cover bg-center">

                </div>
                 <label>Official Government Portal of the Republic of Namibia. Providing accessible digital services to all citizens.</label>
             </div>

             <div className="py-3 flex flex-col gap-1 px-5">
                 <label className="text-lg font-bold mb-3">Quick Links</label>
                 <Link to="/">Home</Link>
                 <Link to="/">Tourism</Link>
                 <Link to="/">Government</Link>
                 <Link to="/">News</Link>
                 <Link to="/">Services</Link>
                 <Link to="/">About Namibia</Link>
             </div>

             <div className="py-3 flex flex-col gap-1 px-5">
                 <label className="text-lg font-bold mb-3">Services</label>
                 {ServicesList.map((service, index) => (
                    <Link to={service.to}>{service.name}</Link>
                 ))}
             </div>

             <div className="py-3 flex flex-col gap-1 px-5">
                 <label className="text-lg font-bold mb-3">Departments</label>
                 {DepartmentList.map((department, index) => (  
                 <div key={index} className="flex items-center gap-3">
                    {department.icon} 
                    <Link to={department.to}>{department.name}</Link>
                 </div>
                 ))}
             </div>

             <div className="py-3 flex flex-col gap-1 px-5">
                 <label className="text-lg font-bold mb-3">Support</label>
                  {SupportList.map((support, index) => (  
                  <div key={index} className="flex items-center gap-3">
                    {support.icon} 
                    <Link to={support.to}>{support.name}</Link>
                  </div>
                  ))}
             </div>

         </div>



         <div className="w-full py-4 border-t border-t-[var(--color-secondary-card)]/50 text-sm flex items-center justify-between flex-wrap text-[var(--color-secondary-card)]">
             <label>© 2026 Republic of Namibia. All rights reserved.</label>
             <label>Built with pride for the Namibian people</label>
         </div>




        </div>
      )
}

export default Footer;