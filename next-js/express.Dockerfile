FROM node:slim
COPY package.json .
COPY package-lock.json .
ENV NODE_ENV production
ENV PORT 8080
RUN npm install --strict-ssl false
COPY . .
RUN npm run build
CMD ["node", "server.js"]
EXPOSE 8080