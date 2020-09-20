/**
 * Página que diz quais papeis existem no GDGJF
 * Criado a partir da issue https://github.com/gdgjf/gdgjf.github.io/issues/22
 */
function Mentoria() {

    /**
     * Validar a possibilidade de apresentar estas informações juntamente com as fotos das pessoas (issue #24)

     - [ ] Implementar interface para apresentar os 5 papeis. Pode ser exibido 4 em colunas, e o último (participante) ficar numa linha com mais destaque, com uma foto talvez. Ou, ser 3 linhas, 2 com 2 colunas e a última com uma coluna apenas. Seja criativo! 😁
     ![Untitled_Diagram_drawio_-_diagrams_net](https://user-images.githubusercontent.com/2242549/85176885-3df84f80-b251-11ea-9ad5-978d4bad6460.png)
     - [ ] Apresentar de forma bem distribuída os papeis abaixo, com suas descrições e detalhes (o que vem antes do :  não precisa ser exibido)

     *
     */
    return (
        <div>
            <div id="participate" className="section-como-participar section-full-width">
                <div className="main-wrapper">
                    <div className="section-text">
                        <h1>
                            Mentoria do GDGJF
                        </h1>
                        <small>Projeto piloto</small>
                        <h2 className="theme-section-title mdl-typography--display-1-color-contrast">
                            Quer levar sua carreira para outro nível?
                        </h2>
                        <p>
                            O GDG JF está aqui para ajudar você a crescer em sua carreira e, pensando nisso, criamos o programa de Mentoria do GDGJF.
                        </p>
                        <p>
                            Nosso objetivo é conectar mentores que têm algo a ensinar com devs ávidos por conhecimento.Será uma grande oportunidade para fazer networking, aprender novas habilidades e também acelerar e masterizar aquilo que você já vem estudando.
                        </p>
                        <p>
                            Tudo isso é gratuito e todos podem participar! 💪
                        </p>
                        <h2 className="theme-section-title mdl-typography--display-1-color-contrast" style={{marginTop: 50}}>
                            Participe da Mentoria do GDG JF!
                        </h2>
                        <p>Seja seu objetivo crescer na carreira, aprender uma nova linguagem ou ganhar prática em um framework, um mentor poderá usar toda sua experiência pra de levar no caminho do sucesso.</p>
                        <p>
                            Iremos receber todas as inscrições e fazer o "match", buscando um mentor que possa te ajudar a alcançar seus objetivos.
                        </p>
                        <p>Ha! Este primeiro grupo de mentoria será um piloto, e em pouco mais de dois meses abriremos um novo grupo, então se não der pra você participar desta vez, poderá participar logo mais!</p>
                        <p className="wrapper-sugerir-eventos">
                            <a href="https://forms.gle/WLGjwLf5v3sN5ynWA" className="btn-primary">
                                Quero receber mentoria
                            </a>
                        </p>

                        <h2 className="theme-section-title mdl-typography--display-1-color-contrast" style={{marginTop: 50}}>
                            Seja um mentor do GDGJF
                        </h2>
                        <p>Mentores são profissionais referência no mercado, ou pessoas que já venceram muitos desafios e sentem que já podem ajudar os que estão chegando agora.</p>
                        <p className="wrapper-sugerir-eventos">
                            <a href="https://forms.gle/SNStuvJk4k33qnow6" className="btn-primary">
                                Quero ser um mentor
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mentoria
