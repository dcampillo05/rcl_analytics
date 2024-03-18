"use client";

import { Card, CardContent } from "@/components/ui/card";
import "../static/styles.css"

const Atuacao = () => {
    return(
        
            <div className="interface">
                <div className="flex justify-between">
                    <div className="a1 atuacao-box">
                        <span>01</span>
                        <h3 className="subtitle">Consultoria em negócios </h3>
                        <p className="desc">Adotamos rigorosamente as diretrizes e excelência operacional das consultorias mais renomadas globalmente. Rejeitamos abordagens generalistas, pois nossa equipe é composta por especialistas profundamente versados em cada área, visando aprimorar significativamente o desempenho do negócio. Priorizamos uma comunicação autêntica e coesa para garantir resultados impactantes e duradouros.</p>
                    </div>
                

                    <div className="a2 atuacao-box">
                        <span>02</span>
                        <h3 className="subtitle">Criatividade e Storytelling</h3>
                        <p className="desc">A integração de criatividade e storytelling desempenha um papel crucial ao transformar dados brutos em insights impactantes. A criatividade permite a concepção de visualizações cativantes, enquanto o storytelling proporciona uma narrativa envolvente que contextualiza os números, tornando a análise mais acessível e memorável. Essa abordagem traz benefícios significativos para o negócio.!</p>
                    </div>
                

                    <div className="a3 atuacao-box">
                        <span>03</span>
                        <h3 className="subtitle">Automação de processos e uso de IA baseada em dado</h3>
                        <p className="desc">Em um cenário empresarial onde a agilidade e eficiência são a chave para o sucesso, a automação de processos e o uso da inteligência artificial baseada em dados emergem como diferenciais cruciais. Imagine otimizar sua operação, reduzir custos e potencializar a qualidade das decisões, tudo isso enquanto libera recursos para focar no que realmente importa: o crescimento do seu negócio.</p>
                    </div>
                </div>
            </div>
        
    );
}

export default Atuacao