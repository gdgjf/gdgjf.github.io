import Head from 'next/head'

const IndexPage = () => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="description" content="Google Developer Group de Juiz de Fora" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
      <title>GDG Juiz de Fora</title>

      <meta name="mobile-web-app-capable" content="yes" />
      <link rel="icon" sizes="192x192" href="images/android-icon.png" />

      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="white" />
      <meta name="apple-mobile-web-app-title" content="GDG Juiz de Fora" />
      <link rel="apple-touch-icon-precomposed" href="images/ios-icon.png" />

      <meta name="msapplication-TileImage" content="images/ms-icon.png" />
      <meta name="msapplication-TileColor" content="#0097A7" />

      <link rel="shortcut icon" href="images/favicon.png" />

      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <link rel="stylesheet" href="https://code.getmdl.io/1.1.3/material.cyan-blue.min.css" />

      <link rel="stylesheet" href="./styles.css"></link>
    </Head>
    <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <div className="theme-header mdl-layout__header mdl-layout__header--waterfall">
        <div className="mdl-layout__header-row">
          <span className="theme-title mdl-layout-title">
            <img className="theme-logo-image" src="images/header_logo_gdg.png" />
          </span>
          {/* Add spacer, to align navigation to the right in desktop */}
          <div className="theme-header-spacer mdl-layout-spacer"></div>

          {/* Navigation */}
          <div className="theme-navigation-container">
            <nav className="theme-navigation mdl-navigation">
              <a className="mdl-navigation__link mdl-typography--text-uppercase" href="">Home</a>
              <a className="mdl-navigation__link mdl-typography--text-uppercase" href="#next-events">Eventos</a>
              <a className="mdl-navigation__link mdl-typography--text-uppercase" href="#participate">Como participar</a>
              <a className="mdl-navigation__link mdl-typography--text-uppercase" href="#about-us">Quem somos?</a>
            </nav>
          </div>

          <span className="theme-mobile-title mdl-layout-title">
            <img className="theme-logo-image" src="images/header_logo_gdg.png" />
          </span>
        </div>
      </div>
      <div className="theme-content mdl-layout__content">
        <div className="theme-be-together-section mdl-typography--text-center">
          <div className="logo-font theme-slogan">Google Developers Group Juiz de Fora</div>
          <div className="logo-font theme-sub-slogan">Bem-vindo(a) a comunidade de desenvolvedores. <br />
            Participe, aprenda e compartilhe conhecimento!
          </div>
        </div>

        {/* START Next events */}
        <div className="theme-more-section">
          <div id="next-events" className="theme-section-title mdl-typography--display-1-color-contrast">
            Próximos Eventos
          </div>
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
        {/* END next events */}

        {/* START participate */}
        <div className="theme-more-section">
          <div className="theme-customized-section-text">
            <div id="participate" className="theme-section-title mdl-typography--display-1-color-contrast">
              Como Participar?
              </div>
            <p>Participar do Google Developers Group Juiz de Fora <strong>é muito fácil!</strong>
            Se inscreva em nosso <a href="https://www.meetup.com/gdg-juiz-de-fora/">meetup</a>, clicando em "junte-se a este grupo" ou "join", para você ser informado de todos os próximos eventos.
          </p>
            <p>Além de ir aos grupos de estudos e demais eventos, você também pode participar
            se tornando um organizador, basta conversar com os organizadores em qualquer evento,
            demonstrar seu interesse e começar efetivamente a apoiar as ações do grupo.
          </p>
            <br />
            <span style={{ textAlign: 'center' }}>
              <a href="https://github.com/gdgjf/gdgjf.github.io#eventos" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                Sugerir eventos
            </a>
            </span>
          </div>
        </div>
        {/* END  */}

        {/* START About */}
        <div className="theme-more-section">
          <div className="theme-customized-section-text">

            <div id="about-us" className="theme-section-title mdl-typography--display-1-color-contrast">
              Quem somos?
            </div>
            <p>
              O Grupo de Desenvolvedores Google Juiz de Fora é para todos aqueles interessados na tecnologia
              para desenvolvedores do Google. Tudo, de plataformas do theme, do App Engine e do Google Chrome,
              a APIs de produtos, como a API do Google Maps, a API do YouTube e a API do Google Agenda.
            </p>

            <p>
              Podemos ter várias formas, apenas um encontro pequeno para assistir um vídeo mais recente para
              desenvolvedores Google ou grandes encontros com demonstrações e palestras sobre tecnologia,
              eventos como code sprints e hackathons. No entanto, fundamentalmente, os GDGs se destinam
              a conteúdo técnico e desenvolvedores e o público-alvo principal são os desenvolvedores.
          </p>
          </div>
        </div>

        <div className="theme-customized-section-image"></div>
        {/* END */}

        <section className="section--footer mdl-color--white mdl-grid">
          <div className="section__circle-container mdl-cell mdl-cell--2-col mdl-cell--1-col-phone">
            <div className="section__circle-container__circle mdl-color--accent section__circle--big"></div>
          </div>
          <div className="section__text mdl-cell mdl-cell--4-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">
            <h5>Um GDG é </h5>
            <ul>
              <li>Gerenciado por indivíduos entusiastas da comunidade de desenvolvedores</li>
              <li>Um lugar para conhecer as ferramentas e tecnologias do Google para desenvolvedores</li>
              <li>Um lugar para ver o que as empresas e os desenvolvedores locais estão fazendo com essas tecnologias</li>
              <li>Voltado para desenvolvedores e conteúdo técnico educacional</li>
              <li>Aberto ao público com uma associação pública</li>
              <li>Um lugar para conhecer pessoas inteligentes e legais na indústria da tecnologia :)</li>
            </ul>
          </div>
          <div className="section__circle-container mdl-cell mdl-cell--2-col mdl-cell--1-col-phone">
            <div className="section__circle-container__circle mdl-color--accent section__circle--big"></div>
          </div>
          <div className="section__text mdl-cell mdl-cell--4-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">
            <h5>Um GDG não é</h5>
            <ul>
              <li>Gerenciado por uma corporação</li>
              <li>Um lugar para ouvir um argumento de venda clichê a qualquer momento</li>
              <li>Voltado para usuários finais ou conteúdo para consumidores</li>
              <li>Um grupo fechado</li>
            </ul>
          </div>
        </section>

        <div id="members_thumb" style={{ textAlign: 'center' }}></div>

        {/* START Footer */}
        <footer className="mdl-mega-footer">
          <div className="mdl-mega-footer__middle-section">

            <div className="mdl-mega-footer__drop-down-section">
              <input className="mdl-mega-footer__heading-checkbox" type="checkbox" defaultChecked />
              <h1 className="mdl-mega-footer__heading">Nosso GDG</h1>
              <ul className="mdl-mega-footer__link-list">
                <li><a href="https://developers.google.com/groups/chapter/101567513255448590336/">GDG Chapter</a></li>
                <li><a href="https://groups.google.com/forum/#!forum/gdg-juiz-de-fora">Mailing List</a></li>
                <li><a href="https://github.com/gdgjf">GitHub</a></li>
              </ul>
            </div>

            <div className="mdl-mega-footer__drop-down-section">
              <input className="mdl-mega-footer__heading-checkbox" type="checkbox" defaultChecked />
              <h1 className="mdl-mega-footer__heading">Siga-nos!</h1>
              <ul className="mdl-mega-footer__link-list">
                <li><a href="https://plus.google.com//101567513255448590336">Google+</a></li>
                <li><a href="https://www.facebook.com/GoogleDevelopersGroupJuizDeFora">Facebook</a></li>
              </ul>
            </div>

            <div className="mdl-mega-footer__drop-down-section">
              <input className="mdl-mega-footer__heading-checkbox" type="checkbox" defaultChecked />
              <h1 className="mdl-mega-footer__heading">Recursos</h1>
              <ul className="mdl-mega-footer__link-list">
                <li><a href="https://developers.google.com/groups/">Google Developers Group</a></li>
                <li><a href="https://pages.github.com">GitHub Pages</a></li>
                <li><a href="https://getmdl.io">Material Design Lite</a></li>
              </ul>
            </div>

            <div className="mdl-mega-footer__drop-down-section">
              <input className="mdl-mega-footer__heading-checkbox" type="checkbox" defaultChecked />
              <h1 className="mdl-mega-footer__heading">Comunidades</h1>
              <ul className="mdl-mega-footer__link-list">
                <li><a href="./devjf/index.html">DEV JF - Comunidade no Slack</a></li>
              </ul>
            </div>

          </div>
        </footer>
        {/* END Footer */}

        <script src="https://code.jquery.com/jquery-1.11.3.js"></script>
        <script src="https://code.getmdl.io/1.3.0/material.min.js"></script>
        <script src="./scripts.js"></script>
      </div>
    </div>
  </>
)

export default IndexPage
