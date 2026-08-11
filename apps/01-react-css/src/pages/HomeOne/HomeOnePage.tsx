import { MainSlider } from "../../components/home-one/MainSlider";
import { CoreServices } from "../../components/home-one/CoreServices";
import { AboutUs } from "../../components/home-one/AboutUs";
import { ProfessionalTeams } from "../../components/home-one/ProfessionalTeams";
import { ContactUs } from "../../components/home-one/ContactUs";
import { Header } from "../../components/layout/Header";
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
      <div className="home-one-page__content">
        <div className="hero-region">
          <img className="hero-region__background" src={assets.homeOne.slideBackground} alt="" aria-hidden="true" />
          <Header activePage="home" />
          <MainSlider />
        </div>
        <div className="services-about-region">
          <CoreServices />
          <div className="services-about-region__background-anchor" aria-hidden="true">
            <img className="services-about-region__background" src={assets.homeOne.servicesAboutBackground} alt="" />
          </div>
          <AboutUs />
        </div>
        <div className="teams-contact-region">
          <ProfessionalTeams />
          <div className="teams-contact-region__background-anchor" aria-hidden="true">
            <img className="teams-contact-region__background" src={assets.homeOne.contactBackground} alt="" />
          </div>
          <ContactUs />
        </div>
        <Footer />
      </div>
    </main>);
}
