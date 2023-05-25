# Projeto Pokémon - Pokédex
Projeto desenvolvido com a finalidade de consultar e exibir os Pokémons existentes que estão cadastrados no banco vinculado a API Pokémon, disponível em: https://pokeapi.co/docs/v2#pokemon.
O layout e desing foi com referência ao Layout 3 do figma: https://www.figma.com/file/L2M9yaLX0hvKGa0mPwqZhu/Processo-Seletivo?type=design&node-id=1-2&t=yKbuISAnKZrPag86-0 .
A aplicação foi dividida em duas telas: 
  - Tela inicial, onde há um campo de busca e uma secção onde é exibido 10 Pokémons por vez. 
  - Tela de detalhes de um Pokémon, onde é possível visualizar mais informações de um Pokémon pesquisado, e a pesquisa encontrou um resultado, ou um Pokémon selecionado na tela inicial.

A aplicação foi adaptada para ser acessada em dispositivos móveis que tenham largura menor que 992px.
  
# :hammer: Funcionalidades do projeto

- `Busca de um Pokémon`: Ao digitar um nome de um Pokémon valido e apertar o butão "Buscar" será feito o redirecionamento para a página de detalhes daquele Pokémon. Caso não seja encontrado, uma mensagem abaixo do campo será exibida.
O campo de busca funciona com "-" em vez de espaços.
O "match" tem que ser exato para encontrar um resultado, nomes parciais não são aceitos.

- `Exibição de Pokémons`: Há uma secção onde serão exibidos em ordem de Id, 10 Pokémons por vez na versão web, e 5 na versão mobile web. 
Na versão web,ao utilizar os botões de avançar ou voltar ao lado direito superior desta secção, irá exibir os próximos 10, ou voltar 10 Pokémons.
Já na versão mobile, para carregar mais 5 Pokémons, é necessário scrollar a tela, o carregamento é até acabar os Pokémons, mas sempre exibindo de 5 em 5 a cada scrollada.

  Nos cards exibidos é mostrado o Nome, Código, Peso, Altura e a imagem do Pokémon.

- `Traduções`: A aplicação possui um serviço de tradução para inglês. Para trocar de língua é necessário clicar na badeira dos EUA no canto superior direito. Para voltar a língua portuguesa, basta apertar o a bandeira do Brasil.

- `Exibição dos detalhes de um Pokémon`: Ao realizar uma busca com sucesso, ou selecionar um Pokémon da lista da Pokédex, o usuário será direcionado para a página de detalhes daquele Pokémon, onde encontrará informações de Nome, código, Descrição (quando disponível), Peso, Altura, e stats de Vida, Ataque, Velocidade e Defesa. Uma imagem em tamanho maior que do card na página principal, também é exibido.
Nesta mesma página, é possível avançar para o próximo Pokémon, ou voltar ao anterior.

# 📁 Arquitetura
O projeto foi feito com lazy loding, já prevendo mais módulos e funcionabilidades. Assim, a aplicação carrega de forma mais rápida e dinâmica, só trazendo o que é realmente necessário para o usuário.
Temos os seguintes módulos:
- Main-Page: módulo da página principal, onde foi juntado vários componentes.
- Details-Page: módulo da página de detalhes.
- Navigate: módulo com componentes de navegação, como header, tradução, footer.
- Shared: módulo com componentes reutilizáveis, neste caso o card, e o campo de busca.

O projeto possui também uma pasta de assets, onde temos as imagens utilizadas e a pasta "i18n" com os arquivos de traduções.

com estes componentes e módulos separados, tem-se a possibilidade de expandir a aplicação de forma dinâmica, rápida e de fácil entendimento.

# 🔐 Acesso ao projeto
O projeto possui configuração para rodar em Docker, sendo possível copiar a imagem rodando o seguinte comando:
`ADD file:9a4f77dfaba7fd2aa78186e4ef0e7486ad55101cefc1fabbc1b385601bb38920 in / `

# :computer: Tecnologias
- Angular v.15.0;
- node v18.12.1;
- SCSS;
- TypeScript;

libs utilizadas que não são instaladas com o Angular:
- ngx-translate
- ngx-infinite-scroll
