import React from 'react'
import Figure from './Figure'

const Footer = () => {
  return (
    <div className=' w-full h-20  px-8'>
        <footer className=' flex justify-center w-full h-20  px-8'>
            <div className=' flex items-center h-full'>
                <Figure imgSrc={"/iconos/icono-pro.svg"} customclas={"w-10 h-10"}/>
                <Figure imgSrc={"/iconos/icono-inst.svg"} customclas={"w-10 h-10"}/>
                <Figure imgSrc={"/iconos/icono-face.svg"} customclas={"w-10 h-10"}/>
                <Figure imgSrc={"/iconos/icono-twiter.svg"} customclas={"w-10 h-10"}/>
                <Figure imgSrc={"/iconos/icono-x.svg"} customclas={"w-10 h-10"}/>
                <Figure imgSrc={"/iconos/icono-youtube.svg"} customclas={"w-10 h-10"}/>
                
            </div>
{/*             <div className=' h-full'>
                <ul className=' text-white AmenttiBold text-xs flex items-center tracking-[7px] text-center py-4 h-full'>
                    <li className=' pr-6'>
                        PREGUNTAS <br/>FRECUENTES
                    </li>
                    <li className=' px-6 border-x border-[--mainColorText]'>
                        POLÍTICA DE <br/>PRIVACIDAD
                    </li>
                    <li className=' ml-12'>
                        TERMINOS Y <br/>CONDICIONES
                    </li>
                </ul>
            </div>
 */}        </footer>
    </div>
  )
}

export default Footer