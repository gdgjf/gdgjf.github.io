function ComoParticipar() {
    return (
        <div id="participate" className="section-como-participar section-full-width">
            <div className="main-wrapper">
                <div className="section-text">
                    <h2 className="theme-section-title mdl-typography--display-1-color-contrast">
                        Como Participar?
                    </h2>
                    <p>
                        Participar do Google Developers Group Juiz de Fora <strong>é muito fácil!</strong>
                        Se inscreva no <a href={"https://gdg.community.dev/gdg-juiz-de-fora/"}> GDG Community</a>, clicando em "join", para você ser informado de todos os próximos eventos.
                    </p>
                    <p>
                        Além de ir aos grupos de estudos e demais eventos, você também pode participar apresentando conteúdos, se tornando um embaixador em sua instituição e até como organizador, basta conversar com os responsáveis em qualquer evento, demonstrar seu interesse e começar efetivamente a apoiar as ações do grupo.
                    </p>
                    <p className="wrapper-sugerir-eventos">
                        <a href="https://github.com/gdgjf/gdgjf.github.io#eventos" className="btn-primary">
                            Sugerir eventos
                        </a>
                    </p>
                </div>
                <img className="img-round no-margin-right" src="/images/img-como-participar.png" alt=""/>
            </div>
        </div>
    )
}

export default ComoParticipar
