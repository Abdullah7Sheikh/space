import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero.jsx";
import HeroCard from "./components/HeroCard/HeroCard.jsx";
import Rapidscat from "./components/Rapidscat/Rapidscat.jsx";
import Satelite from "./components/Satelite/Satelite.jsx";
import Footer5 from "./components/Footer/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer/Footer.jsx";
import spacez from "./assets/spacez.mp4"


const App = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  });
  return (
    <div className="">
      <div className="h-[700px] relative">
        <video
          autoPlay
          loop
          muted
          className="fixed right-0 top-0 h-[900px] w-full object-cover z-[-1]"
        >
          <source src={spacez} type="video/mp4" />
        </video>
        <Navbar />
        <Hero />
      
      </div>
      <HeroCard />
      <Rapidscat />
      <Satelite />
      <Footer />
    </div>
  );
};

export default App;
