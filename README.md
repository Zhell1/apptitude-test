# apptitude-test

## setup

nvm install 18
nvm use 18
npm install -g @nestjs/cli
npm install @mikro-orm/core @mikro-orm/nestjs @mikro-orm/postgresql
npm install -D @mikro-orm/cli
npm install class-validator class-transformer
npm install zod
npm install @anatine/zod-nestjs


## test


cd my-nest-mikroorm-zod-app && npm run test

## run

### nestjs

cd my-nest-mikroorm-zod-app && npm run start

### orm

npx mikro-orm schema:create

