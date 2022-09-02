import React from 'react'
import { RiMailSendLine } from 'react-icons/ri';

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/18d01646-0902-4333-8a36-8c1d05c63681" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#cb54de] text-gray-300'>Contato</p>
                <p className='text-gray-300 py-4'>// Vamos conversar ? 😊</p>
            </div>
            <input className='transition ease-in-out delay-150 hover:-translate-y-1 duration-300 rounded-md shadow-xl bg-[#ccd6f6] p-2' type="text" placeholder='Nome' name='name' />
            <input className='transition ease-in-out delay-150 hover:-translate-y-1 duration-300 rounded-md shadow-xl my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='E-mail' name='email' />
            <textarea className='transition ease-in-out delay-150 hover:-translate-y-1 duration-300 rounded-md shadow-xl bg-[#ccd6f6] p-2' type="text" rows="10" placeholder='Mensagem' name="message"></textarea>
            <button className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-zinc-50 duration-300 text-white border-2 hover:bg-[#cb54de] hover:border-[#cb54de] px-4 py-3 my-8 mx-auto flex items-center'><p>Enviar</p> <RiMailSendLine style={{marginLeft:'1em'}}size={20}/></button>
        </form>
    </div>
  )
}

export default Contact