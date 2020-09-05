import Link from "next/link";

function ParticiparAtivamente() {
    return (
        <section id="about-us" className="section-quem-somos section-full-width">
            <div className="descricao-quem-somos theme-more-section main-wrapper">
                <div className="section-text">
                    <h2 className="theme-section-title mdl-typography--display-1-color-contrast">
                        Participar ativamente
                    </h2>
                    <p>
                        Além de ir aos grupos de estudos e demais eventos, você também pode participar apresentando
                        conteúdos, se tornando um embaixador em sua instituição e até como organizador, basta conversar
                        com os responsáveis em qualquer evento, demonstrar seu interesse e começar efetivamente a apoiar
                        as ações do grupo.
                    </p>
                    <p> O primeiro passo é participar de nossos eventos.</p>
                    <p className="wrapper-sugerir-eventos">
                        <Link href={"/participar-ativamente"}>
                            <a href="https://github.com/gdgjf/gdgjf.github.io#eventos" className="btn-primary">
                                Conhecer papeis
                            </a>
                        </Link>
                    </p>
                </div>
                <img className="img-round no-margin-left" src="/images/img-como-participar.png" alt=""/>
            </div>
        </section>
    )
}

export default ParticiparAtivamente
