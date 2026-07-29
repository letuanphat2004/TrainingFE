import { AssetImage } from "../components/common/AssetImage.jsx";
import { BlogCards } from "../components/common/BlogCards.jsx";
import { SocialLinks } from "../components/common/SocialLinks.jsx";
import { Footer } from "../components/layout/Footer.jsx";
import { Header } from "../components/layout/Header.jsx";
import { blogPosts } from "../data.js";
import { asset } from "../lib/assets.js";

const tags = ["beauty", "cute", "skin", "glow", "style", "clinic", "great"];

export function BlogPage() {
  function preventSubmit(event) {
    event.preventDefault();
  }

  return (
    <main className="page page--blog">
      <Header />
      <section
        className="blog-hero image-overlay"
        style={{
          "--background-image": `url('${asset("unsplash_QA9fRIi6sFw.png")}')`,
        }}
      >
        <div className="container">
          <h1>Blog</h1>
          <p>Home • Blog</p>
        </div>
      </section>

      <section className="section blog-content">
        <div className="container blog-layout">
          <div>
            <BlogCards large />
            <nav className="pagination" aria-label="Blog pagination">
              <a className="is-active" href="#">
                1
              </a>
              <a href="#">2</a>
              <a href="#">3</a>
            </nav>
          </div>
          <aside className="blog-sidebar">
            <form className="search-box" onSubmit={preventSubmit}>
              <label>
                <span>Search</span>
                <input type="search" placeholder="Search here ..." />
              </label>
              <button type="submit" aria-label="Search">
                ⌕
              </button>
            </form>
            <section>
              <h3>Recent Posts</h3>
              {blogPosts.map((post) => (
                <a href="#" key={post.title}>
                  <AssetImage fileName={post.image} />
                  <span>
                    <b>01 jan 2021</b>
                    <small>Lorem ipsum dolor sit amet.</small>
                  </span>
                </a>
              ))}
            </section>
            <section>
              <h3>Categories</h3>
              <p>
                Consultation
                <br />
                Beauty
                <br />
                Treatments
                <br />
                News
              </p>
            </section>
            <section>
              <h3>Cloud Tags</h3>
              <div className="tags">
                {tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </section>
            <section>
              <h3>Social Connect</h3>
              <SocialLinks />
            </section>
          </aside>
        </div>
      </section>
      <Footer />
    </main>
  );
}
