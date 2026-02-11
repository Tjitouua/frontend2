import Button from "../ui/Button";
import FlexPart from "../ui/FlexPart";
import FlexTopPart from "../ui/FlexTopPart";
import ServicesCard from "../ui/ServicesCard";



const ServicesPart = () => {


    const ServicesCardList = [
        {
        image: "/images/IDs.jpg",
        title: "National ID",
        desc: "Replace or renew ID"
        },
        {
        image: "/images/jobs.jpg",
        title: "Government Vacancies",
        desc: "View vacancies or apply online"
        },
        {
        image: "/images/oldPension.jpg",
        title: "Old Age Pension",
        desc: "Apply for pension grant"
        },
        {
        image: "/images/visa.jpg",
        title: "Permits & Visas",
        desc: "Apply for permits or visas"
        },
        {
        image: "/images/birthCertificate.jpg",
        title: "Birth Certificate",
        desc: "Apply or reprint certificate"
        },
        {
        image: "/images/business.jpg",
        title: "Business Registration",
        desc: "Register a business"
        },
        {
        image: "/images/passport.png",
        title: "Passport",
        desc: "Apply or renew passport"
        },
        {
        image: "/images/socialGrants.jpg",
        title: "Social Grants",
        desc: "Apply for state assistance"
        },
        {
        image: "/images/license.jpg",
        title: "Driver’s License",
        desc: "Apply or renew license"
        },
        {
        image: "/images/policeClearance.png",
        title: "Police Clearance",
        desc: "Request clearance certificate"
        },
        {
        image: "/images/votingCard.png",
        title: "Voter Registration",
        desc: "Register or update details"
        },
        {
        image: "/images/marriage.jpg",
        title: "Marriage Certificate",
        desc: "Apply or reprint certificate"
        },
    ];



    return (
        <FlexTopPart className="gap-3 pb-13">
                <label className="font-bold text-2xl text-black">Government online services</label>
                {/* <FlexPart className="flex-wrap gap-4"> */}
                <FlexPart className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                    {ServicesCardList.map((card, index) => (
                     <ServicesCard
                        key = {index}
                        image = {card.image}
                        title = {card.title}
                        desc = {card.desc}
                      />
                     ))}
                </FlexPart>
                <Button className="rounded-md">Access More Services</Button>
        </FlexTopPart>
    )
}

export default ServicesPart;








