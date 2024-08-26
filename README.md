

---

# Projeto de Manutenção do Clube Palmeiras



![React](https://img.shields.io/badge/React-17.0.2-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-4.5.4-blue?logo=typescript)
![Next.js](https://img.shields.io/badge/Next.js-12.0.7-black?logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.0.7-06B6D4?logo=tailwind-css)
![Shadcn](https://img.shields.io/badge/Shadcn-1.0.0-orange?logo=react)


## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

## Sobre o Projeto

O objetivo deste projeto é fornecer uma ferramenta eficiente para a gestão de manutenção de ambientes e equipamentos do clube Palmeiras. O sistema permite o cadastro, acompanhamento e gerenciamento de Ordens de Serviço (O.S.), com funcionalidades para visualizar gráficos de desempenho, histórico de manutenções, entre outros recursos.

## Tecnologias Utilizadas

- **React.js**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipos estáticos ao código.
- **Next.js**: Framework React para desenvolvimento de aplicações web com renderização no lado do servidor (SSR).
- **Tailwind CSS**: Framework utilitário de CSS para estilização rápida e responsiva.
- **Shadcn**: Biblioteca de componentes React prontos para usar, construída sobre o sistema de design Shadcn.


## Instalação

Siga os passos abaixo para configurar o ambiente de desenvolvimento do projeto.

### Pré-requisitos

- **Node.js** (versão 14.x ou superior)
- **npm** ou **yarn** como gerenciador de pacotes

### Passos para Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/projeto-palmeiras.git
   cd projeto-palmeiras
   ```

2. **Instale as dependências:**

   Usando npm:

   ```bash
   npm install
   ```

   Ou usando yarn:

   ```bash
   yarn install
   ```

3. **Configuração do Tailwind CSS:**

   Tailwind CSS já está configurado no projeto, mas se precisar de ajustes, edite o arquivo `tailwind.config.js`.

4. **Inicie o servidor de desenvolvimento:**

   Usando npm:

   ```bash
   npm run dev
   ```

   Ou usando yarn:

   ```bash
   yarn dev
   ```

   O projeto estará disponível em `http://localhost:3000`.

## Scripts Disponíveis

- **`dev`**: Inicia o servidor de desenvolvimento.
- **`build`**: Cria uma versão de produção da aplicação.
- **`start`**: Inicia o servidor em modo de produção.
- **`lint`**: Executa o linter para encontrar problemas no código.

## Estrutura de Pastas

A estrutura do projeto está organizada da seguinte forma:

```
├── public
│   └── ...        # Arquivos públicos, como imagens e fontes
├── src
│   ├── components # Componentes reutilizáveis do React
│   ├── pages      # Páginas do Next.js
│   ├── styles     # Estilos globais e configurações do Tailwind CSS
│   ├── utils      # Funções utilitárias
│   └── ...        # Outras pastas e arquivos do projeto
└── ...
```

## Contribuindo

Contribuições são bem-vindas! Se você deseja contribuir, siga os passos abaixo:

1. **Fork** este repositório.
2. Crie uma **branch** para sua feature ou correção de bug (`git checkout -b feature/nome-da-feature`).
3. **Commit** suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. **Push** para a branch (`git push origin feature/nome-da-feature`).
5. Abra um **Pull Request**.

## Licença

Este projeto é licenciado sob a [MIT License](https://opensource.org/licenses/MIT).

---

Esse README cobre as principais informações que um usuário ou colaborador precisaria saber para começar a trabalhar com o projeto. Você pode adaptá-lo conforme necessário para incluir mais detalhes ou ajustar o conteúdo específico ao seu projeto.