# JEST

![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-29.7-C21325?logo=jest&logoColor=white)
![Status](https://img.shields.io/badge/status-estudo-informational)
![License](https://img.shields.io/badge/license-ISC-blue)

Projeto de estudo de testes com Jest, desenvolvido durante aulas da Rocketseat.
O objetivo e praticar testes unitarios e testes de integracao em uma API HTTP simples com Node.js + TypeScript.

## Funcionalidades

- Testes unitarios para funcao `sum`.
- Testes de integracao HTTP usando `supertest`.
- Servidor HTTP simples com retorno em JSON.
- Ambiente de testes configurado com `ts-jest`.
- Modo watch para desenvolvimento de testes.

## Stack de tecnologias

| Tecnologia | Versao | Papel no projeto |
| --- | --- | --- |
| Node.js | [a confirmar] | Runtime da aplicacao |
| TypeScript | [a confirmar] | Linguagem principal |
| Jest | 29.7.0 | Framework de testes |
| ts-jest | 29.2.5 | Integracao Jest + TypeScript |
| supertest | 7.0.0 | Testes de requisicao HTTP |
| tsx | 4.19.1 | Execucao do servidor em modo dev |

## Pre-requisitos

- Node.js instalado (recomendado LTS).
- npm (ja incluso com Node.js).

## Instalacao e execucao

1. Clone o repositorio:

```bash
git clone <url-do-repositorio>
cd JEST
```

2. Instale as dependencias:

```bash
npm install
```

3. Rode o servidor em desenvolvimento:

```bash
npm run dev
```

4. Execute os testes:

```bash
npm test
```

5. Execute os testes em modo watch:

```bash
npm run test:dev
```

## Uso

Com o servidor em execucao, faca uma requisicao GET:

```bash
curl http://localhost:3000/products
```

Resposta esperada (exemplo):

```json
[
  { "name": "Notebook", "price": 3500 },
  { "name": "Smartphone", "price": 2500 },
  { "name": "Monitor", "price": 800 },
  { "name": "Teclado", "price": 120 },
  { "name": "Mouse", "price": 80 }
]
```

## Estrutura do projeto

```text
.
|-- src/
|   |-- app.ts
|   |-- server.ts
|   |-- sum.ts
|   `-- tests/
|       |-- products.test.ts
|       `-- sum.test.ts
|-- jest.config.ts
|-- package.json
`-- tsconfig.json
```

## Licenca

Este projeto usa a licenca ISC.
