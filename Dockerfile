FROM node:slim
COPY package.json .
COPY package-lock.json .
ENV NODE_ENV production
ENV PORT 5000
RUN npm install --strict-ssl false --registry https://artifactory.artifacts.avp.ru/artifactory/api/npm/common-public/
COPY . .
RUN npm run build
CMD ["node", "server.js"]
EXPOSE 5000