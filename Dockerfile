FROM node:12.13-alpine
WORKDIR /app
COPY ./package.json ./
RUN npm cache clean --force
RUN npm install
COPY . .
RUN npm run build

CMD ["npm", "run", "start:prod"]