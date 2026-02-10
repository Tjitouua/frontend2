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
        image: "/images/birthCertificate.jpg",
        title: "Birth Certificate",
        desc: "Apply or reprint certificate"
        },
        {
        image: "/images/passport.png",
        title: "Passport",
        desc: "Apply or renew passport"
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
        image: "/images/oldPension.jpg",
        title: "Old Age Pension",
        desc: "Apply for pension grant"
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
        {
        image: "/images/business.jpg",
        title: "Business Registration",
        desc: "Register a business"
        },
        {
        image: "/images/socialGrants.jpg",
        title: "Social Grants",
        desc: "Apply for state assistance"
        },
        {
        image: "/images/policeClearance.png",
        title: "Business Registration",
        desc: "Register a business"
        },
        {
        image: "/images/policeClearance.png",
        title: "Business Registration",
        desc: "Register a business"
        }
    ];



    return (
        <FlexTopPart className="gap-3">
                <label className="font-bold text-2xl text-black">Government online services</label>
                <FlexPart className="flex-wrap gap-5">
                    {ServicesCardList.map((card, index) => (
                     <ServicesCard
                        key = {index}
                        image = {card.image}
                        title = {card.title}
                        desc = {card.desc}
                      />
                     ))}
                </FlexPart>
        </FlexTopPart>
    )
}

export default ServicesPart;








