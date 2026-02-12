import FlexTopPart from "../ui/FlexTopPart";
import LeadersCard from "../ui/LeadersCard";




const Leaders = () => {
    return (
        <FlexTopPart className="gap-3 pb-13">
             <label className="font-bold text-2xl text-black">Government Leaders</label>
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 py-3 w-full">
                 <LeadersCard />
             </div>
        </FlexTopPart>
    )
}

export default Leaders;

