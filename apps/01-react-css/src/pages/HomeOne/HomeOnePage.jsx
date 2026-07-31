import { SiteHeader } from "../../components/layout/SiteHeader";
import { MainSlider } from "../../components/home-one/MainSlider";
import { CoreServices } from "../../components/home-one/CoreServices";
import { AboutUs } from "../../components/home-one/AboutUs";
import { ProfessionalTeams } from "../../components/home-one/ProfessionalTeams";
import { ContactUs } from "../../components/home-one/ContactUs";
import { SiteFooter } from "../../components/layout/SiteFooter";
import { assets } from "../../constants/assets";
import { homeOneFrames } from "./homeOne.frames";
import "./HomeOnePage.css";
export function HomeOnePage() {
    const pageStyle = {
        "--page-reference-width": `${homeOneFrames.page.width}px`,
        "--page-reference-height": `${homeOneFrames.page.height}px`,
    };
    return (<main className="home-one-page" data-page="home-one" style={pageStyle}>
      <SiteHeader activePage="home"/>
      <MainSlider />
      <img className="home-one-page__services-about-background" src={assets.homeOne.servicesAboutBackground} alt="" aria-hidden="true"/>
      <CoreServices />
      <AboutUs />
      <ProfessionalTeams />
      <ContactUs />
      <SiteFooter />
    </main>);
}
