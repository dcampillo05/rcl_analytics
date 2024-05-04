"use client"

import React, { useEffect, useState } from "react";
import "../static/styles.css";
import { Component } from "./carousel";
import { Carousel } from "flowbite-react";



const Clients = () => {

    const [showClients, setShowClient] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const isClient = () => {
        setShowClient(!showClients);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 900);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className=" items-center">
            <h1 className="text-center mb-8  xl:text-[37px] max-lg:text-3xl">Nossos Clientes</h1>

            {isMobile ? (
                <div className=" w-full h-56 sm:h-64 xl:h-80 2xl:h-96">
                    <Carousel slideInterval={3000}>
                        <img src="/clientes+.jpg" alt="Mercado +" />
                        <img src="/clientesMercatto.jpg" alt="Mercatto" />
                        <img src="https://static.wixstatic.com/media/779186_9a6034c0bef140c0a126d532c6c46620~mv2.png/v1/crop/x_0,y_0,w_350,h_350,q_85,enc_auto/779186_9a6034c0bef140c0a126d532c6c46620~mv2.png" style={{ width: 200, height: 200 }} />
                    </Carousel>
                </div>
            ) : (
                <div className="clients-container mt-8 mb-8">
                    <div className="clients-img-container Pavani">
                        <div className="clients-img w-40 h-40 pb-10">
                            <img src="https://static.wixstatic.com/media/779186_9a6034c0bef140c0a126d532c6c46620~mv2.png/v1/crop/x_0,y_0,w_350,h_350,q_85,enc_auto/779186_9a6034c0bef140c0a126d532c6c46620~mv2.png" alt="" />
                        </div>
                    </div>

                    <div className="clients-img-container mais">
                        <div className="clients-img w-48 h-24">
                            <img src="/clientes+.jpg" alt="" width={200} height={120} />
                        </div>
                    </div>
                    <div className="clients-img-container Mercatto">
                        <div className="clients-img h-16 w-[300px]">
                            <img src="/clientesMercatto.jpg" alt="" />
                        </div>
                    </div>
                </div>
            )}


        </div>
    );
}

export default Clients;
