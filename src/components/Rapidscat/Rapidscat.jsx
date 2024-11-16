import React from "react";
import sateliteImg from "../../assets/aurora.jpg";

const Rapidscat = () => {
  return (
    <>
      <section className="bg-primary text-white pb-12">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div data-aos="zoom-in">
              <img
                src={sateliteImg}
                alt=""
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
              />
            </div>
            <div className="space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800 ">
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-sky-800 uppercase"
              >
                most unique
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className="uppercase text-5xl"
              >
                Aurora
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
              An aurora, a mesmerizing celestial spectacle, is a natural light display in Earth's sky, primarily visible in high-latitude regions near the Arctic and Antarctic. These ethereal curtains of light, often referred to as the Northern Lights (aurora borealis) or Southern Lights (aurora australis), are a breathtaking dance of colors that captivate observers with their dynamic patterns and vibrant hues.
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="900"
                className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
              >
                View All
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rapidscat;
