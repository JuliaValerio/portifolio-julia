import React from "react";
import { HiArrowCircleRight } from "react-icons/hi";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/*Container*/}
      <div style={{paddingTop: "5em"}} className="max-w-[1000px] mx-auto flex flex-col justify-center h-full px-8 md:px-16">
        <p className="text-[#cb54de]">Oi, meu nome é</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#ccd6f6]">
          Julia Valerio
        </h1>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#8892b0]">
          Eu sou Desenvolvedora Front-End Jr.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[800px]">
          Atualmente estou focada em aprender cada vez mais sobre frontend, que
          até o momento é a área que mais me chamou a atenção "principalmente
          pelo dinamismo", e apesar das dificuldades encontradas em entender os
          diversos termos existentes nesse ecossistema, trabalhar com projetos
          de UI / UX é uma experiência desafiadora porem gratificante, que a
          cada passo dado traz uma alegria muito grande.
        </p>
        <div>            
          <Link to='work' smooth={true} duration={500}>
            <button to='work' smooth={true} duration={500} className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#cb54de] hover:border-[#cb54de]">
              Portifolio
              <span className="group-hover:rotate-90 duration-300 ">
                <HiArrowCircleRight size={25} className="ml-3 group-hover:right-1 group-hover:-top-2 group-hover:relative" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
