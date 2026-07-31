import { assets } from "../../../constants/assets.js";
import { BlogCard } from "../../common/BlogCard/index.js";
import { SectionHeading } from "../../common/SectionHeading/index.js";
import "./TheBlog.css";

const articles = [
  {
    asset: assets.homeTwo.blogConsultation,
    title: "How much does a consultation cost at our clinic?",
  },
  {
    asset: assets.homeTwo.blogProduct,
    title: "Watch out! don't choose the wrong beauty product",
  },
  {
    asset: assets.homeTwo.blogSkinCare,
    title: "About skin care you need to know",
  },
];

const excerpt = "A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...";

export function TheBlog() {
  return (
    <section className="home-two-blog" id="blog" aria-labelledby="home-two-blog-title">
      <img className="home-two-blog__wave" src={assets.homeTwo.blogWave} alt="" aria-hidden="true" />
      <SectionHeading
        className="home-two-blog__heading"
        eyebrow="The Blog"
        title="Our latest news"
        titleId="home-two-blog-title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />

      <div className="home-two-blog__cards">
        {articles.map((article) => (
          <BlogCard key={article.title} {...article} description={excerpt} actionHref="#contact" />
        ))}
      </div>
    </section>
  );
}
