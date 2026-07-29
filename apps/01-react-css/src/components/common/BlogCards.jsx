import { blogPosts } from "../../data.js";
import { AssetImage } from "./AssetImage.jsx";

export function BlogCards({ large = false }) {
  return (
    <div className={large ? "blog-list" : "blog-grid"}>
      {blogPosts.map((post) => (
        <article
          className={`blog-card ${large ? "blog-card--large" : ""}`}
          key={post.title}
        >
          <AssetImage fileName={post.image} alt={post.title} />
          <div className="blog-card__body">
            <p className="eyebrow">▰ &nbsp; {post.category}</p>
            <h3>{post.title}</h3>
            <p>
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.
            </p>
            <a
              className={large ? "button button--small" : "text-link"}
              href="#"
              aria-label={`Read ${post.title}`}
            >
              {large ? "Read More  ›" : "Learn more  »"}
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
