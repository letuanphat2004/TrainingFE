import { Link } from "react-router-dom";
import { AssetImage } from "../components/common/AssetImage";
import { PlayButton } from "../components/common/PlayButton";
import { SectionHeading } from "../components/common/SectionHeading";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { galleryImages } from "../data";
import { asset } from "../lib/assets";
import type { BackgroundImageStyle } from "../types";

const tourVideoStyle: BackgroundImageStyle = {
  "--background-image": `url('${asset("unsplash_eflLpWC1Geo.png")}')`,
};

export function GalleryPage() {
  return (
    <main className="page page--gallery">
      <Header />
      <section className="section gallery-section">
        <div className="container">
          <div className="gallery-heading">
            <SectionHeading
              eyebrow="Our Gallery"
              title={
                <>
                  Check out the collection pictures
                  <br />
                  from our clinic
                </>
              }
              centered={false}
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis.
            </p>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((image) => (
              <AssetImage
                fileName={image}
                alt="Beautice clinic gallery"
                key={image}
              />
            ))}
          </div>
          <p className="gallery-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim, <b>our teams.</b>
          </p>
        </div>
      </section>

      <section
        className="gallery-video image-overlay"
        style={tourVideoStyle}
      >
        <div>
          <SectionHeading
            title="Watch the video tour"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
            eyebrow=""
          />
          <PlayButton label="" />
        </div>
      </section>

      <section className="section gallery-cta">
        <div className="container gallery-cta__inner">
          <div>
            <SectionHeading
              eyebrow="Get The Quota"
              title={
                <>
                  Want to be handled by our
                  <br />
                  professional team immediately?
                </>
              }
              centered={false}
            />
            <p>
              Id dui erat sed quam tellus in purus. Pellentesque congue
              fringilla cras tellus enim.
            </p>
          </div>
          <Link className="button" to="/contact">
            Make an Appointment
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
