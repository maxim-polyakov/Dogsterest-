FROM node:18-alpine

#Create a app directory
WORKDIR /app

#Install app dependencies
COPY package*.json ./

#Run npm install
RUN npm install

#Bundle app souce
COPY . .

EXPOSE 5026

CMD [ "npm", "start" ]