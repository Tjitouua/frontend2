import FlexTopPart from "../ui/FlexTopPart";
import { LuShield } from "react-icons/lu";
import { IoIosFingerPrint } from "react-icons/io";
import { MdPhoneIphone } from "react-icons/md";
import FormInput from "../ui/FormInput";
import Button from "../ui/Button";
import LoginFormID from "./LoginFormID";
import { Link } from "react-router-dom";
import { GrCircleQuestion } from "react-icons/gr";





const LoginIDPart = () => {
     return (
        <div className="w-full px-10 py-5 pb-8 min-h-screen flex bg-[var(--color-secondary)] items-center justify-center">
             <div className="flex flex-col text-sm items-center justify-center gap-3 p-3">
                  <div className="p-4 text-3xl text-[var(--color-secondary-card)] rounded-full bg-[var(--color-primary)]">
                      <LuShield />
                  </div>
                  <label className="font-serif font-bold text-2xl">Sign in with e-ID</label>
                  <label className="text-sm text-[var(--color-text-muted)]">Access government services with your digital identity.</label>
                  <div className="w-100 grid grid-cols-2 p-1 bg-[var(--color-secondary-border)] rounded-lg">
                     <button className="bg-[var(--color-secondary-card)] 
                                        px-1 font-semibold cursor-pointer
                                        py-2 text-sm rounded-lg flex items-center justify-center gap-3"> 
                                        <IoIosFingerPrint />e-ID Card
                     </button>
                     <button 
                     title="Login with phone number"
                     className="px-3 font-semibold text-[var(--color-text-default)]
                                        cursor-pointer py-2 text-sm rounded-lg
                                        flex items-center justify-center gap-3">
                                        <MdPhoneIphone />Mobile-ID
                     </button>
                  </div>


                  <LoginFormID />

                 <Link to="" className="hover:underline text-[var(--color-primaryy)]">Forgot PIN?</Link>

                 <hr className="w-full border-t border-[var(--color-text-default2)] my-2" />

                 <label className="text-[var(--color-text-muted)]">Don't have an e-ID?</label>

                 <Button
                       className="w-full py-3 !text-black rounded-md 
                       bg-[var(--color-secondary-card)] border border-[var(--color-text-default2)]"
                 >
                    Apply for e-ID
                 </Button>

                 <div className="w-full text-[var(--color-text-muted)] flex-wrap bg-[var(--color-secondary-border)] py-4 px-3 flex text-xs items-center rounded-md mt-3 gap-2">
                     <GrCircleQuestion className="text-sm" />
                     <label><span className="font-semibold">Secure Login:</span> Your connection is encrypted. Never share your PIN. </label>
                 </div>




             </div>
        </div>
     )
}


export default LoginIDPart;