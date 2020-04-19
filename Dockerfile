FROM node:12.16.2-stretch
WORKDIR /app
COPY ./package* ./
RUN npm install
COPY . .
RUN npm run build
RUN npm prune --production
CMD [ "npm", "start" ]
