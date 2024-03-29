"use client";

import Atuacao from "../_Components/atuacao-section";
import { Component } from "../_Components/carousel";
import Header from "../_Components/header";
import "../static/styles.css"
import { Forms } from "../_Components/forms";
import FooterCl from "../_Components/footer";
import Profile from "../_Components/Profile";

import ScrollReveal from 'scrollreveal';
import { useEffect } from "react";




export default function Home() {

    useEffect(() => {
      if (typeof window !== 'undefined') {   
        const ScrollReveal = require('scrollreveal').default;
            
        const sr = ScrollReveal();
        sr.reveal('.d1', {
          duration: 2000,
          distance: '90px',
          delay: 500,
          origin: 'right'
        });
        sr.reveal('.d2', {
          duration: 2000,
          distance: '90px',
          delay: 1000,
          origin: 'right'
        });
        sr.reveal('.d3', {
          duration: 2000,
          distance: '90px',
          delay: 1400,
          origin: 'right'
        });
        sr.reveal('.d4', {
          duration: 2000,
          distance: '90px',
          delay: 1900,
          origin: 'right'
        });
        
        return () => {
          sr.destroy();
        };
      }
    }, []);
  
  return (

    <>
      

      <div className="" id="Menu">
        <Header/>
      </div>
      

     <main className="">

        {/* TODO alterar as imagens */}
        <div className="mt-[53px]">
          <Component/>
        </div>

        <section className="sobre w-full" id="sobre">
          <div className="interface">
            <div className="flex">
              <div className="txt-sobre items-center">
                  <h1 className=" text-4xl font-bold leading-10 mb-14">Sobre nós</h1>
                  <p className="text-base font-light leading-6 text-black">A partir do início de 2023, a RCL Analytics surge com o compromisso de potencializar de forma positiva o faturamento de seus clientes. Nos destacamos como uma entidade singular, unindo os atributos de uma agência e uma consultoria de negócios, fortalecidas por tecnologia de ponta e inteligência artificial. Nossa proposta de valor harmoniza, em uma abordagem coesa, cinco áreas de conhecimento que frequentemente se encontram dispersas no mercado:</p>
              </div>
            </div>
          </div>
        </section>

        <section className="atuacao" id="atuacao">
            <Atuacao/>
        </section>

        <section className="metodologia">
            <div className="interface">
                <div className="flex">

                    <div className="met-box">
                        <h3 className="subtitle">Metodologia de trabalho:</h3>
                        <p className="desc">Nosso time são sempre customizados e totalmente dedicados ao cliente, atuando em reuniões online, reuniões presenciais e contato via texto todos os dias da semana.</p>
                    </div>

                    <div className="met-box">
                        <h3 className="subtitle"><span className="gambiarra">Comprometimento</span> e resultados:</h3>
                        <p className="desc">Todos nossos contratos têm um componente relevante de remuneração variável: Ganhamos apenas quando o cliente ganha. Medimos a performance a partir das ações tomadas.</p>
                    </div>
                    
                    {/* TODO direcionar botão */}
                    <div className="btn-contato">
                        <a href="#"> 
                            <button>Entre em contato</button>
                        </a>
                    </div>

                </div>
            </div>
        </section>


        {/* <section className="funcionario">
            <div className="interface">
                <div className="flex">
                    <div className="img-func">
                        <Image src={"/pessoa.jpg"} alt="Imagem do funcionario" width={1000} height={80} />
                    </div>

                    <div className="sobre-func">
                      <h1>CEO</h1>
                      <h3>Raphael Lopes</h3>
                      <h5>Dono</h5>
                      <p>Paulista, profissional especializado em Business Intelligence, acumulando mais de seis anos de experiência na área. Graduado pela Universidade Anhembi Morumbi e com MBA em Análise de Dados. Seu impulso por desafios é respaldado por uma sólida expertise em serviços de análise de dados, com ênfase em estratégias para tomada de decisões e monitoramento de indicadores de desempenho. </p>
                    </div>

                </div>
            </div>
        </section> */}

        <section>
          <Profile/>
        </section>

        <section className="diferenciais">
          <div className="interface">
            <div className="flex">

              <h2>Por que a <span className="dark:text-white">RCL Analytics</span> é diferente?</h2>

              <div className="d1 Container-list relative z-5 pt-4 pb-12 space-y-4 lg:space-y-0 lg:mt-0 lg:pt-16 lg:pb-24">
                  <span className="Number-list  !font-bold !text-[4.625rem] !leading-[5rem] dark:text-white" 
                  style={{
                    marginRight: '45px',
                    marginBottom: '56px'

                  }}>01</span>

                  <p className=" !text-black lg:text-[1.125rem]"><strong>Serviços Centralizados e Diretos:</strong> Eliminamos a necessidade de envolver terceiros, garantindo uma experiência mais eficiente e direta para nossos clientes.</p>

              </div>
              <div className="d2 Container-list relative z-5 pt-4 pb-12 space-y-4 lg:space-y-0 lg:mt-0 lg:pt-16 lg:pb-24 dark:text-white">
                  <span className="Number-list  !font-bold !text-[4.625rem] !leading-[5rem]" 
                  style={{
                    marginRight: '45px',
                    marginBottom: '56px'

                  }}>02</span>

                  <p className=" !text-black lg:text-[1.125rem]"><strong>Ferramentas Integradas para Facilitar a Entrega:</strong>  Utilizamos ferramentas integradas de última geração para tornar a entrega dos serviços mais eficiente e eficaz.</p>

              </div>
              <div className="d3 Container-list relative z-5  pb-12 space-y-4 lg:space-y-0 lg:mt-0 lg:pt-16 lg:pb-24 dark:text-white">
                  <span className="Number-list  !font-bold !text-[4.625rem] !leading-[5rem]" 
                  style={{
                    marginRight: '45px',
                    marginBottom: '56px'

                  }}>03</span>

                  <p className=" !text-black lg:text-[1.125rem]"><strong>Planos Personalizáveis para Atender às Necessidades de Negócios Diversos:</strong> Oferecemos planos personalizáveis que se adaptam aos diferentes tipos de negócios e tamanhos de empresa, garantindo que cada cliente receba exatamente o que precisa.</p>

              </div>
              <div className="d4 Container-list relative z-5 pt-4 pb-12 space-y-4 lg:space-y-0 lg:mt-0 lg:pt-16 lg:pb-24">
                  <span className="Number-list  !font-bold !text-[4.625rem] !leading-[5rem] dark:text-white" 
                  style={{
                    marginRight: '45px',
                    marginBottom: '56px'

                  }}>04</span>

                  <p className=" !text-black lg:text-[1.125rem]"><strong>Suporte e Esclarecimento de Dúvidas 24/7:</strong> Nossa equipe de suporte está disponível 24 horas por dia, 7 dias por semana, para fornecer assistência e esclarecer qualquer dúvida que nossos clientes possam ter, garantindo assim uma comunicação contínua e eficaz.</p>

              </div>

            </div>

           
          </div>
        </section>

        <section className="forms items-center justify-center " id="forms">
          <div className="interface">
                  
                <div className="forms-container flex flex-col">
                <h1 className="txt-form text-white">Faça o seu orçamento!</h1>
                  <Forms/>
                </div>
            
          </div>
        </section>


     </main>
        
     <footer>
      <FooterCl/>
     </footer>
    </>

    
  );
}
