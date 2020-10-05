const listOfCommunity: { image: string; body: string; link: string }[] = [
  {
    image: "/images/dev-jf-logo.png",
    body:
      "Slack voltado para desenvolvedores de Juiz de Fora conversarem, falarem de progamação, dos eventos, tirarem suas dúvidas e conhecerem outros devs da cidade.",
    link: "https://devjf.herokuapp.com/",
  },
  {
    image: "/images/gbg-logo.png",
    body:
      "O Google Business Group é uma comunidade voltada para empreendedores e pessoas que compartilham conhecimento sobre tecnologias atuais para o sucesso de seus negócios.",
    link: "http://emjuizdefora.com/gbgjf/o-que-e-o-gbgjf/",
  },
  {
    image: "/images/computadores-logo.png",
    body:
      "Uma organização dedicada em receber doação de computadores usados, renova-los, incluir dezenas conteúdos de diversas áreas, e então presentear jovens de comunidades com estes computadores.",
    link: "https://www.computadoresparatodos.com.br/",
  },
  {
    image: "/images/zero40-logo.png",
    body:
      "É o ecosistema de startups de Juiz de Fora, criado para connectar todas as redes, comunidades, investidores, incubadoras e demais instituições em um único lugar.",
    link: "https://zero40.com.br/",
  },
];

const Comunidade: React.FC = () => {
  return (
    <section id="comunidade" className="section-full-width">
      <div className="main-wrapper">
        <h3>Outras comunidades de Juiz de Fora</h3>
        <div className="community-wrapper">
          {listOfCommunity.map((community, index) => (
            <div
              key={index}
              className="community-card theme-more-section main-wrapper"
            >
              <a href={community.link} target="_blank" rel="noreferrer">
                <img src={community.image} />
              </a>
              <p>{community.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comunidade;
