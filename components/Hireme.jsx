import React from "react";
import hireMe from "../assets/imagens/hireMe1.png";
const Hireme = () => {
    return( 
      <section id="hireme" className="py-10 px-3 text-white">
        <div className="text-center">
            <h3 className="text-4xl font-semibold">
               Contrate <span className="text-indigo-600">Me</span>
            </h3>
            <p className="text-gray-400 mt-3 text-lg">Você tem algum trabalho?</p>        
        </div>
        <div className="bg-gray-700 relative px-8 rounded-2xl py-7 lg:max-w-4xl 
        mx-auto min-h[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse
        items-center">
            <div>
              <h2 className="text-2xl font-semibold">
                Você precisa de algum trabalho meu?
                </h2>
              <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-7">
                Olá a todos! Sou o Tonny sou especialista na criação de sites utilizando Wordpress e ReactJS. Minha expertise vai desde a elaboração de Blogs e Portfólios até a implementação de Menus, E-commerce e plataformas para hotelaria. Imagine sua visão ganhando vida online, combinando a robustez do Wordpress ou a elegância do ReactJS. Estou aqui para realizar essas transformações digitais. Quer dar vida às suas ideias? Vamos conversar! Entre em contato para discutirmos como posso criar algo grandioso para você. Vamos transformar suas aspirações em realidade digital juntos!
              </p>
              <button className="btn-primary mt-10">Dê um Alô!</button>
            </div>
            <img
            src={hireMe}
            alt=""
            className="lg:h-[25rem] h-80 lg:absolute bottom-0 -right-3
            object-cover"
            />
        </div>
      </section>
    )
};
export default Hireme;