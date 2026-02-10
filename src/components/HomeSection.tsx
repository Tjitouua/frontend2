import FlexTopPart from "../ui/FlexTopPart";
import Section from "../ui/Section";
import Header from "./Header";
import Hero from "./Hero";
import ServicesPart from "./ServicesPart";
import TopHeader from "./TopHeader";




const HomeSection = () => {
      return (
        <Section>
            <Header />
            <Hero />
            <ServicesPart />
        </Section>
      )
}

export default HomeSection;