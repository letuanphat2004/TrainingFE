import { Link } from "react-router-dom";
import { AssetImage } from "../components/common/AssetImage";
import { ContactForm } from "../components/common/ContactForm";
import { PlayButton } from "../components/common/PlayButton";
import { SectionHeading } from "../components/common/SectionHeading";
import { ServiceCards } from "../components/common/ServiceCards";
import { TeamCards } from "../components/common/TeamCards";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";

export function HomeOnePage() {
  return (
    <main className="page page--home-one">
      <section className="home-one-hero">
        <Header />
        <div className="container hero-grid">
          <div className="hero-copy">
            <h1>
              Clinic &amp; beauty
              <br />
              consultant
            </h1>
            <p>
              It is a long established fact that a reader will be
              <br />
              by the readable content of a page.
            </p>
            <Link className="button" to="/about">
              More Details
            </Link>
          </div>
          <AssetImage fileName="Frame 1.png" alt="Beauty consultation" />
        </div>
      </section>

      <section className="home-services section">
        <div className="slider-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <div className="container">
          <SectionHeading
            eyebrow="Main Services"
            title={
              <>
                Learn services to focus
                <br />
                on your beauty
              </>
            }
            description="Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis."
          />
          <ServiceCards />
        </div>
      </section>

      <section className="home-about section">
        <div className="container split-layout">
          <div>
            <SectionHeading
              eyebrow="About Us"
              title="We are the best beauty clinic"
              centered={false}
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit,
              quam suscipit purus donec amet. Egestas volutpat facilisi eu
              libero. Nunc, ipsum ornare mauris sit quam quis enim.
            </p>
            <p>
              Id dui erat sed quam tellus in purus. Pellentesque congue
              fringilla cras tellus enim.
            </p>
            <div className="inline-actions">
              <Link className="button" to="/about">
                Learn More
              </Link>
              <PlayButton />
            </div>
          </div>
          <AssetImage
            fileName="unsplash_LRXYS0tSyGc.png"
            alt="Beautice clinic interior"
          />
        </div>
      </section>

      <section className="home-team section">
        <div className="container">
          <SectionHeading
            eyebrow="Professional Teams"
            title="The Professional expert"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
          />
          <TeamCards />
        </div>
      </section>

      <section className="home-contact section">
        <div className="container split-layout split-layout--contact">
          <AssetImage
            fileName="Contact Animations.png"
            alt="Customer support specialist"
          />
          <div>
            <SectionHeading
              eyebrow="Contact Us"
              title={
                <>
                  Send your inquiry to
                  <br />
                  our expert team
                </>
              }
              description="Lorem ipsum dolor sit amet nulla turpis tellus."
              centered={false}
            />
            <ContactForm />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
