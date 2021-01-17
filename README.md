
# Dashboard de Controle financeiro

Esse projeto foi criado utilizando ReactJS e Typescript. Foi utilizado Styled Components para criar os estilos das Telas.

Você precisa ter instalado em seu computador:

 - Node
 - Npm
 - React

## Clonando o projeto

Primeiramente você deve fazer o clone do projeto em uma pasta de sua preferencia em seu computador.

Você pode estar utilizando o seguinte comando:

`git clone https://github.com/jeffersonrlim4/dashboard.git`

  

## Instalando as dependências 
 
Após o clone do projeto você precisa instalar as dependências do projeto.

Para instalar com o npm utilize:
`npm install`

Para instalar com o Yarn basta utilizar:
`yarn`
  

## Visualizando o Projeto no navegador

Após realizado o passo anterior você deve inicializar o servidor de desenvolvimento. 

Utilize o seguinte comando:
`npm start`
ou
`yarn start`

## Login

No projeto não foi utilizando banco de dados e dados dinâmicos. As credenciais de acesso da aplicação são as seguintes:

`Login: admin@admin.com`
`Senha: 12345678`

## Testes
Para verificar se os testes do projeto estão ok utilize o comando:
`yarn test`

Para verificar os locais onde os testes estão fazendo cobertura de código basta utilizar o comando:
`yarn test:coverage`

No projeto irá criar uma pasta chamada `coverage`.  Dentro dela contém outra pasta chamada `lcov-report` que possui um arquivo chamado `index.html`. Abra esse arquivo para ter uma visão sobre a cobertura de testes no código.