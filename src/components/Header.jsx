import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const Header = () => {
  return (
    <section className="flex flex-wrap justify-start w-auto pt-3 md:pt-8">
      <div className="w-[300px] h-[120px]">
        <TypeAnimation
          sequence={["<Natnael Desalegn/>", 15_000, ""]}
          speed={30}
          cursor={true}
          wrapper="h1"
          repeat={Infinity}
          className="font-mono py-3 text-5xl mr-10"
        />
      </div>

      {/* <h1 className="font-mono py-3 text-5xl mr-10">
        Natnael <br />
        Desalegn
      </h1> */}
      <p className="w-96 py-3  text-l">
        Hi, nice to meet you. I am aspiring front-end Developer who loves what
        he does. i like to make elegant and awsome websites. you can check my
        catalog here or download my resume
      </p>
    </section>
  );
}

export default Header