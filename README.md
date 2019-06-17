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
# when starting container for the first time
docker run -d -p 27017-27019:27017-27019 --name mongodb mongo
# when starting container subsequently
docker start mongodb

# start express server
npm run start:dev

# start react app
npm run start:react
```


### Resources / Links

Animation:
- [react-particle-effect-button](https://github.com/transitive-bullshit/react-particle-effect-button)
- [easing functions](https://easings.net/en)

Adding custom domain name:
- [tutorial](https://towardsdatascience.com/how-to-deploy-your-website-to-a-custom-domain-8cb23063c1ff)
- [how to generate and add letsencrypt SSL cert to namecheap](https://medium.com/@cubxi/add-wildcard-lets-encrypt-certifications-with-namecheap-6a466df0886f)

