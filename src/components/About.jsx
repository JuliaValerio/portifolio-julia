import React from 'react'
import { HiArrowCircleRight } from "react-icons/hi";
import { Link } from 'react-scroll';
import profile from '../assets/julia-valerio.jpg';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-center pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#cb54de]'>
              Sobre
            </p>
          </div>
          </div>
          <div className='px-4 max-w-[1000px] w-full grid sm:grid-cols-2 gap-8'>
            <div className='sm:ml-2 sm:text-right text-3xl font-bold'>
              <img class="w-25 h-25 rounded-full mx-auto" src={profile} alt="" width="384" height="512" />
            </div>
            <div className='py-1'>
              <p>       
                Sou uma profissional de tecnologia apaixonada por aprender e crescer. Tenho 26 anos e moro em São Paulo, atualmente estou estudando Análise e Desenvolvimento de Sistemas na UNICSUL, além de me especializar em Java por meio do bootcamp da Generation.

              </p>
              <br/>
              <p>
              Estou em busca de novas oportunidades para crescer como profissional e contribuir em projetos que realmente façam a diferença. Se você procura alguém apaixonado por tecnologia, que está disposto a aprender e se desenvolver constantemente, não hesite em entrar em contato comigo.
              </p>
              <br/>
              <div>            
                <Link to='contact' smooth={true} duration={500}>
                  <button to='contact' smooth={true} duration={500} className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#cb54de] hover:border-[#cb54de]">
                    Contato
                    <span className="group-hover:rotate-90 duration-300 ">
                      <HiArrowCircleRight size={25} className="ml-3 group-hover:right-1 group-hover:-top-2 group-hover:relative" />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About