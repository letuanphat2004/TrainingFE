import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AboutPage } from "../pages/AboutPage.jsx";
import { BlogPage } from "../pages/BlogPage.jsx";
import { ContactPage } from "../pages/ContactPage.jsx";
import { GalleryPage } from "../pages/GalleryPage.jsx";
import { HomeOnePage } from "../pages/HomeOnePage.jsx";
import { HomeTwoPage } from "../pages/HomeTwoPage.jsx";
import { NotFoundPage } from "../pages/NotFoundPage.jsx";
import { ServicesPage } from "../pages/ServicesPage.jsx";
import { TeamPage } from "../pages/TeamPage.jsx";

function RouteEffects() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.body.dataset.route = pathname;
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function AppRoutes() {
  return (
    <>
      <RouteEffects />
      <Routes>
        <Route path="/" element={<HomeOnePage />} />
        <Route path="/home-2" element={<HomeTwoPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
