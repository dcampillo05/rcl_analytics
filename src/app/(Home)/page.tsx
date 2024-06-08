"use client";

import Atuacao from "../_Components/atuacao-section";
import { Component } from "../_Components/carousel";
import Header from "../_Components/header";
import "../static/styles.css"
import { Forms } from "../_Components/forms";
import FooterCl from "../_Components/footer";
import { useEffect } from "react";
import Clients from "../_Components/clients";




export default function Home() {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const ScrollReveal = require('scrollreveal').default;

      const sr = ScrollReveal();
      sr.reveal('.d1', {
        duration: 2000,
        distance: '90px',
        delay: 500,
        origin: 'right',
        mobile: false,
      });
      sr.reveal('.d2', {
        duration: 2000,
        distance: '90px',
        delay: 1000,
        origin: 'right',
        mobile: false,
      });
      sr.reveal('.d3', {
        duration: 2000,
        distance: '90px',
        delay: 1400,
        origin: 'right',
        mobile: false,
      });
      sr.reveal('.d4', {
        duration: 2000,
        distance: '90px',
        delay: 1900,
        origin: 'right',
        mobile: false,
      });

      return () => {
        sr.destroy();
      };
    }
  }, []);

  return (

    <>


      <div className="" id="Menu">
        <Header />
      </div>


      <main className="">

        {/* TODO alterar as imagens */}
        <div className="mt-[53px]">
          <Component />
        </div>

        <section className="sobre " id="sobre">
          <div className="interface">
            <div className="flex">
              <div className="txt-sobre items-center">
                <h1 className=" text-4xl font-bold leading-10 mb-14">Sobre nós</h1>
                <p className="text-base font-light leading-6 text-black">A RCL Analytics é uma empresa especializada em análise de dados e automação de processos, empenhada em transformar seus dados em decisões estratégicas e rentável. Com seis anos de conhecimento no mercado, estamos prontos para atender tanto as organizações de menor porte quanto as de grande porte, oferecendo sempre soluções personalizadas que se adequam às demandas individuais de cada cliente.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="atuacao" id="atuacao">
          <Atuacao />
        </section>

        <section className="metodologia" id="meth">
          <div className="interface">
            <div className="flex">

              <div className="met-box">
                <h3 className="subtitle">Metodologia de trabalho:</h3>
                <p className="desc">Em nossa empresa temos a ideologia de que a chave para alcançar resultados excepcionais está na simplicidade e na eficiência. A nossa abordagem de trabalho é pensada para ser transparente, objetiva e focada em resultados, assegurando que todos os projetos sejam realizados com precisão e rapidez.</p>
              </div>

              <div className="met-box">
                <h3 className="subtitle">Nossa Missão:</h3>
                <p className="desc">Temos como objetivo capacitar organizações a realizar escolhas mais precisas e ágeis, fundamentadas em informações concretas em vez de suposições. Acreditamos que a análise de dados seja essencial para alcançar o êxito nos negócios, propiciando uma compreensão abrangente do mercado e dos clientes.</p>
              </div>

              {/* TODO direcionar botão */}
              <div className="btn-contato">
                <a target="blank" href="https://linktr.ee/rclanalytics?utm_source=linktree_profile_share&ltsid=fc2d3a68-cb62-4376-8473-4fbfacd3b74e">
                  <button>Faça o seu orçamento</button>
                </a>
              </div>

            </div>
          </div>
        </section>


        <section className="clientes">
          <Clients />
        </section>

        <section className="diferenciais bg-white">
          <div className="interface">
            <div className="flex">

              <h2>Por que a <span className="dark:text-white">RCL Analytics</span> é diferente?</h2>

              <div className="d1 Container-list relative z-5 pt-4 pb-12 space-y-4 lg:space-y-0 lg:mt-0 lg:pt-16 lg:pb-24">
                <span className="Number-list  !font-bold !text-[4.625rem] !leading-[5rem] dark:text-white"
                  style={{
                    marginRight: '45px',
                    marginBottom: '56px'

                  }}>01</span>

                <p className=" !text-black lg:text-[1.125rem]"><strong>Adaptação às Necessidades do Cliente:</strong> Cada solução é cuidadosamente adaptada às necessidades específicas de cada cliente, garantindo que nossas propostas sejam eficazes e alinhadas com os objetivos do negócio.</p>

              </div>
              <div className="d2 Container-list relative z-5 pt-4 pb-12 space-y-4 lg:space-y-0 lg:mt-0 lg:pt-16 lg:pb-24 dark:text-white">
                <span className="Number-list  !font-bold !text-[4.625rem] !leading-[5rem]"
                  style={{
                    marginRight: '45px',
                    marginBottom: '56px'

                  }}>02</span>

                <p className=" !text-black lg:text-[1.125rem]"><strong>Flexibilidade e Agilidade:</strong>  Utilizamos metodologias ágeis para adaptar rapidamente às mudanças e garantir a implementação eficiente das soluções.</p>

              </div>
              <div className="d3 Container-list relative z-5  pb-12 space-y-4 lg:space-y-0 lg:mt-0 lg:pt-16 lg:pb-24 dark:text-white">
                <span className="Number-list  !font-bold !text-[4.625rem] !leading-[5rem]"
                  style={{
                    marginRight: '45px',
                    marginBottom: '56px'

                  }}>03</span>

                <p className=" !text-black lg:text-[1.125rem]"><strong> Foco em Resultados:</strong> Decisões Baseadas em Dados: Nossas análises e propostas são fundamentadas em dados concretos, eliminando achismos e garantindo decisões mais assertivas.</p>

              </div>
              <div className="d4 Container-list relative z-5 pt-4 pb-12 space-y-4 lg:space-y-0 lg:mt-0 lg:pt-16 lg:pb-24">
                <span className="Number-list  !font-bold !text-[4.625rem] !leading-[5rem] dark:text-white"
                  style={{
                    marginRight: '45px',
                    marginBottom: '56px'

                  }}>04</span>

                <p className=" !text-black lg:text-[1.125rem]"><strong>Aumento de Performance:</strong> Nosso objetivo é aumentar a performance dos nossos clientes, seja através da automação de processos, análise de dados ou campanhas de marketing digital.</p>
              </div>

              <div className="d4 Container-list relative z-5 pt-4 pb-12 space-y-4 lg:space-y-0 lg:mt-0 lg:pt-16 lg:pb-24">
                <span className="Number-list  !font-bold !text-[4.625rem] !leading-[5rem] dark:text-white"
                  style={{
                    marginRight: '45px',
                    marginBottom: '56px'

                  }}>05</span>

                <p className=" !text-black lg:text-[1.125rem]"><strong>Transparência e Confiança:</strong> Processos Transparentes: Mantemos nossos clientes informados sobre cada etapa do processo, garantindo total transparência e confiança.</p>
              </div>

              <div className="d4 Container-list relative z-5 pt-4 pb-12 space-y-4 lg:space-y-0 lg:mt-0 lg:pt-16 lg:pb-24">
                <span className="Number-list  !font-bold !text-[4.625rem] !leading-[5rem] dark:text-white"
                  style={{
                    marginRight: '45px',
                    marginBottom: '56px'

                  }}>06</span>

                <p className=" !text-black lg:text-[1.125rem]"><strong>Resultados Comprovados:</strong>  Apresentamos resultados concretos e mensuráveis, demonstrando claramente o impacto das nossas soluções no negócio dos nossos clientes</p>
              </div>

            </div>


          </div>
        </section>

        <section className="forms items-center justify-center " id="forms">
          <div className="interface">

            <div className="forms-container flex flex-col">
              <h1 className="txt-form text-white">Entre em contato</h1>
              <Forms />
            </div>

          </div>
        </section>


      </main>

      <footer>
        <FooterCl />
      </footer>
    </>


  );
}
