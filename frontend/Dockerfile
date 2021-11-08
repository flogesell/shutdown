# base image
FROM node:14.3.0

# set working directory
WORKDIR /data

# add `/app/node_modules/.bin` to $PATH
ENV PATH /data/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /data/package.json
RUN npm install
COPY . .

# start app
CMD ["npm", "run", "serve"]
