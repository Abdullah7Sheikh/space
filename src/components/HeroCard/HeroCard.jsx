import React from "react";
import wave from "../../assets/wave Gif.gif";
import { IoIosPlanet } from "react-icons/io";
import { TbBrandPlanetscale } from "react-icons/tb";
import { PiPlanet } from "react-icons/pi";

const ServiceData = [
  {
    title: "pluto",
    content: "-600",
    description:
      " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    icon: <IoIosPlanet  className="text-7xl" />,
    aosDelay: "300",
  },
  {
    title: "mercury",
    content: "-800",
    description:
      ",  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    icon: <TbBrandPlanetscale  className="text-7xl" />,
    aosDelay: "500",
  },
  {
    title: "venus",
    content: "-900",
    description:
      " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    icon: <PiPlanet className="text-7xl" />,
    aosDelay: "700",
  },
];
const HeroCard = () => {
  return (
    <>
      <section className="bg-primary">
        <div className="container">
          <div className="min-h-[400px]">
            <div>
              <div className=" grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10 ">
                {ServiceData.map((data, index) => {
                  return (
                    <div key={index}
                      data-aos="fade-up"
                      data-aos-delay={data.aosDelay}
                      className="min-h-[180px] flex flex-col justify-center items-center rounded-xl gap-2 bg-blue-900/60 backdrop-blur-sm  text-white text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto"
                    >
                      {data.icon}
                      <h1>{data.title}</h1>
                      <p>{data.content}</p>
                      <p className="text-sm">{data.description}</p>
                    </div>
                  );
                })}
              </div>
              <img
                src={wave}
                alt=""
                className="h-[200px] w-full  object-cover mix-blend-screen -translate-y-24 relative z-[0]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroCard;
