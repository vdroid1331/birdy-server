### BIRDY

Birdy is a Twitter like app, and this repository (Birdy Server) contains the backend code for birdy.
Birdy Client is built on:
- NodeJS and Express for the core backend
- GraphQL for our API, which provides a flexible and efficient way to define our data model and query it and REST API for uploading image
- Cloudinary for image uploads
- Redis for query caching on the server side and increasing query speeds
- PostgreSQL for database
- Typescript to maintain code quality and write type-safe code
- axios to consuming REST APIs
- Prisma ORM for our database ORM, which provides a type-safe and easy-to-use interface for interacting with our PostgreSQL database
- Google OAuth for Sign in with Google
- JSON WEB TOKENS for authentication


## Getting Started

- First, clone this repository
- make sure Node.js and NPM is installed.
- install yarn using the command `npm install --global yarn`
- install dependencies using `yarn install`
- add a .env.local file and add the environment variables for Google oauth client id and the backend url for APIs (Check .env.sample for reference).
- run the sever using yarn dev.