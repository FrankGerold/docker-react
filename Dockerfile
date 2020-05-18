FROM node:alpine

WORKDIR '/app'

COPY package.json .
RUN npm install

COPY . .

# RUN npm run build
RUN yarn build

FROM nginx

EXPOSE 80

COPY --from=builder /app/build /usr/share/nginx/html