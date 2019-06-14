# Thank Overflow

Dependencies:

- Docker

### Setup

```sh
# install OS-level dependencies (docker)
./setup.sh

# install dependencies
npm install

# start mongodb in a docker container
docker run -d -p 27017-27019:27017-27019 --name mongodb mongo

# start express server
npm run start:dev

# start react app
npm run start:react
```
