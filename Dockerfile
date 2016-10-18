FROM node:6.2.2-slim
ADD ./api /api
WORKDIR /api
CMD npm start
