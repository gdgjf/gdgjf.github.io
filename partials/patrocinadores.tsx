const Patrocinadores: React.FC = () => {
  return (
    <section className="section-full-width">
      <div className="main-wrapper">
        <h3>Nossos Patrocinadores</h3>
        <div className="patrocinador-container">
          <div className="patrocinador-image-container">
            <a href="https://appmasters.io/" target="_blank" rel="noreferrer">
              <img
                className="patrocinador-image-large"
                src="images/appmasters-logo.png"
                alt="appmasters"
              />
            </a>
          </div>

          <div className="patrocinador-image-container">
            <a
              className="patrocinador-image patrocinador-image-medium"
              href="https://reportei.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="images/reportei-logo.png" alt="reportei" />
            </a>
            <a
              className="patrocinador-image patrocinador-image-medium"
              href="https://www.guiando.com.br/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="images/guiando-logo.png" alt="guiando" />
            </a>
          </div>

          <div className="patrocinador-image-container">
            <a
              className="patrocinador-image patrocinador-image-small"
              href="https://www.handcom.com.br/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="images/handcom-logo.png" alt="handcom" />
            </a>
            <a
              className="patrocinador-image patrocinador-image-small"
              href="https://programador.emjuizdefora.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="images/programadores-jf-logo.png"
                alt="programadoresjf"
              />
            </a>
            <a
              className="patrocinador-image patrocinador-image-small"
              href="https://www.robinfood.com.br/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="images/robinfood-logo.png" alt="robinfood" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Patrocinadores;
