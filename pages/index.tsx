import Head from 'next/head'
import Header from '../partials/header'
import BemVindo from '../partials/bem-vindo'
import ProximosEventos from '../partials/proximos-eventos'
import ComoParticipar from '../partials/como-participar'
import QuemSomos from '../partials/quem-somos'
import UmGDGeH from '../partials/um-gdg-e'
import Footer from '../partials/footer'

const IndexPage = () => (
  <>
    <Head>
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
      <Header></Header>
      <div className="theme-content mdl-layout__content">
        <BemVindo></BemVindo>
        <ProximosEventos></ProximosEventos>
        <ComoParticipar></ComoParticipar>
        <QuemSomos></QuemSomos>
        <UmGDGeH></UmGDGeH>
        <div id="members_thumb" style={{ textAlign: 'center' }}></div>
        <Footer></Footer>

        <script src="https://code.jquery.com/jquery-1.11.3.js"></script>
        <script src="https://code.getmdl.io/1.3.0/material.min.js"></script>
        <script src="./scripts.js"></script>
      </div>
    </div>
  </>
)

export default IndexPage
