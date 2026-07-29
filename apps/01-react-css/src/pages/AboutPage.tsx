import { AssetImage } from "../components/common/AssetImage";
import { PlayButton } from "../components/common/PlayButton";
import { SectionHeading } from "../components/common/SectionHeading";
import { TeamCards } from "../components/common/TeamCards";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { asset } from "../lib/assets";
import type { BackgroundImageStyle } from "../types";

const businessVideoStyle: BackgroundImageStyle = {
  "--background-image": `url('${asset("unsplash_NPjNtTExSJ4.png")}')`,
};

export function AboutPage() {
  return (
    <main className="page page--about">
      <Header />
      <section className="section about-intro">
        <div className="container">
          <SectionHeading
            eyebrow="About"
            title={
              <>
                We are a leading beauty clinic that has
                <br />
                been around since 2002
              </>
            }
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis."
            centered={false}
          />
          <div className="video-image">
            <AssetImage
              fileName="unsplash_DE6rYp1nAho.png"
              alt="Treatment room"
            />
            <PlayButton label="" />
          </div>
        </div>
      </section>

      <section className="section about-team">
        <div className="container">
          <SectionHeading
            eyebrow="Professional Teams"
            title="The Professional expert"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
          />
          <TeamCards />
        </div>
      </section>

      <section
        className="wide-video image-overlay"
        style={businessVideoStyle}
      >
        <div className="wide-video__copy">
          <p className="eyebrow">Business Slogan</p>
          <h2>
            Best responsibility and service
            <br />
            for our customers
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
          </p>
        </div>
      </section>

      <section className="section vision-mission">
        <div className="container">
          <div className="split-layout">
            <AssetImage fileName="Illustration-1.png" alt="Our vision" />
            <div>
              <SectionHeading
                eyebrow="Our Vision"
                title="Be the best and go international"
                centered={false}
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc,
                ipsum ornare mauris sit quam quis enim.
              </p>
            </div>
          </div>
          <div className="split-layout split-layout--reverse">
            <div>
              <SectionHeading
                eyebrow="Our Mission"
                title="Special & premium service to any clients"
                centered={false}
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc,
                ipsum ornare mauris sit quam quis enim.
              </p>
            </div>
            <AssetImage fileName="Illustration-2.png" alt="Our mission" />
          </div>
        </div>
      </section>

      <section className="section clients">
        <div className="container">
          <SectionHeading
            eyebrow="Our Clients"
            title="Well-known agencies"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          />
          <div className="logo-row">
            {[1, 2, 3, 4, 5].map((number) => (
              <AssetImage
                fileName={`LOGO${number}.png`}
                alt={`Partner ${number}`}
                key={number}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
