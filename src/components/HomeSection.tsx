import FlexTopPart from "../ui/FlexTopPart";
import Section from "../ui/Section";
import Header from "./Header";
import Hero from "./Hero";
import NewsPart from "./NewsPart";
import ServicesPart from "./ServicesPart";
import TopHeader from "./TopHeader";




const HomeSection = () => {
      return (
        <Section>
            <Header />
            <Hero />
            <ServicesPart />
            <NewsPart />
        </Section>
      )
}

export default HomeSection;