import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/imagens/project1.png"
import project2 from "../assets/imagens/project2.jpg"
import project3 from "../assets/imagens/project3.jpg"
import project5 from "../assets/imagens/project5.png"
import project_person from "../assets/imagens/project_person.png"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination, Autoplay} from 'swiper'

const Project = () => {
  const projects =[
    {
      img: project1,
      name:'Aplicativo de Filmes' ,
      gitgub_link : '',
      live_link:''
    },
    {
      img: project2,
      name:'Pesquisar Trabalhos' ,
      gitgub_link : '',
      live_link:''
    },
    {
      img: project3,
      name:'HighKing',
      gitgub_link : '',
      live_link:''
    },
    {
      img: project5,
      name: 'Vue Country',
      gitgub_link : '',
      live_link:''
    },
  ]
    return( 
      <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Meus <span className="text-indigo-600">Projetos</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Veja alguns trabalhos</p>
      </div>
      <br />
      <div className="flex max-w-9xl gap-9 px-5 mx-auto justify-center items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
          slidesPerView={1.2}
          spaceBetween={20}
          breakpoints={{
            768:{
              slidePerView:2
            }
          }}
          loop={true}
          autoplay={{
            delay:3000,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          >
            {
              projects.map((project_info,i) => (
            <SwiperSlide key={i}>
            <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
              <img src={project_info.img} alt="" className="rounded-lg" />
              <h3 className="text-xl my-4">{project_info.name}</h3>
              <div className="flex gap-3">
                <a
                href={project_info.github_link}
                target="_blank"

                className="text-zinc-400 bg-gray-800 px-2 py-1 inline-block"
                >
                  Github
                </a>
                <a
                href={project_info.live_link}
                target="_blank"
                className="text-zinc-400 bg-gray-800 px-2 py-1 inline-block">
                  Live Demo
                </a>
              </div>
            </div>
            </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
        <div className="lg:block hidden">
          
        </div>
        </div>
      </section>
    ) 
};
export default Project;
