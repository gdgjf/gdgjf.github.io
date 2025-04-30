import styles from "./index.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div>
          <h1 className={styles.footerHeading}>Nosso GDG</h1>
          <ul className="mdl-mega-footer__link-list">
            <li>
              <a href="https://gdg.community.dev/gdg-juiz-de-fora/">
                GDG Chapter
              </a>
            </li>
            <li>
              <a href="https://github.com/gdgjf">GitHub</a>
            </li>
          </ul>
        </div>

        <div className="mdl-mega-footer__drop-down-section">
          <h1 className={styles.footerHeading}>Siga-nos!</h1>
          <ul className="mdl-mega-footer__link-list">
            <li>
              <a href="https://www.instagram.com/gdg.juizdefora/">Instagram</a>
            </li>
            <li>
              <a href="https://www.facebook.com/GoogleDevelopersGroupJuizDeFora">
                Facebook
              </a>
            </li>
          </ul>
        </div>

        <div className="mdl-mega-footer__drop-down-section">
          <h1 className={styles.footerHeading}>Recursos</h1>
          <ul className="mdl-mega-footer__link-list">
            <li>
              <a href="https://developers.google.com/groups/">
                Google Developers Group
              </a>
            </li>
            <li>
              <a href="https://pages.github.com">GitHub Pages</a>
            </li>
          </ul>
        </div>

        <div className="mdl-mega-footer__drop-down-section">
          <h1 className={styles.footerHeading}>Comunidades</h1>
          <ul className="mdl-mega-footer__link-list">
            <li>
              <a href="https://devjf.herokuapp.com/">
                DEV JF - Comunidade no Slack
              </a>
            </li>
            <li>
              <a href="http://emjuizdefora.com/gbgjf/o-que-e-o-gbgjf/">
                GBG Juiz de Fora
              </a>
            </li>
            <li>
              <a href="https://zero40.com.br/">Zero40</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
