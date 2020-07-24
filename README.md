# Google Developers Group Juiz de Fora

### Site
Agora estamos utilizando a GitHub Pages como se fosse o [site do GDGJF](https://gdgjf.github.io).
Você também pode contribuir para melhorias no site, lembrando que atualmente estamos usando:
 - [Next](https://nextjs.org/) (Está bem no início da migração)
 - Tudo o que era usando antes ainda está lá, até o jQuery (mas o objetivo agora é atualizar para otimizar o que temos e para deixar a manutenção melhor)
    - [Material Design Lite](https://getmdl.io/index.html) para o visual;
    - [jQuery](http://jquery.com/);
    - Um [template](https://getmdl.io/templates/android-dot-com/index.html) inicial;
 
 \* No momento o deploy é feito automaticamente quando um código é submetido para a branch `develop`.

#### Para rodar o projeto
 - Faça o clone `git@github.com:gdgjf/gdgjf.github.io.git`
 - Instale as dependências com `npm install`
 - Rode `npm run dev` e acesse `http://localhost:3000`

## Eventos
Orientados pelo Google Groups, todos os GDGs estão criando os eventos no [Meetup](https://www.meetup.com) e agora nós também! Então junte-se a nossa comunidade do [Meetup GDGJF](https://www.meetup.com/Google-Developers-Group-Juiz-de-Fora)

### Propostas de evento
Gostaria de propor um evento? Basta criar uma [issue](https://github.com/gdgjf/gdgjf.github.io/issues) seguindo:

- **Título da issue** é o nome da Talk
- Marque somente o label: **Proposta de evento**
- Corpo da issue, use o template:
```markdown
## [Nome da talk aqui]

## Descrição
Aqui vai a descrição da proposta da sua talk !

### Palestrante(s)
- Nome aqui
- Outro aqui

### Nível do conteúdo
- Iniciante | Intermediário | Avançado

### Outras considerações iniciais
Opcional  
```
