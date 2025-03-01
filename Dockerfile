ARG NODE_VERSION=22

FROM node:${NODE_VERSION}-alpine as build
WORKDIR /app

ENV NODE_ENV=production

COPY . .

RUN npm install -g pnpm

RUN pnpm install --prod=false --ignore-scripts --frozen-lockfile --prefer-offline
RUN pnpm build

FROM node:${NODE_VERSION}-alpine
WORKDIR /app

ENV NODE_ENV=production

COPY --from=build /app /app

EXPOSE 3000

CMD ["npm", "start"]
