import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat bg-[url('https://i.ibb.co/frmYg96/Rectangle-24.png')]"
    >
      <div className="absolute inset-0 bg-[#2B2B2BB2]" />
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-[506px] lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
            Blog
            <strong className="block mt-1 text-xl font-bold text-white">
              Highlighted Articles
            </strong>
          </h1>
          <p className="max-w-lg mt-4 text-white sm:text-xl sm:leading-relaxed">
            Here is a sneak preview of the most recent events in Cholo Jai.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
