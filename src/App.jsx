import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation/Navigation";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/header/Header";
import { WholesalersSection } from "./components/WholesalersSection/WholesalersSection.jsx";
import { Retail } from "./components/retail/Retail.jsx";
import { Catalogo } from "./components/Catalogo/Catalogo.jsx";
import { Contact } from "./components/ContactSection/contact";
import { CurriculumSection } from "./components/CurriculumSection/CurriculumSection";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <WholesalersSection/>
      <Retail />
      <Catalogo />
      <Contact data={landingPageData.Contact} />
      <CurriculumSection />
      <Footer/>
    </div>
  );
};

export default App;
