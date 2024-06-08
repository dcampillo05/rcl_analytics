"use client"

import { Card } from "flowbite-react";

const PortItems = () => {
    return (
        <div className="flex flex-wrap justify-center gap-4 mt-[125px] mb-8">
            <a target="blank" href="https://app.powerbi.com/view?r=eyJrIjoiNDFjYmJhODctMWM3Mi00YTQ3LWJhMWEtYzdhM2Y5ODFhNjRkIiwidCI6ImNiNWM3MDYxLTUyYWQtNDJhNi1iMzZiLWQwYjBkYzEwNzMwYiJ9" className="group relative">
                <Card className="max-w-sm overflow-hidden transition-transform duration-500 ease-in-out transform group-hover:scale-105 w-[382px] h-[499px]" imgAlt="Imagem de DashBoard de vendas da Pavani Moto Center" imgSrc="/imgPort01.jpeg">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">DashBoard de Vendas - Pavani Moto Center</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Este relatório oferece uma visão detalhada e multifacetada das operações do Pavani Moto Center, permitindo uma gestão eficiente e uma compreensão clara dos indicadores de desempenho chave.
                    </p>
                </Card>
            </a>

            <a target="blank" href="https://app.powerbi.com/view?r=eyJrIjoiZTA3ZTYxOWItY2I4NC00YzE0LWJhZWYtOGY5NjQ5ZjJjNTMwIiwidCI6ImNiNWM3MDYxLTUyYWQtNDJhNi1iMzZiLWQwYjBkYzEwNzMwYiJ9" className="group relative">
                <Card className="max-w-sm overflow-hidden transition-transform duration-500 ease-in-out transform group-hover:scale-105 w-[382px] h-[499px] " imgAlt="Imagem de DashBoard de acompanhamento de metricas" imgSrc="/imgPort02.jpeg">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Acompanhamento de Métricas</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Este relatório oferece uma análise completa e refinada, permitindo à agência de marketing monitorar com precisão o impacto de suas ações e tomar decisões informadas para maximizar os resultados.
                    </p>
                </Card>
            </a>

            <a target="blank" href="https://app.powerbi.com/view?r=eyJrIjoiMzMwMDc3ODktYTEzZS00N2UwLWFjOTYtZDc0YTE4MzczM2VjIiwidCI6ImNiNWM3MDYxLTUyYWQtNDJhNi1iMzZiLWQwYjBkYzEwNzMwYiJ9" className="group relative">
                <Card className="max-w-sm overflow-hidden transition-transform duration-500 ease-in-out transform group-hover:scale-105 w-[382px] h-[499px]" imgAlt="Imagem de DashBoard de funil de Leads" imgSrc="/imgPort03.jpeg">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Funil de Leads</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Este relatório permite à agência de marketing monitorar e otimizar suas estratégias de captação e gerenciamento de leads, fornecendo insights valiosos em cada etapa do funil de vendas.
                    </p>
                </Card>
            </a>

            <a target="blank" href="https://app.powerbi.com/view?r=eyJrIjoiODE5YzQxNjQtZTg5YS00MzQyLTljMGEtZjY3NDY0MmJlOTIwIiwidCI6ImNiNWM3MDYxLTUyYWQtNDJhNi1iMzZiLWQwYjBkYzEwNzMwYiJ9" className="group relative">
                <Card className="max-w-sm overflow-hidden transition-transform duration-500 ease-in-out transform group-hover:scale-105 " imgAlt="Imagem de DashBoard de Monitoramento" imgSrc="/imgPort04.jpeg">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Relatório de Monitoramento</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        O relatório Monitoramento é uma ferramenta poderosa para a análise diária de desempenho financeiro e de mercado. Com suas visualizações claras e detalhadas, ele permite uma compreensão profunda dos principais indicadores, facilitando a tomada de decisões informadas e estratégicas.
                    </p>
                </Card>
            </a>


        </div>
    )
}

export default PortItems;