/**
 * Página que diz quais papeis existem no GDGJF
 * Criado a partir da issue https://github.com/gdgjf/gdgjf.github.io/issues/22
 */
function Papeis() {

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
                        <h2 className="theme-section-title mdl-typography--display-1-color-contrast">
                            Organizador
                        </h2>
                        <p>
                            É responsável pelo GDGJF, define quais conteúdos são relevantes, organiza os eventos e também pode apresentar conteúdos.
                        </p>
                        <p>
                            São profissionais de notável participação na comunidade do GDGJF, desenvolvedores e empreendedores que se destacam por suas iniciativas.
                        </p>
                    </div>
                    <div className="section-text">
                        <h2 className="theme-section-title mdl-typography--display-1-color-contrast">
                            Mentor
                        </h2>
                        <p>
                            Dá orientação e suporte para que os mentorados gerenciem seus aprendizados, escolham bons caminhos e se tornem desenvolvedores ainda melhores.
                        </p>
                        <p>
                            São convidados/escolhidos pelos organizadores e se dedicam a ajudar seus mentorados por um período de X meses.
                        </p>
                    </div>
                    <div className="section-text">
                        <h2 className="theme-section-title mdl-typography--display-1-color-contrast">
                            Embaixador
                        </h2>
                        <p>
                            Representa o GDGJF em uma instituição de ensino, servindo de ponte entre o GDG, a coordenação, professores e estudantes.
                        </p>
                        <p>
                            Auxiliam na organização e realizar um grande evento do GDG por semestre na instituição
                        </p>
                    </div>
                    <div className="section-text">
                        <h2 className="theme-section-title mdl-typography--display-1-color-contrast">
                            Apoiador
                        </h2>
                        <p>
                            Apresenta um conteúdo em um evento do GDG, dá suporte na realização de nossos encontros ou apoia de outras formas tão especiais.
                        </p>
                        <p>
                            Pessoas ou empresas que nos acompanham em nossa jornada, nos oferecendo o que têm de melhor.
                        </p>
                    </div>
                    <div className="section-text">
                        <h2 className="theme-section-title mdl-typography--display-1-color-contrast">
                            Participante
                        </h2>
                        <p>
                            É a pessoa mais importante em nossa comunidade, pois tudo o que é feito tem por objetivo atender ao participante.
                        </p>
                        <p>
                            São programadores, estudantes de áreas relacionadas e entusiastas da tecnologia e desenvolvimento.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Papeis
