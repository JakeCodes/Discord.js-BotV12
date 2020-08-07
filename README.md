# Jake's Discord Bot
using discord.js

## Prerequisites
> <a href="https://nodejs.org/en/">Node.js & Npm</a>

> Yarn (Do the following command!)
```
$ npm i -g yarn
```

## Starting
in bot.js you will notice the following

```
const token = process.env.TOKEN
```

you will want to make a file called .env in the main directory
and add the following

```
TOKEN = "TOKEN HERE"
```

then do the following command
```
$ yarn add dotenv
```

## Installing & Running
Install all dependencies & start app

```
$ yarn install
$ node bot.js
```

