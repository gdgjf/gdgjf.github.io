import { ReactNode } from "react";
import styles from "./page.module.css";

const Role = ({ title, children }: { title: string; children: ReactNode }) => (
  <div className={styles.roleContainer}>
    <h2>{title}</h2>
    {children}
  </div>
);
export default function Page() {
  return (
    <div className={styles.page}>
      <Role title="Organizador">
        <p>
          É responsável pelo GDGJF, define quais conteúdos são relevantes,
          organiza os eventos e também pode apresentar conteúdos.
        </p>
        <p>
          São profissionais de notável participação na comunidade do GDGJF,
          desenvolvedores e empreendedores que se destacam por suas iniciativas.
        </p>
      </Role>
      <Role title="Apoiador">
        <p>
          Apresenta um conteúdo em um evento do GDG, dá suporte na realização de
          nossos encontros ou apoia de outras formas tão especiais.
        </p>
        <p>
          Pessoas ou empresas que nos acompanham em nossa jornada, nos
          oferecendo o que têm de melhor.
        </p>
      </Role>
      <Role title="Participante">
        <p>
          É a pessoa mais importante em nossa comunidade, pois tudo o que é
          feito tem por objetivo atender ao participante.
        </p>
        <p>
          São programadores, estudantes de áreas relacionadas e entusiastas da
          tecnologia e desenvolvimento.
        </p>
      </Role>
    </div>
  );
}
