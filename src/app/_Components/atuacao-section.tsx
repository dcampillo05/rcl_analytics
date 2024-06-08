"use client";

import { Card, CardContent } from "@/components/ui/card";
import "../static/styles.css"

const Atuacao = () => {
    return (

        <div className="interface">
            <div className="flex justify-between">
                <div className="a1 atuacao-box">
                    <span>01</span>
                    <h3 className="subtitle">Análise de Dados</h3>
                    <p className="desc" style={{ textAlign: "left" }}>Resolver questões empresariais com embasamento em dados, tendo como meta eliminar achismos na tomada de decisões, com o suporte de ferramentas, como: Power BI, SQL Server, Python. Trazendo o beneficio de um melhor atendimento ao cliente, direcionamento de campanhas e aumento de conversão nas vendas.</p>
                </div>


                <div className="a2 atuacao-box">
                    <span>02</span>
                    <h3 className="subtitle">Automatização de Processos</h3>
                    <p className="desc"> Diminuir o tempo dedicado em tarefas manuais, liberando os colaboradores para que se concentrarem em ações mais estratégicas. Exemplificação: Automatização do registro de vendas no Excel. Vantagens: Incremento na eficiência, diminuição de falhas, priorização de atividades lucrativas.
                    </p>
                </div>


                <div className="a3 atuacao-box">
                    <span>03</span>
                    <h3 className="subtitle">Gerenciamento de Mídias Sociais e tráfego pago</h3>
                    <p className="desc">Aumentar a visibilidade da marca e captar potenciais clientes por meio de estratégias nas redes sociais com a assistência do recurso da plataforma de mídias sociais e automações de marketing, tendo como vantagem melhor interação com o público alvo e aumento da conversão de Leads em clientes.</p>
                </div>
            </div>
        </div>

    );
}

export default Atuacao