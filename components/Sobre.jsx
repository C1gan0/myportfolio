import React from "react"
import aboutImg from '../assets/imagens/about1.png'
const About = () => {
    const info=[
        {text:'Anos de Experiência',count:'02'},
        {text:'Projetos Completos',count:'04'},
        {text:'Empresas que Trabalhei',count:'01'},
    ]
    return( 
        <section id="about" className="py-10 text-white">
            <div className="text-center mt-8">
                <h3 className="text-5xl font-semibold">
                    Sobre <span className="text-indigo-600">Mim</span>
                </h3>
                <p className="text-gray-500 my-3 text-lg">Minha Introdução</p>
                <div className="flex md:flex-row flex-col-reverse items-center 
                md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
                    <div className="p-2">
                      <div className="text-gray-300 my-3">
                        <p className="text-justify leading-7 w-11/12 mx-auto">
                            Sou um estudante de desenvolvimento de software focado em Frontend, especializado em ReactJS e na criação de sites através do WordPress. Minha paixão é traduzir linhas de código em experiências visuais envolventes e funcionais. Explore meu portfólio para testemunhar como estou dando vida a projetos inovadores e descubra como podemos colaborar para transformar suas ideias em realidade.
                        </p>
                        <div className="flex mt-10 items-center gap-7">
                            {
                             info.map((content) => (
                                <div key={content.text}>
                                <h3 className="md:text-4xl text-2xl font-semibold
                                text-white ">
                                    {content.count}
                                    <span className="text-indigo-600">+</span>{" "}
                                    </h3>
                                <span className="md:text-base text-xs">{content.text}</span>
                                </div>
                            ))}
                        </div>
                        <br />
                        <br />
                        <a href="pdfdecurriculo" download>
                        <button className="btn-primary">Download CV</button>
                        </a>
                      </div>
                    </div> 
                    <div className="flex-1 md:mt-0 mt-9 flex justify-center items-center">
                            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12
                            max-w-sm aboutImg">
                              <img src={aboutImg}
                              alt="" 
                              className="w-full object-cover
                              bg-indigo-600 rounded-xl"/>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default About;