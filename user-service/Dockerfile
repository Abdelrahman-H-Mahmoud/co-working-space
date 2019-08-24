FROM node:10.14

RUN mkdir /user
WORKDIR /user

COPY package.json /user
COPY package-lock.json /user


RUN npm install -g nodemon
RUN npm install

# Copy source code
COPY . /user

# Expose API port to the outside
EXPOSE 3000

# Launch application
CMD nodemon index.js