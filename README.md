# Projeto Pokémon TCG

Este projeto é uma aplicação web que permite aos usuários visualizar e pesquisar cartas de Pokémon TCG. A aplicação é construída utilizando React e Next.js, e consome a API do Pokémon TCG para obter os dados das cartas.

## Funcionalidades

- **Página Inicial**: Apresenta um carrossel de cartas de Pokémon, também permite aos usuários pesquisar cartas de Pokémon pelo nome.
- **Pacote de Cartas**: Mostra um pacote de 6 cartas aleatórias.
- **Visualização de Cartas**: Exibe todas as cartas disponíveis.

## Estrutura do Projeto

- **/src/app/Carrossel/page.jsx**: Componente que exibe um carrossel de cartas de Pokémon.
- **/src/app/Pesquisa/page.jsx**: Componente que permite pesquisar cartas de Pokémon pelo nome.
- **/src/app/Pacote/page.jsx**: Componente que exibe um pacote de 6 cartas aleatórias.
- **/src/app/Cartas/page.jsx**: Componente que exibe todas as cartas disponíveis.
- **/src/API/fetchCards.js**: Função que consome a API do Pokémon TCG para obter os dados das cartas.

## Observações para o projeto

- as cores escolhidas durante o projeto foram de uma paleta de cor que eu achei na internet, os svg também foram pegos da internet

- A base do carrossel foi pega no flowbite, tive que mapear as cartas com o atual, o anterior e o próximo do indíce do array, para conseguir deixar ele mostrando mais de uma carta (sei que poderia ter deixado estático)

- A seção do pacote eu peguei a base no w3schools, a parte do math.random() e o slice, mas eles apenas geram os ids aleatórios, e jogam pra um array copiado do arrei que veio fetch

- O componente da pesquisa, foi pega a base do workshop de quarta-feira 26/02, que é apenas pra filtrar, além disso, a pesquisa só mostra quando tem mais de 0 digitos no imput

- O componente de cartas é apenas um map do array recebido da api, usando o id como chave

- Tentei o maximo para deixar todas as variáveis autoexplicativas
