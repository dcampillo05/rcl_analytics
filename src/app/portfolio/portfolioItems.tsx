"use client"

import { supabase } from "@/app/lib/supabase";
import { url } from "inspector";
import { useEffect, useState } from "react";
import "../static/styles.css"   

const PortItems = () => {
    return(
        <div>
            <section className="imgPort">
                <div className="projectItem">
                    <div className="project-box">
                        <div className="project-thumbnail">
                            <a href="#">
                                <img width="345" height="345" src="/imgteste.jpg" alt="Imagem de Dash" />
                            </a>
                        </div>
                        <div className="portfolio-info">
                            <a className="overlay" href="#"></a>
                            <div className="portfolio-info-inner">
                                <h5><a href="#">Dashboard de Analise de matricula</a></h5>
                                <p> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PortItems;