import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/BhanukiranG", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        <span className="purple_gradient">AI PinPoint Summarizer</span><br className='max-md:hidden' />
        <span className='gray_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='head1_text'>
        <span className="light_grey_gradient">Simplify Your Reading!</span>
      </h2>
    </header>
  );
};

export default Hero;