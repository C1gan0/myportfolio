import React from "react"

const Contato = () => {
  const contact_info =[
    {logo:'mail',text:"nomadi.selvagem@gmail.com"},
    {logo:'logo-whatsapp',text:"11 92526-2123"},
    {logo:'location',text:"localização"},
  ]
    return( 
      <section id="contact" className="py-10 px-3 text-white">
        <div className="text-center mt-8">
            <h3 className="text-4xl font-semibold">
              Contate <span className="text-indigo-600"> Me</span></h3>
            <p className="text-gray-400 mt-3 text-lg">
              Entre em contato
            </p>
            <div className="mt-16 flex md:flex-row flex-col
            gap-6 max-w-5xl bg-gray-800 md:p-6 p-2
            rounded-lg mx-auto">
              <form className="flex flex-col flex-l gap-5">
                <input type="text" placeholder="Seu Nome" />
                <input type="Email" placeholder="Seu Email" />
                <textarea placeholder="Sua Mensagem" rows={10}></textarea>
                <button className="btn-primary w-fit">Enviar Mensagem</button>
              </form>
                <div className="flex flex-col gap-7">
                {contact_info.map((contact,i) => (
                  <div key={i} className="flex gap-4 w-fit items-center">
                <div className="min-w[3.5rem] text-3xl min-h-[3.5rem]
                flex items-center justify-center text-white bg-indigo-600
                rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                   <p className="text-base">{contact.text}</p>
                </div>
                ))}
             
              </div>
            </div>
        </div>
      </section>
    )
};
export default Contato;