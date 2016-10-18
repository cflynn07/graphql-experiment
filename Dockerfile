FROM node:6.2.2-slim
ADD ./api /api
WORKDIR /api
ENV NODE_PATH=./
CMD npm start
