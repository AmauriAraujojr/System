FROM node:18.15.0

WORKDIR /app

COPY . .

RUN npm install

COPY start.sh /app/start.sh

RUN chmod +x /app/start.sh

EXPOSE 3000

CMD ["./start.sh"]

# CMD ["npm", "run", "dev"]


