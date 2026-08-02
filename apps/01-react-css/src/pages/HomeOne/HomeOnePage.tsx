import { Header } from "../../components/layout/Header";
import { MainSlider } from "../../components/home-one/MainSlider";
import { CoreServices } from "../../components/home-one/CoreServices";
import { AboutUs } from "../../components/home-one/AboutUs";
import { ProfessionalTeams } from "../../components/home-one/ProfessionalTeams";
import { ContactUs } from "../../components/home-one/ContactUs";
import { Footer } from "../../components/layout/Footer";
import { assets } from "../../constants/assets";
import { homeOneFrames } from "./homeOne.frames";
import type { CssVariableStyle } from "../../types/ui";
import "./HomeOnePage.css";
export function HomeOnePage() {
    const pageStyle: CssVariableStyle = {
        "--page-reference-width": `${homeOneFrames.page.width}px`,
        "--page-reference-height": `${homeOneFrames.page.height}px`,
    };
    return (<main className="home-one-page" data-page="home-one" style={pageStyle}>
      <Header activePage="home"/>
      <MainSlider />
      <img className="home-one-page__services-about-background" src={assets.homeOne.servicesAboutBackground} alt="" aria-hidden="true"/>
      <CoreServices />
      <AboutUs />
      <ProfessionalTeams />
      <ContactUs />
      <Footer />
    </main>);
}
