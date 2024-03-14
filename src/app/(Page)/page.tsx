"use client";

import { useEffect, useState } from "react";
import Atuacao from "../_Components/atuacao-section";
import { Component } from "../_Components/carousel";
import Header from "../_Components/header";
import "../static/styles.css"
import Image from "next/image";
import { Forms } from "../_Components/forms";



export default function Home() {
  
  
  return (

    <>
      <div className="" id="">
        <Header/>
      </div>
      

     <main className="">

        {/* TODO alterar as imagens */}
        <div className="mt-[53px]">
          <Component/>
        </div>

        <section className="sobre w-full">
          <div className="interface">
            <div className="flex">
              <div className="txt-sobre">
                  <h1 className=" text-4xl font-bold leading-10 mb-14">Sobre nós</h1>
                  <p className="text-base font-light leading-6 text-black">A partir do início de 2023, a RCL Analytics surge com o compromisso de potencializar de forma positiva o faturamento de seus clientes. Destacamo-nos como uma entidade singular, unindo os atributos de uma agência e uma consultoria de negócios, fortalecidas por tecnologia de ponta e inteligência artificial. Nossa proposta de valor harmoniza, em uma abordagem coesa, cinco áreas de conhecimento que frequentemente se encontram dispersas no mercado:</p>
              </div>
            </div>
          </div>
        </section>

        <section className="atuacao">
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
                        <h3 className="subtitle">Comprometimento e resultados:</h3>
                        <p className="desc">Todos nossos contratos têm um componente relevante de remuneração variável: Ganhamos apenas quando o cliente ganha. Medimos a performance a partir das ações tomadas.</p>
                    </div>
                    
                    {/* TODO direcionar botão */}
                    <div className="btn-contato">
                        <a href="#"> 
                            <button>Faça o seu orçamento</button>
                        </a>
                    </div>

                </div>
            </div>
        </section>


        <section className="funcionario">
            <div className="interface">
                <div className="flex">
                    {/* TODO caso haja mais de um funcionario, adicionar o nome e a imagem dele no site */}
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
        </section>

        <section className="diferenciais">
          <div className="interface">
            <div className="flex">

              <h2>Por que a <span>RCL Analytics</span> é diferente?</h2>

              <div className="Container-list relative z-5 pt-4 pb-12 space-y-4 lg:space-y-0 lg:mt-0 lg:pt-16 lg:pb-24">
                  <span className="Number-list  !font-bold !text-[4.625rem] !leading-[5rem]" 
                  style={{
                    marginRight: '45px',
                    marginBottom: '56px'

                  }}>01</span>

                  <p className=" !text-black lg:text-[1.125rem]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt impedit labore nesciunt asperiores eos! Atque neque quo numquam autem veritatis error odio tenetur accusamus. Aliquam sunt quasi dolor exercitationem expedita!</p>

              </div>
              <div className="Container-list relative z-5 pt-4 pb-12 space-y-4 lg:space-y-0 lg:mt-0 lg:pt-16 lg:pb-24">
                  <span className="Number-list  !font-bold !text-[4.625rem] !leading-[5rem]" 
                  style={{
                    marginRight: '45px',
                    marginBottom: '56px'

                  }}>02</span>

                  <p className=" !text-black lg:text-[1.125rem]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt impedit labore nesciunt asperiores eos! Atque neque quo numquam autem veritatis error odio tenetur accusamus. Aliquam sunt quasi dolor exercitationem expedita!</p>

              </div>
              <div className="Container-list relative z-5  pb-12 space-y-4 lg:space-y-0 lg:mt-0 lg:pt-16 lg:pb-24">
                  <span className="Number-list  !font-bold !text-[4.625rem] !leading-[5rem]" 
                  style={{
                    marginRight: '45px',
                    marginBottom: '56px'

                  }}>03</span>

                  <p className=" !text-black lg:text-[1.125rem]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt impedit labore nesciunt asperiores eos! Atque neque quo numquam autem veritatis error odio tenetur accusamus. Aliquam sunt quasi dolor exercitationem expedita!</p>

              </div>
              <div className="Container-list relative z-5 pt-4 pb-12 space-y-4 lg:space-y-0 lg:mt-0 lg:pt-16 lg:pb-24">
                  <span className="Number-list  !font-bold !text-[4.625rem] !leading-[5rem]" 
                  style={{
                    marginRight: '45px',
                    marginBottom: '56px'

                  }}>04</span>

                  <p className=" !text-black lg:text-[1.125rem]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt impedit labore nesciunt asperiores eos! Atque neque quo numquam autem veritatis error odio tenetur accusamus. Aliquam sunt quasi dolor exercitationem expedita!</p>

              </div>

            </div>

           
          </div>
        </section>

        <section className="forms items-center justify-center ">
          <div className="interface">
  
                <div className="forms-container">
                  <Forms/>
                </div>
            
          </div>
        </section>


     </main>
        
    </>

    
  );
}
