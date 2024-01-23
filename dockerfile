FROM node
RUN mkdir -p /app
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 5173
CMD [ "npm", "run", "dev", "--", "--host"]