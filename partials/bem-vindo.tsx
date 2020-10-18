function BemVindo() {
  return (
    <section className="section-welcome">
      <div className="welcome-wrapper">
        <div className="symbol">
          <img src="images/simbolo.svg" alt="Símbolo GDG" />
        </div>
        <div className="text">
          <h1 className="title">GDG Juiz de Fora</h1>
          <h2 className="message-welcome">
            Bem-vindo(a) a comunidade de desenvolvedores <br />
            Participe, aprenda e compartilhe conhecimento!
          </h2>
        </div>
      </div>
      <div className="wrapper-img">
        <img className="community-android" src="images/img-android.png" alt="Personagens do robozinho do android que representa as diversas culturas" />
      </div>
    </section>
  );
}

export default BemVindo;
