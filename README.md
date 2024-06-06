# Trybe

Este repositório contém atividades de aprendizagem desenvolvidas por Tatiane Marinho [linkedin](https://www.linkedin.com/in/marinhotatiane/) enquanto estudava na [Trybe](https://www.betrybe.com/).

_"A Trybe é uma escola do futuro para qualquer pessoa que queira melhorar de vida e construir uma carreira de sucesso em tecnologia, onde a pessoa só paga quando conseguir um bom trabalho."_

O programa conta com mais de 1.500 horas de aulas presenciais e online, aborda introdução ao desenvolvimento de software, front-end, back-end, ciência da computação, engenharia de software, metodologias ágeis e habilidades comportamentais.<br>

<details>
  <summary><strong>O que foi desenvolvido</strong></summary><br />

Neste exercício, foi desenvolvido uma aplicação que realizará requisições para uma API de blogs e exibir os usuários retornados. A aplicação possui duas páginas: uma página inicial que exibe uma lista de usuários e uma página de posts de um usuário específico.
O arquivo `src/types.ts` possui algumas typagens feitas pela Trybe.

</details>

<details>
<summary><strong>Dependências</strong></summary><br />
Para instalar as dependências :  - `npm install`

</details>

<details>
  <summary><strong>Linter</strong></summary><br />
 Foi desenvolvido pela Trybe.

</details>

<details>
<summary><strong>Testes</strong></summary><br />
**Testes desenvolvidos pela Trybe**

Todos os requisitos do projeto foram testados **automaticamente** por meio do [Cypress](https://www.cypress.io/how-it-works/). 

## Observações técnicas

Alguns requisitos seguiram um padrão pré-estabelecido para que os testes automáticos funcionem corretamente. 

</details>

<details>
<summary><strong>Habilidades</strong></summary>

- Utilizar o React Router para criar rotas;
- Criar links de navegação na aplicação com os componentes Link e NavLink;
- Criar rotas, mapeando o caminho da URL com o componente correspondente, via Route;
- Criar rotas dinâmicas e utilizar o hook useParams para extrair parâmetros da URL.

</details>

# Requisitos Obrigatórios

## 1 - Crie as rotas para a aplicação

<details>
  <summary>Crie as primeiras rotas para a aplicação</summary><br />

- A rota `/` deve renderizar o componente `<Users />`
- A rota `/posts/:id` deve renderizar o componente `<Posts />`
- A rota `/about` deve renderizar o componente `<About />`
- Qualquer outra rota deve renderizar o componente `<NotFound />`

Todas páginas já estão criados e podem ser encontrados na pasta `src/pages`.

</details>

<details>
  <summary><strong>O que será verificado</strong></summary><br />

- Se, ao entrar na rota `/` é renderizado apenas o componente `<Users />`;
- Se, ao entrar na rota `/posts/:id` é renderizado apenas o componente `<Posts />`.
- Se, ao entrar na rota `/about` é renderizado apenas o componente `<About />`.
- Se, ao entrar em uma rota inexistente é renderizado apenas o componente `<NotFound />`.

</details><br>

## 2 - Crie dois `NavLink` dentro do componente `Header`

<details>
  <summary>Crie dois <code>NavLink</code> para as rotas de <code>Home</code> e <code>About</code> </summary><br />

  O componente `Header` já está criado e pode ser encontrado na pasta `src/components`.

  - O primeiro deverá conter o texto `Home` e redirecionar para a rota `/`;
  - O segundo deverá conter o texto `About` e redirecionar para a rota `/about`.

</details>

<details>
  <summary><strong>O que será verificado</strong></summary><br />

- Se o componente `<Header />` possui dois links, um para a rota `/` e outro para a rota `/about`.

</details><br>

## 3 - Crie um link para a página de posts de um usuário

<details>
  <summary>Dentro do componente <code>User</code>, crie um link para a página de posts de um usuário</summary><br />

- O link deve conter o texto `Posts`;
- O link deve redirecionar para a rota `/posts/:id`, onde `:id` é o id do usuário.

</details>

<details>
  <summary><strong>O que será verificado</strong></summary><br />

- Se dentro do componente `<User />` existe um link para a página de posts de um usuário.

</details><br>

## 4 - Exiba os posts de um usuário

<details>
  <summary>Exiba os posts de apenas um usuário na página de posts</summary><br />

  Utilize o array de posts que está importado no componente `<Posts />` para exibir os posts de um usuário.
  Os posts seguem está mesma estrutura:

  ```js
  [
    {
      id: 10,
      title: 'They rushed out the door.',
      body: "They rushed out the door, grabbing anything and everything they could think of they might need. There was no time to double-check to make sure they weren't leaving something important behind. Everything was thrown into the car and they sped off. Thirty minutes later they were safe and that was when it dawned on them that they had forgotten the most important thing of all.",
      userId: 1,
    },
  // ...
  ]
  ```

  Você deve filtrar os posts de acordo com o `id` do usuário que está na rota e a chave `userId` dos posts.

  <details>
    <summary><strong>De olho na dica 👀</strong></summary><br />

  - Lembra que a rota `/posts/:id` é uma rota dinâmica? Portanto podemos acessar o valor de `:id` utilizando um certo hook 👀.

  </details>

</details>

<details>
  <summary><strong>O que será verificado</strong></summary><br />

- Se apenas os posts de um usuário são exibidos na página de posts.

</details><br>

<br>

*Exercicíos criado pela [Trybe](htpps:www.betrybe.com/).

<br>
