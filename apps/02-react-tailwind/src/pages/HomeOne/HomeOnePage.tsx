import { AboutUs } from "../../components/home-one/AboutUs";
import { ContactUs } from "../../components/home-one/ContactUs";
import { CoreServices } from "../../components/home-one/CoreServices";
import { MainSlider } from "../../components/home-one/MainSlider";
import { ProfessionalTeams } from "../../components/home-one/ProfessionalTeams";
import { Footer } from "../../components/layout/Footer";
import { Header } from "../../components/layout/Header";

export function HomeOnePage() {
  return (
    <main className="mx-auto flex w-full max-w-[1440px] flex-col overflow-hidden bg-white" data-page="home-one-tailwind">
      <Header />
      <MainSlider />

      <div className="flex flex-col">
        <CoreServices />
        <AboutUs />
      </div>

      <div className="flex flex-col">
        <ProfessionalTeams />
        <ContactUs />
      </div>

      <Footer />
    </main>
  );
}
