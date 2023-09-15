import React from "react"
import hero1 from '../assets/imagens/hero1.png'

const Hero = () => {
    const social_media = [
        'logo-instagram',
        'logo-linkedin',
        'logo-github',
        'logo-whatsapp',
    ]
    return( 

    <section id="home" className="min-h-screen flex py-10 md:flex-row flex-col
     items-center"
     >
        <div className="flex-1 flex items-center justify-center h-full">
            <img src={hero1} alt="" className="md:w-11/12 h-full object-cover" />
        </div>
        <div className="flex-1 ">
        <div className="md:text-left text-center">
            <h1 className="md:text-6xl text-3xl md:leading-normal leading-10
            text-white font-bold">
                <span className="text-indigo-600 md:text-6xl text-5xl">
                    Olá!
                    <br />
                </span>
                Meu Nome é <span>Tonny</span>
            </h1>
            <h4 className="md:text-2xl text-lg md:leading-normal leading-5
            font-bold text-gray-500">
                Frontend Developer
            </h4>
            <button className="btn-primary mt-8">Contact Me</button>
            <div className="mt-8 text-2xl flex items-center md:justify-start
            justify-center gap-5">
                {social_media?.map((icon) => (
                    <div 
                    key={icon} 
                    className="text-gray-600 hover:text-white"
                    >
                        <ion-icon name={icon}></ion-icon>
                    </div>
                ))}
            </div>
          </div>
        </div>
        </section>
    )
};
export default Hero;