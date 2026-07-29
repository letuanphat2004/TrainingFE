import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AboutPage } from "../pages/AboutPage";
import { BlogPage } from "../pages/BlogPage";
import { ContactPage } from "../pages/ContactPage";
import { GalleryPage } from "../pages/GalleryPage";
import { HomeOnePage } from "../pages/HomeOnePage";
import { HomeTwoPage } from "../pages/HomeTwoPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { ServicesPage } from "../pages/ServicesPage";
import { TeamPage } from "../pages/TeamPage";

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
