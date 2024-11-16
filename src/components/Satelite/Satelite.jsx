import React from "react";
import milkyway from "../../assets/milkyway.jpg"


const Rapidscat = () => {
  return (
    <>
      <section className="bg-primary text-white py-20">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div className="space-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-l-sky-800 border-b-sky-800 ">
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-sky-800 uppercase"
              >
          mystery
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className="uppercase text-5xl"
              >
            Milky Way
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
              The Milky Way is a barred spiral galaxy that is home to our solar system. It's a vast collection of stars, gas, and dust, shaped like a flattened disk with a central bulge. This galactic disk spans approximately 100,000 light-years in diameter and is about 1,000 light-years thick.
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="900"
                className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
              >
                View All
              </button>
            </div>
            <div data-aos="zoom-in">
              <img
                src={milkyway}
                alt=""
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rapidscat;
