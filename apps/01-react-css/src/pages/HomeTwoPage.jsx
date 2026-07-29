import { Link } from "react-router-dom";
import { AssetImage } from "../components/common/AssetImage.jsx";
import { BlogCards } from "../components/common/BlogCards.jsx";
import { PlayButton } from "../components/common/PlayButton.jsx";
import { SectionHeading } from "../components/common/SectionHeading.jsx";
import { ServiceCards } from "../components/common/ServiceCards.jsx";
import { Footer } from "../components/layout/Footer.jsx";
import { Header } from "../components/layout/Header.jsx";
import { asset } from "../lib/assets.js";

const statistics = [
  ["handshake 1.png", "100%", "trusted clinic"],
  ["brotherhood 1.png", "99%", "customer love"],
  ["earth 1.png", "75+", "asian branch"],
  ["doctor 1.png", "1.200+", "licensed worker"],
];

export function HomeTwoPage() {
  function handleCallRequest(event) {
    event.preventDefault();
    event.currentTarget.reset();
  }

  return (
    <main className="page page--home-two">
      <section
        className="home-two-hero image-overlay"
        style={{
          "--background-image": `url('${asset("unsplash_Pe9IXUuC6QU-1.png")}')`,
        }}
      >
        <Header dark overlay />
        <div className="container home-two-hero__content">
          <div>
            <h1>
              Your beauty center
              <br />
              place
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo,
              massa pellentesque arcu fusce et magna consequat neque vitae
              lobortis.
            </p>
            <Link className="button button--outline" to="/about">
              More Details
            </Link>
          </div>
          <PlayButton label="Tour Video" />
        </div>
      </section>

      <section className="section home-two-about">
        <div className="container split-layout">
          <AssetImage
            fileName="Illustration-1.png"
            alt="Beauty analysis illustration"
          />
          <div>
            <SectionHeading
              eyebrow="About Us"
              title="We are the best beauty clinic"
              centered={false}
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit,
              quam suscipit purus donec amet. Egestas volutpat facilisi eu
              libero.
            </p>
            <Link className="button" to="/about">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="section home-two-services">
        <div className="container">
          <SectionHeading
            eyebrow="Main Services"
            title="Our focus services"
            description="Lorem ipsum dolor sit amet."
          />
          <ServiceCards compact />
        </div>
      </section>

      <section
        className="stats-banner image-overlay"
        style={{
          "--background-image": `url('${asset("unsplash_eflLpWC1Geo.png")}')`,
        }}
      >
        <div className="container stats-banner__content">
          <div>
            <h2>Why choosing us?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam.
            </p>
          </div>
          <div className="stats-grid">
            {statistics.map(([image, value, label]) => (
              <div className="stat" key={label}>
                <AssetImage fileName={image} />
                <p>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section home-two-blog">
        <div className="container">
          <SectionHeading
            eyebrow="The Blog"
            title="Our latest news"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <BlogCards />
        </div>
      </section>

      <section className="request-call">
        <div className="container request-call__inner">
          <div>
            <h2>Request call services</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              <b>Contact Us.</b>
            </p>
          </div>
          <form data-call-form onSubmit={handleCallRequest}>
            <label>
              <span>Phone number</span>
              <input
                type="tel"
                placeholder="Insert your phone number here ..."
                required
              />
            </label>
            <button type="submit" aria-label="Request a call">
              ⌕
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}
