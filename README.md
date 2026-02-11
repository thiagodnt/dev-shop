# Nome do Projeto

Projeto desenvolvido com fins de um estudo, como parte de um curso de
**React + TypeScript**, utilizando **Vite**.

O código segue inicialmente a implementação apresentada pelo instrutor
durante as aulas e está sendo utilizado como base para **prática,
experimentação e adaptações próprias**, com o objetivo de consolidar
os conceitos aprendidos.

## Objetivo do Projeto

- Praticar React com TypeScript
- Entender a estrutura de um projeto utilizando Vite
- Aplicar conceitos apresentados no curso
- Realizar ajustes, melhorias e variações sobre o código base

## Funcionalidades

Aplicação frontend desenvolvida para fins educacionais, simulando um sistema simples de e-commerce, com funcionalidades de listagem de produtos, gerenciamento de carrinho e consumo de uma API de produtos.

- Controle de estado e renderização com React
- Implementação de renderização condicional
- Tipagem de dados com TypeScript
- Organização e componentização da aplicação
- Criação de roteamento para navegação entre páginas da aplicação
- Consumo de API de produtos
- Context API para gerenciamento de estado global

As funcionalidades foram implementadas com base nos exemplos apresentados
durante o curso, com adaptações realizadas para fins de prática e aprendizado.

## API Fake (json-server)

Este projeto utiliza uma API fake criada com **json-server**, responsavel por simular o backend de produtos consumido pela aplicacao frontend.

A API e baseada em um arquivo `db.json`.

O sistema depende dessa API em execucao para funcionar corretamente. Sem o json-server rodando, nao sera possivel listar produtos ou utilizar o carrinho.

### Estrutura da API

O arquivo `db.json` contem os dados utilizados pela aplicacao, simulando endpoints de produtos consumidos pelo sistema.

### Como executar a API fake

```bash
npm install -g json-server
json-server --watch db.json --port 3000
```

Certifique-se de que a porta utilizada pelo json-server corresponde a configurada no projeto.

## Tecnologias Utilizadas

- React
- TypeScript
- Vite
- HTML5
- CSS3
- Tailwind CSS

## Observações Importantes

- Este repositório **não representa um produto final**
- O foco do projeto é **aprendizado e prática**
- O código pode sofrer alterações frequentes conforme a evolução no curso

## Como executar o projeto

```bash
npm install
npm run dev
```
