import { AboutUs } from "../../components/home-one/AboutUs";
import { ContactUs } from "../../components/home-one/ContactUs";
import { CoreServices } from "../../components/home-one/CoreServices";
import { MainSlider } from "../../components/home-one/MainSlider";
import { ProfessionalTeams } from "../../components/home-one/ProfessionalTeams";
import { Footer } from "../../components/layout/Footer";
import { Header } from "../../components/layout/Header";
import { assets } from "../../constants/assets";

export function HomeOnePage() {
  return (
    <main className="relative isolate mx-auto flex w-full max-w-[1440px] flex-col overflow-hidden bg-white" data-page="home-one-tailwind">
      <div className="relative isolate flex flex-col">
        <img src={assets.homeOne.slideBackground} alt="" aria-hidden="true" className="pointer-events-none absolute left-0 top-0 -z-10 h-auto w-full max-w-[1266.42px] -scale-x-100 desktop:h-[743px] desktop:w-[1266.42px]" />
        <Header />
        <MainSlider />
      </div>

      <div className="relative isolate flex flex-col">
        <CoreServices />
        <div className="relative z-0 h-0" aria-hidden="true">
          <img src={assets.homeOne.servicesAboutBackground} alt="" className="pointer-events-none absolute right-0 top-[-230px] h-auto w-full max-w-[948.15px] desktop:h-[1028.89px] desktop:w-[948.15px]" />
        </div>
        <AboutUs />
      </div>

      <div className="relative isolate flex flex-col">
        <ProfessionalTeams />
        <div className="relative z-0 h-0" aria-hidden="true">
          <img src={assets.homeOne.contactBackground} alt="" className="pointer-events-none absolute left-0 top-[30px] h-auto w-full max-w-[1175.73px] desktop:left-[-0.33px] desktop:h-[929px] desktop:w-[1175.73px]" />
        </div>
        <ContactUs />
      </div>

      <Footer />
    </main>
  );
}
