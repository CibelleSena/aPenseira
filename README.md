<h1 align="center">EM CONSTRUÇÃO!</h1>

<h1 align="center">A Penseira</h1>

<h1 align="center">
  <img src="src/assets/to_readme/harry-potter-dumbledore.gif" width="500">
<p align="center"><p></h1>


## *Apresentação*
Criei essa API a partir de um desejo da minha mãe, pois foi ela quem me ensinou a anotar e dar estrelas (notas) para cada livro e filme lido/assistido.
Eu anoto desde os meus 15 anos em uma agenda antiga, e ela da mesma forma anota desde a adolescência dela (hoje ela tem 56 anos).


A ideia de chama-la de "A Penseira" partiu do meu amor por Harry Potter e seu mundo, e a Penseira de Dumbledore é o local onde ele armazena seus pensamentos, e nesta minha API irei armazenar os dados de Filmes e Livros ja assistidos ou lidos com a possibilidade de dar notas e deixar meu pensamento sobre cada um.

<h1 align="center">
  <img src="src/assets/to_readme/harry-potter-world-illustration.jpg" alt="A Penseira" width="300">
<p align="center"><p>
</h1>

#### Irei melhorar esta API ao ponto de compartilhar com outras pessoas, para que usem como indicação de livros/filmes. E que também possam ter o hábito de anotar e compartilhar pois adoro esse tipo de troca.

<br> 

## *Sumário*
- [Apresentação](#apresentação)
- [Funcionalidades](#funcionalidades)
- [Tecnologias, dependências e bibliotecas](#tecnologias-dependências-e-bibliotecas)
- [Arquitetura](#arquitetura)
- [Preparando o ambiente para o projeto](#instruções-para-instalações-no-projeto)
- [Rotas](#rotas)
[Preparando o ambiente para o autenticação](#instruções-para-autenticações-no-projeto)
- [Referências](#referências)

<br> 

## *Funcionalidades*

- [ ] Cadastro de usuário
- [ ] Cadastro de Filmes assistidos
- [ ] Cadastro de Filmes para assistir
- [ ] Cadastro de Livros lidos
- [ ] Cadastro de Livros para ler
- [ ] Alterar dados de Livros ou filmes
- [ ] Deletar de Livros ou filmes da lista não assistidos / lidos
- [ ] Deletar cadastro através do ID

<br>

## *Tecnologias e Dependências*

| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação. |
| `node.js`    | Ambiente de execução do javascript.|
| `express`    | Framework NodeJS. |
| `mongoose`   | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections.|
| `nodemon`    | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente.|
| `npm`| Gerenciador de pacotes.|
| `MongoDb`    | Banco de dados não relacional orietado a documentos.|
| `Mongo Atlas`| Interface gráfica para verificar se os dados foram persistidos.|
| `Postman` | Interface gráfica para realizar os testes.|
| `jsonwebtoken `| Dependência que implementa o protocolo JSON Web Token.|
| `bcrypt`| Bcryptjs é uma biblioteca para encriptação de dados. Neste caso, o dado a ser criptografado é o password.|
| `dotenv`| Dependência  para gerenciar facilmente variáveis de ambiente, não é obrigatório para JWT, mas uma boa prática para configurações em geral.|
| `swagger`| Gera a documentação.|
| `Render`| Hospeda a documentação.|

Link para a documentação:

📝 [Swagger](http://localhost:1313/minha-rota-de-documentacao/#/default)

📝 [Render](https://a-penseira.onrender.com)

<br>

## *Arquitetura*

EM CONSTRUÇÃO!!

<br>

## *Preparando o Ambiente Para o Projeto*

📌 Para executar este projeto, você deverá ter instalado o Node.js e as dependências do npm.
Seguiremos a ordem de instalações no terminal:
- Clone o projeto através do comando:
        `$git clone https://github.com/CibelleSena/`
- `npm init -y`
- `npm install `
- `npm install express `
- `npm install nodemon `
- `npm install mongoose `
- `npm i --save-dev dotenv`
- `npm install jsonwebtoken --save`
- `npm install bcrypt --save`
- `npm install --save-exact jest@28.1.0 --save-dev`
- Inicialize com o comando `npm start` para que você possa executar os testes localmente.
</br>


## *Rotas*

📌 Você pode testar as rotas  através da ferramenta Postman. 

| método HTTP  |    EndPoint     |       Descrição      | 
| ------ | -------------   | ---------------------------| 
| GET    | `/usuarios`         |  Listar todos usuarios cadastrados      |
| GET    | `/livros`         |  Listar todos livros      |     
| GET    | `/filmes` |  Listar todos os filmes         |       
| GET    | `/all`  |  Listar todos os livros e filmes cadastrados  |
| GET    | `/nome`    |  Acessar livro ou filme pelo nome | 
| GET    | `/nota`  |  Listar todos os livros e filmes pela nota recebida  |
| GET    | `/autor`  |  Listar todos os livros e filmes pelo nome do Autor  | 
| GET    | `/minhalista`  |  Listar todos os livros e filmes não assistidos ou lidos |
| POST   | `/addusuario`    |  Adicionar um novo usuario     |
| POST   | `/addlivro`    |  Adicionar um novo livro lido     |
| POST   | `/addfilme`     |  Adicionar um novo filme assistido |
| POST   | `/minhaLista/add`|  Adicionar um novo livro ou filme na lista de não assistidos ou lidos | 
| PATCH  | `/alterar/:id`    |  Alterar dados pelo ID |
| DELETE | `/filmes/:id`     |  Deverá deletar um filme pelo ID    | 
| DELETE | `/livros/:id`     |  Deverá deletar um livro pelo ID    | 
| DELETE  | `/minhalista/:id`    |  Deleta cadastro de filme/livro da lista de não lidos ou não vistos pelo ID |
 
<br>

### *Preparando o Ambiente Para Autenticação*

📌 Criar arquivo .env (adicionar no .gitignore) e usar o arquivo .env.example como modelo, colocando assim os seus dados.
Seguiremos a ordem de instalações no terminal:
- Inicialize o comando de instalação `npm i express cors` para instalar o cors.
- Inicialize o comando de instalação `npm i --save-dev dotenv` para instalar dontenv.
- Inicialize com o comando `npm start` para que você possa executar.
</br>

<br>

## ✅ **Quem sou eu**

Sou a Cibelle , tenho 36 anos, sou mineirinha de BH, mãe do Jorge de 3 anos. Conheci e me apaixonei por Backend atraves de um amigo Dev Senior. Comecei fazendo cursos em plataformas gratuitas na internet, e em um patrocinado conheci a {Reprograma}, e cá estou eu apresentando meu projeto final depois de 18 semanas de muita dedicação.

*Meus contatos*
- [linkedin](https://www.linkedin.com/in/cibellesena/)
- [github](https://github.com/CibelleSena)








