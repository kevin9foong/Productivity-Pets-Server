# DockerFile 
# Multi-stage build
# BUILD config
FROM node AS build
WORKDIR /app 
COPY package.json yarn.lock ./
RUN yarn global add rimraf typescript
RUN yarn install --production
COPY . . 
CMD ["yarn", "build"] 

# PROD config
FROM build AS prod
ENV PORT=${PORT}
ENV NODE_ENV=prod
CMD ["yarn", "start"]

# DEV config 
FROM prod AS dev
EXPOSE 3000
ENV NODE_ENV=dev
RUN yarn global add nodemon
RUN yarn install 
CMD ["yarn", "start:dev"]
