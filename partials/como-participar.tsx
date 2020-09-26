function ComoParticipar() {
    return (
        <div id="participate" className="section-como-participar section-full-width">
            <div className="main-wrapper">
                <div className="section-text">
                    <h2 className="theme-section-title mdl-typography--display-1-color-contrast">
                        Como Participar?
                    </h2>
                    <p>
                        Participar do Google Developers Group Juiz de Fora <strong>é muito fácil</strong>!
                        Se inscreva no <a href={"https://gdg.community.dev/gdg-juiz-de-fora/"}> GDG Community</a> para ser informado de todos os próximos eventos.
                    </p>
                    <p className="wrapper-sugerir-eventos">
                        <a href="https://gdg.community.dev/accounts/login/?next=/gdg-juiz-de-fora/" className="btn-primary">
                            Inscrever agora
                        </a>
                    </p>
                    <p>Uma vez inscrito, você será informado de cada novo evento que realizarmos, e poderá se inscrever e participar.</p>
                    <p>
                        Não é necessário ser um expert para participar do GDG, pois nossos eventos são públicos e com desenvolvedores em níveis distintos, desde os que estão começando agora até os mais experientes.
                    </p>
                </div>
                <img className="img-round no-margin-right" src="/images/img-como-participar.png" alt=""/>
            </div>
        </div>
    )
}

export default ComoParticipar
