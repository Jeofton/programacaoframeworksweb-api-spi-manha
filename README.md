# Repositório dos Códigos Apresentados em Sala de Aula da Turma de Programação com Frameworks Web

### Este repositório tem por objetivo compartilhar os códigos da api desenvolvida com as seguintes tecnologias

* Nodejs;
* Typescript;
* MongoDB;
* Express;
* Jsonwebtoken: Biblioteca apra criar e verificar JWTs;
* bccryptjs: Biblioteca para criptografar senhas antes de armazena-las;

### Os alunos poderão utilizar este repositório como uma espécie de template para elaboração de um projeto próprio ou como instrumento de auxílio à elaboração do projeto prático da disciplina.

Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned

## Aula 05 - Autenticação e Autorização

1. Instalar dependências:

_npm install jsonwebtoken bcryptjs_
_npm install @types/jsonwebtoken @types/bcryptjs --save-dev_

2. Gerar JWT_SECRET e armazenar no .env

Pode ser utilizado o seguinte comando:

    `node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"`

3. Criar usuario e senha

4. Adicionar um model específico:

#### Implementamos primeiro a interface (src/models/interface/IUser.ts)

 1. models -> interface -> IUser.ts
    * nome;
    * email;
    * password;

#### Implementamos o arquivo de modelo (src/models/admin/userModel.ts)

models -> models -> admin -> UserModel.ts

5. Criando as Controller de Autenticação:

#### Implementamos um método para regitro e outro para login (src/controllers/admin/authController.ts)

Aqui é importante que as dependências bcryptjs e jsonwebtoken estejam instaladas.

6. Configurando as rotas

#### Implementamos as rotas para registro e login (src/routes/admin/authRoutes.ts)

### Agora que temos a autenticação da api implementada, devemos implementar a proteção de rotas, permitindo que apenas sejam acessadas se o usuário tiver autenticado.

7. Crie um novo diretório para armazenar os arquivos de middleware

1. Adicione um arquivo de middleware

#### Implemente o middleware de proteção de rotas (src/middlewares/authMiddleware.ts)

1. Após implementar o **authMiddleware.ts**, devemos configurar as rotas para login e register;
2. Estas rotas são configuradas no diretório routes **(src/routes/admin/authRoutes.ts)**;

