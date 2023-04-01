#  Projeto Pixels Art

Este projeto consiste em criar uma página web que permite ao usuário desenhar uma arte pixelada escolhendo as cores de uma paleta. O usuário pode alterar o tamanho da grade de pixels e salvar a sua arte em um arquivo local.

<br/>


# Funcionalidades

* A página possui uma paleta de quatro cores 
* A página possui inicialmente um quadro de pixels com 25 pixels de largura e 25 pixels de altura.
* Ao clicar em uma das cores da paleta, a cor selecionada é aplicada ao pincel para pintar os pixels do quadro.
* Ao clicar em um pixel do quadro após selecionar uma cor na paleta, o pixel é preenchido com esta cor.
* A página possui um botão que limpa o quadro preenchendo todos os pixels com branco.
* A página possui um campo de texto onde o usuário pode digitar um número para alterar a largura e altura do quadro de pixels
* A página possui um botão que gera uma cor aleatória para cada elemento da paleta ao ser clicado.

# Tecnologias utilizadas
* HTML
* CSS
* JavaScript

# Instalação do projeto localmente
  
Para instalar o projeto localmente, você precisa ter o Git instalado no seu computador. Depois, siga os seguintes passos:

1. Clone o repositório do GitHub usando o comando 
```bash
git clone git@github.com:gabrielalventura/Projeto-PixelsArt.git 
```
2. Após clonar o repositório entre na pasta do mesmo e instale as dependencias através do comando
```bash
npm install
```

3. Abra o arquivo index.html em um navegador de sua preferência.
4. Divirta-se criando a sua arte pixelada!

# Requisitos desenvolvidos no projeto
1. Adicione à página uma paleta contendo quatro cores distintas
2. Adicione a cor **preta** como a primeira cor da paleta de cores
3. Adicione à página um quadro contendo 25 pixels
4. Faça com que cada elemento do quadro de pixels possua 40 pixels de largura, 40 pixels de altura e seja delimitado por uma borda preta de 1 pixel
5. Defina a cor preta como cor inicial da paleta de cores. Ao carregar a página a cor preta já deve estar selecionada para pintar os pixels
6. Crie uma função para selecionar uma cor na paleta de cores e preencher os pixels no quadro
7. Crie uma função que permita preencher um pixel do quadro com a cor selecionada na paleta de cores
8. Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco
9. Crie um input que permita à pessoa usuária preencher um novo tamanho para o quadro de pixels
10. Crie uma função para gerar as cores aleatoriamente ao carregar a página, com exceção da cor preta

# Informações adicionais
As configurações iniciais do projeto foram realizados pela equipe de instrução da Trybe.

# Agradecimentos
Agradeço à Trybe por me proporcionar esta oportunidade de aprendizado e desenvolvimento de habilidades. Agradeço também aos meus colegas e instrutores que me apoiaram e me ajudaram durante o projeto.

Espero que você tenha gostado do meu README. Se tiver alguma sugestão ou feedback, por favor me envie uma mensagem ou abra uma issue no GitHub. Obrigado! 😊
