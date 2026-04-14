FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install && npm cache clean --force 

COPY . .

EXPOSE 3000

CMD ["node", "Index.js"]



##docker run -d -p 8080:8080 -p 50000:50000 -v jenkins_home:/var/jenkins_home -v /var/run/docker.sock:/var/run/docker.sock --user root --name jenkins jenkins/jenkins:lts