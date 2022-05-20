Next Level Week Return : trilha impulse
--
<p align="center">
    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">
</p>


<h1 align="center">Trilha Impulse -Next Level Week Return </h1>


Um Projeto desenvolvido na Semana *[Next Level Week \#8](https://nextlevelweek.com)* da *[Rocketseat](https://rocketseat.com.br/)*

[Feedback Widget](https://efficient-sloth-d85.notion.site/Impulse-58f2daadb8e1433894420cbc57571087)

Tecnologias usadas 💻️
---
Consulte  *[tutorial](https://efficient-sloth-d85.notion.site/Instalando-o-Node-js-f00c900c9c584026ba153dbe67dd2c50)* de instalação feito pela Rocketseat.
+ Node JS
+ React JS
+ React Native
+ TypeScript
+ PostgreSQL 

Layout 📌️
---
Link para [layout](https://www.figma.com/community/file/1102912516166573468/Feedback-Widget)

Getting Started! 🚀️
---
Clone o repositório
```console
user@pc:~$ #Clonando o projeto com o git!
user@pc:~$ git clone https://github.com/dosza/nlw-return
```


## Configurando as variáveis de ambiente na aplicação WEB ##

Crie o arquivo .env.local  em aulas/web, nesse arquivo defina a variável *VITE_API_URL="http://localhost:3333"* ou com endereço IP de sua máquina!

```env
VITE_API_URL="http://192.168.1.2:3333"
```

Inicialização da Aplicação Frontend
```console
user@pc:~$ cd aulas/web
user@pc:~$ #configuração de dependencias
user@pc:~$ npm
user@pc:~$ #Inicialização da aplicação web
user@pc:~$ npm run dev
```

Configuração do Backend
---

Para este projeto foi utilizado:
1.	banco de dados PostgreSQL e ORM [Prisma](https://www.prisma.io/)
2.	Servidor de e-mails (simulado): [Mailtrap](https://mailtrap.io)



## Configuração de banco de dados ##

Arquivo de configuração do [prisma:](https://github.com/dosza/nlw-return/blob/mains/server/prisma/schema.prisma)
Nesse arquivo é possível trocar o servidor de banco de dados alterando  o valor de *provider*
Leia a documentação do [Prisma Scheme](https://pris.ly/d/prisma-schema) para saber mais!


```javascript
	datasource db {
		provider = "postgresql"
		url = env("DATABASE_URL")
	}
````

### Configurando as variáveis de ambiente do projeto ###
Crie o arquivo .env em aulas/server

Nesse arquivo deverá conter as variáveis:
+	DATABASE_URL : endereço do servidor de Banco de Dados
+	MAILSERVER_URL: endereço do servidor de E-mail

**Dica:** substitua seu usuário e senha, caso esteja utitilizando maitrap e o postgresql!!

```env
DATABASE_URL="postgresql://user:password@localhost:5432/mydb?schema=db"
MAILSERVER_URL="smtp://user:password@smtp.mailtrap.io:2525"

```

### Executando as Migrations ###
```console
user@pc:~$ cd aulas/server
user@pc:~$ #configuração de dependencias
user@pc:~$ npm
user@pc:~$ #Inicialização da aplicação web
user@pc:~$ npx prisma migrate dev
```
---
Inicializando o servidor Web
```console
user@pc:~$ cd aulas/server
user@pc:~$ #Inicialização da aplicação web
user@pc:~$ npm run dev
```


## API REST ##
Versão: v0.1.0<br/>
Esta API recebe os feedbacks.<br/>Implementa ações com o método POST

### Método POST
1.  Enviar Feeback

http://localhost:3333/feeedbacks

Parâmetros | Tipo| Valor
-----------|-----------|-----------
type 		        | string  | 'BUG'
comment              | string  | 'Não funciona'
screenshot        | string  | 'data:image/png;base64, '



**Observações:** 
1. 	screenshot é opcional!
2.	screenshot deve conter o prefixo: *data:image/png;base64* e ser codificada em Base64.


**Retorno Status:**

+	201 para sucesso
+	500 para erro

Deploy 💻️
---
Link do deploy [Feedback Widget Frontend](https://nlw-return-2e12h73l2-danieloliveirasouza.vercel.app/)<br/>
Link do deploy [Feeback Backend](https://nlw-return-production-ca43.up.railway.app)


Desafios 🏆️
---
