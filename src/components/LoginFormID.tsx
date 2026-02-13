import Button from "../ui/Button";
import FlexTopPart from "../ui/FlexTopPart";
import FormInput from "../ui/FormInput";
import { IoArrowForward } from "react-icons/io5";





const LoginFormID = () => {
     return (
        <FlexTopPart className="bg-[var(--color-secondary-card)] 
                  border-1 gap-5 border-[var(bg-[var(--color-secondary-border)])] 
                  !px-5 rounded-lg text-sm" style={{ borderColor: "var(--color-text-default2)" }}>

                       <FormInput 
                         label = "e-ID Card"
                         type = "text"
                         placeholder = "Enter your 10-digit ID"
                       />

                       <FormInput 
                         label = "PIN-Code"
                         type = "password"
                         placeholder = "4-digit PIN"
                       />

                       <div className="flex items-center gap-2">
                        <input type="checkbox" />
                        <label>Remember me</label>
                        </div>

                       <Button
                       className="w-full flex items-center justify-center gap-3"
                       >Sign In <IoArrowForward /></Button>

                  </FlexTopPart>

     )
}


export default LoginFormID;