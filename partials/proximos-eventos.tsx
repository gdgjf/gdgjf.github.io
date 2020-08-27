function ProximosEventos() {
    return (
        <section id="next-events" className="section-proximos-eventos section-full-width">
            <div className="main-wrapper">
                <h2 className="theme-section-title mdl-typography--display-1-color-contrast">
                    Próximos Eventos
                </h2>
                <div className="theme-card-container mdl-grid">

                    <div id="dinamic_events"></div>

                    <div className="theme-customized-section-text">
                        <div className="theme-customized-section">
                            <p className="mdl-typography--font-light">
                                Agora os GDGs utilizam o Meetup para gerenciar os eventos, junte-se a nós no Meetup do GDGJF e seja avisado de todos os próximos eventos!
                            </p>
                            <a href="https://www.meetup.com/pt-BR/gdg-juiz-de-fora/" target="_blank">
                                <img alt="logo script" src="https://secure.meetup.com/s/img/0/logo/svg/logo--script.svg" style={{ height: '50px' }} />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ProximosEventos