import Section from "@/src/components/Section";
import { Open_Sans } from "next/font/google";
import styles from "./page.module.css";
import Button from "@/src/components/Button";
import Image from "next/image";
import Community from "@/src/components/Community";
import { Metadata } from "next";
import { getBasePublicPath } from "@/src/utils";
import Link from "next/link";

const openSans = Open_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`${openSans.className} ${styles.page}`}>
      <Section variant="gray" className={styles.welcomeSection}>
        <Image
          src={getBasePublicPath() + "/images/logo.svg"}
          alt="Logo"
          width={250}
          height={122}
          className={styles.image}
        />
        <div className={styles.sectionColumn}>
          <h1 className={styles.heading}>GDG Juiz de Fora</h1>
          <h2>
            Boas-vindas à comunidade de desenvolvedores
            <br />
            Participe, aprenda e compartilhe conhecimento!
          </h2>
        </div>
        <Image
          src={getBasePublicPath() + "/images/droid-community.png"}
          alt="Logo"
          width={1171}
          height={187}
          className={styles.imageCommunity}
        />
      </Section>
      <Section id="participate">
        <div className={styles.sectionColumn}>
          <h2>Como Participar?</h2>
          <p>
            Participar do Google Developers Group Juiz de Fora é muito fácil! Se
            inscreva no{" "}
            <a href="https://gdg.community.dev/gdg-juiz-de-fora/">
              GDG Community
            </a>{" "}
            para ser informado de todos os próximos eventos.
          </p>
          <Button href="https://gdg.community.dev/accounts/login/?next=/gdg-juiz-de-fora/">
            Inscreva-se agora
          </Button>
          <p>
            Uma vez inscrito, você será informado de cada novo evento que
            realizarmos, e poderá se inscrever e participar.
          </p>
          <p>
            Não é necessário ser um expert para participar do GDG, pois nossos
            eventos são públicos e com desenvolvedores em níveis distintos,
            desde os que estão começando agora até os mais experientes.
          </p>
        </div>
        <Image
          src={getBasePublicPath() + "/images/participate.png"}
          alt="Como Participar?"
          width={325}
          height={325}
          className={styles.image}
        />
      </Section>
      <Section id="about-us" variant="gray">
        <Image
          src={getBasePublicPath() + "/images/who-we-are.png"}
          alt="Quem somos??"
          width={700}
          height={875}
          className={styles.image}
        />

        <div className={styles.sectionColumn}>
          <h2>Quem somos?</h2>
          <p>
            O Google Developers Group Juiz de Fora é para todos aqueles
            interessados em programação e tecnologias para desenvolvedores.
            Desde de plataformas e tecnologias ligadas ao Google (como Angular,
            Firebase, Google Cloud, Google Chrome), quanto de outros provedores
            (como React, .NET Core, VUE, Next.JS) são abordados em nossos
            eventos.
          </p>
          <p>
            Podemos ter várias formas, apenas um encontro pequeno para assistir
            um vídeo mais recente para desenvolvedores Google ou grandes
            encontros com demonstrações e palestras sobre tecnologia, eventos
            como code sprints e hackathons. No entanto, fundamentalmente, os
            GDGs se destinam a conteúdo técnico e desenvolvedores e o
            público-alvo principal são os desenvolvedores.
          </p>
        </div>
      </Section>
      <Section>
        <div className={styles.sectionColumn}>
          <h2>Um GDG é</h2>
          <ul>
            <li>
              Gerenciado por indivíduos entusiastas da comunidade de
              desenvolvedores
            </li>
            <li>
              Um lugar para conhecer as ferramentas e tecnologias do Google para
              desenvolvedores
            </li>
            <li>
              Um lugar para ver o que as empresas e os desenvolvedores locais
              estão fazendo com essas tecnologias
            </li>
            <li>Voltado para desenvolvedores e conteúdo técnico educacional</li>
            <li>Aberto ao público com uma associação pública</li>
            <li>
              Um lugar para conhecer pessoas inteligentes e legais na indústria
              da tecnologia :)
            </li>
          </ul>
        </div>
        <div className={styles.sectionColumn}>
          <h2>Um GDG não é</h2>
          <ul>
            <li>Gerenciado por uma corporação</li>
            <li>
              Um lugar para ouvir um argumento de venda clichê a qualquer
              momento
            </li>
            <li>Voltado para usuários finais ou conteúdo para consumidores</li>
            <li>Um grupo fechado</li>
          </ul>
        </div>
      </Section>
      <Section variant="gray">
        <Image
          src={getBasePublicPath() + "/images/participate.png"}
          alt="Participar ativamente"
          width={325}
          height={325}
          className={styles.image}
        />
        <div className={styles.sectionColumn}>
          <h2>Participar ativamente</h2>
          <p>
            Além de ir aos grupos de estudos e demais eventos, você também pode
            participar apresentando conteúdos, se tornando um embaixador em sua
            instituição e até como organizador, basta conversar com os
            responsáveis em qualquer evento, demonstrar seu interesse e começar
            efetivamente a apoiar as ações do grupo.
          </p>
          <p>O primeiro passo é participar de nossos eventos.</p>
          <Button href="/participar-ativamente">Conhecer papeis</Button>
        </div>
      </Section>
      <Section>
        <div className={styles.sectionColumn}>
          <h2>Outras comunidades de Juiz de Fora</h2>
          <div className={styles.communitiesContainer}>
            <Community
              alt="Dev JF"
              logo={getBasePublicPath() + "/images/logo-dev-jf.png"}
              description="Slack voltado para desenvolvedores de Juiz de Fora conversarem, falarem de progamação, dos eventos, tirarem suas dúvidas e conhecerem outros devs da cidade."
              href="https://devjf.herokuapp.com/"
            />
            <Community
              alt="Zero40 Ecossistema Empreendedor de Juiz de Fora"
              logo={getBasePublicPath() + "/images/logo-zero40.png"}
              description="É o ecosistema de startups de Juiz de Fora, criado para connectar todas as redes, comunidades, investidores, incubadoras e demais instituições em um único lugar."
              href="https://zero40.com.br/"
            />
          </div>
        </div>
      </Section>
      <Section id="partners" variant="gray">
        <div className={styles.sectionColumn}>
          <h2>Nossos Patrocinadores</h2>
          <p>
            Seja um patrocinador!{" "}
            <Link target="_blank" href="https://wa.me/3288735683">
              Fale conosco
            </Link>{" "}
            para mais informações.
          </p>

          <Button target="_blank" href="https://wa.me/3288735683">
            Seja um patrocinador
          </Button>
        </div>
      </Section>
    </div>
  );
}

export const metadata: Metadata = {
  title: "GDG Juiz de Fora",
  description: "Google Developer Group de Juiz de Fora",
};
