import { useState } from "react";
import { AssetImage } from "../components/common/AssetImage.jsx";
import { SectionHeading } from "../components/common/SectionHeading.jsx";
import { TeamCards } from "../components/common/TeamCards.jsx";
import { Footer } from "../components/layout/Footer.jsx";
import { Header } from "../components/layout/Header.jsx";
import { assistants } from "../data.js";
import { asset } from "../lib/assets.js";

const testimonials = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus metus tincidunt laoreet ultrices condimentum ac integer aliquam.",
  "The professional team made every treatment clear, comfortable and easy to understand from the first consultation.",
  "I received thoughtful service and a result that felt natural. The clinic team listened carefully to every concern.",
];

function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  function move(direction) {
    setActiveIndex(
      (current) =>
        (current + direction + testimonials.length) % testimonials.length,
    );
  }

  return (
    <div className="testimonial-slider" data-testimonial>
      <button
        type="button"
        data-direction="-1"
        aria-label="Previous testimonial"
        onClick={() => move(-1)}
      >
        ←
      </button>
      <article>
        <AssetImage fileName="unsplash_W7b3eDUb_2I.png" alt="Customer" />
        <p>{testimonials[activeIndex]}</p>
        <div className="stars" aria-label="5 out of 5 stars">
          ★★★★★
        </div>
      </article>
      <button
        type="button"
        data-direction="1"
        aria-label="Next testimonial"
        onClick={() => move(1)}
      >
        →
      </button>
    </div>
  );
}

export function TeamPage() {
  return (
    <main className="page page--team">
      <Header />
      <section className="section team-primary">
        <div className="container">
          <SectionHeading
            eyebrow="Our Team"
            title="We are Professional"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
          />
          <TeamCards />
        </div>
      </section>

      <section className="section assistance">
        <div className="container">
          <SectionHeading
            eyebrow="Assistance Team"
            title="Meet the pro assistance"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
          />
          <div className="assistant-list">
            {assistants.map((person) => (
              <article key={person.name}>
                <AssetImage fileName={person.image} alt={person.name} />
                <div>
                  <h3>
                    {person.name} <em>/ {person.role}</em>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    id magnis at placerat pulvinar euismod neque.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="wide-video image-overlay"
        style={{
          "--background-image": `url('${asset("unsplash_rE6FqsyyqwM.png")}')`,
        }}
      >
        <div className="wide-video__copy">
          <h2>
            Customer satisfaction is
            <br />
            our main goal
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
          </p>
        </div>
      </section>

      <section className="section testimonials">
        <div className="container">
          <SectionHeading
            eyebrow="Our Testimonials"
            title="What our customer says"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
          />
          <TestimonialSlider />
        </div>
      </section>
      <Footer />
    </main>
  );
}
