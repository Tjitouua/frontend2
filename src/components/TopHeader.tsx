import { Link } from "react-router-dom";



const TopHeader = () => {
    return (
        <header className="w-full py-2 text-xs px-10 flex justify-between items-center text-white bg-[var(--color-primary-dark)]">
            <nav>
              <ul className="flex gap-10">
               <Link to="/">Home</Link>
               <Link to="/">Citizen</Link>
               <Link to="/">Entrepreneur</Link>
               <Link to="/">Tourism</Link>
               <Link to="/">Government</Link>
              </ul>
            </nav>

          
           <select className="cursor-pointer">
              <option>Language: ENG</option>
           </select>



        </header>
    )
}

export default TopHeader;