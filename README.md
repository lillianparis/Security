# Security

Security with Helmet.js and Chai

## Deployment with Heroku

## How to use Helmet.js

- first `npm install helmet --save`
- In an express app make sure to ` const express = require("express"); const helmet = require("helmet"); const app = express(); app.use(helmet());`
- Helmet is middleware, which is compatable with frameworks like Express. 
- `app.use(helmet());` is the same as
  `app.use(helmet.contentSecurityPolicy());`
  `app.use(helmet.dnsPrefetchControl());`
  `app.use(helmet.expectCt());`
  `app.use(helmet.frameguard());`
  `app.use(helmet.hidePoweredBy());`
  `app.use(helmet.hsts());`
  `app.use(helmet.ieNoOpen());`
  `app.use(helmet.noSniff());`
  `app.use(helmet.permittedCrossDomainPolicies());`
  `app.use(helmet.referrerPolicy());`
 `app.use(helmet.xssFilter());`
