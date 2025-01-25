FROM node:slim
# COPY package.json .
# COPY package-lock.json .
ENV NODE_ENV production
ENV PORT 8080
# RUN npm install --strict-ssl false
COPY ./react ./react
COPY ./shared ./shared
RUN cd ./react && npm run build
CMD ["node", "./react/server.js"]
EXPOSE 8080