import Button from "../ui/Button";
import TopHeader from "./TopHeader";



const Header = () => {
    return (
          <div className="w-full flex-col">
            <TopHeader />
           <header className="w-full min-h-10 flex justify-between py-2 px-10 items-center">

               <div className="flex gap-5">
                  {/* Logo div  */}
                  <div className="h-15 w-15">
                      <img className="w-full h-full" src="/images/namibiaLogo.png" />
                  </div>

                  {/* Description div  */}
                  <div className="flex flex-col">
                     <label className="text-lg font-bold">Republic of Namibia</label>
                     <label className="text-sm">Official Goverment Portal</label>
                  </div>
               </div>

               {/* Button  */}
                <Button>Login</Button>
           </header>
         </div>
    )
}

export default Header;