import FlexTopPart from "../ui/FlexTopPart";
import Section from "../ui/Section";
import Footer from "./Footer";
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
            <Footer />
        </Section>
      )
}

export default HomeSection;