# 🚀 node-express-starter

Starter project for creating ExpressJS for backend enterprise applications with prebuilded development tools for clean and comfortable code development 

:zap: Dotenv support for configuring application via .env file

:zap: Linters for js and css files with code autofixing

:zap: Babel for compiling code from `src` to `dist` directory

:zap: Prebuild logging system for ExpressJS based on Winston


# Installation

Clone repo to current directory

```
git clone https://github.com/itcrap/node-express-starter .
```

Install dependencies

```
npm install
```

And do some magic!

# Features

- Autofix yor code with `ESLint` and `Airbnb style guides` automatically
- Use `log.info("Some message")` or `log.error("Some error message")` for logging application via Winston at predefined in `.env` log format mode

### Building project

```
npm run build
```

### Realtime compiling process and serve by http

```
npm run serve
```

### Debugging application via ExpressJS native debugger

```
npm run debug
```