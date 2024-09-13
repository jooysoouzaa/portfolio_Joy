import './SobreStyle.css'


function Sobre() {
    return (
        <section className='sobre'>
            <div className='sobre__container'>
                <div className='sobre__textos'>
                    <h2 className='sobre__titulo-principal'><strong>Sobre Mim</strong></h2>
                    <p className='sobre__paragrafo'>Sou a Joy Sóuza, tenho 28 anos, moro em São Bernardo do Campo - SP e sou formada em Análise e
                        Desenvolvimento de Sistemas pela FIAP. Apaixonada por tecnologia e em constante busca por
                        aprendizado, sou autodidata, detalhista e focada em resultados. Amo estudar e adquirir novos conhecimentos, pois
                        acredito que o conhecimento é algo que ninguém pode tirar de mim. Busco soluções inovadoras
                        e eficientes para os projetos que me envolvo, com o objetivo de evoluir como desenvolvedora front-end
                        e contribuir significativamente para o sucesso das empresas onde colaboro</p>

                    <h3 className='sobre__titulo-secundario'>Por que escolhi ser dev front-end?</h3>
                    <p>Escolhi ser desenvolvedora front-end porque amo a combinação entre design e tecnologia. É
                        uma oportunidade de criar páginas visualmente atraentes e funcionais, enquanto me mantendo atualizada
                        com as inovações digitais. A tecnologia me desafia a aprender constantemente e superar expectativas.</p>
                    <a href="contato/curriculo_joyceDeSouzaAraujo_desenvolvedoraFrontEnd.pdf" target="_blank">
                        <button className="button sobre__button" type="submit">Baixar CV</button>
                    </a>
                </div>
                <div className="sobre__img">
                    <img src="/secaoSobre-img.png" width="1080" height="1080" alt="Imagem de perfil Joy Sóuza" />
                </div>
            </div>
        </section>
    )
}

export default Sobre;