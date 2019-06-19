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

# start express server and react client
npm run dev
```

### Resources / Links

Animation:

- [react-particle-effect-button](https://github.com/transitive-bullshit/react-particle-effect-button)
- [easing functions](https://easings.net/en)

Adding custom domain name:

- [tutorial](https://towardsdatascience.com/how-to-deploy-your-website-to-a-custom-domain-8cb23063c1ff)

CircleCI:

- [local CLI](https://circleci.com/docs/2.0/local-cli/) to test a configuration locally.
- [example of configuration with aliases](https://github.com/facebook/Docusaurus/blob/master/.circleci/config.yml)
- [nice q&a about circleci DRY](https://discuss.circleci.com/t/allow-bundling-several-steps-e-g-by-supporting-nested-steps/15339)

SSL Certificates:

- NameCheap [does not support LetsEncrypt](https://webmasters.stackexchange.com/questions/104696/how-to-use-lets-encrypt-free-ssl-on-namecheap-shared-hosting?newreg=c396ddbebaac450d84360e01ba84382e) :(...
- Tried [to generate and add letsencrypt SSL cert to namecheap](https://medium.com/@cubxi/add-wildcard-lets-encrypt-certifications-with-namecheap-6a466df0886f)... but it didn't work...
- Buy SSL certificate from NameCheap :|. [Cheapest two compared](https://www.namecheap.com/security/ssl-certificates/compare/#cert-1=8&cert-2=1). Steps to activate it:
  1. [Generate CSR](https://www.namecheap.com/support/knowledgebase/article.aspx/9446/14/generating-csr-on-apache--opensslmodsslnginx--heroku)
  2. [Buy and activate NameCheap certificate](https://www.namecheap.com/support/knowledgebase/article.aspx/804/67/ssl-certificate-activation-and-installation-for-domains-hosted-on-namecheap-hosting-servers) - steps 2. onwards.  
     Note: Used "DNS" (with CNAME) as the "DCV" method.
