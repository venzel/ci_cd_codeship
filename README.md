# CODESHIP CI/CD TEST

[![Codeship Status for venzel/ci-cd-test](https://app.codeship.com/projects/8c32de3d-2888-4226-bac6-4e4ead0fd98d/status?branch=master)](https://app.codeship.com/projects/423021)

## Service de integracao continua

-   **[codeship](https://codeship.com)** - Integracao continua (login github)

## Deploy commands

### Lembrar que o pm2 precisa ser inizalizado uma vez

```
rsync -avz -e "ssh" ~/clone/ root@<ip>:/opt/project-test
ssh root@<ip> 'cd /opt/project-test && yarn build'
ssh root@<ip> 'sudo pm2 stop all'
ssh root@<ip> 'sudo pm2 start /opt/project-test/dist/Server.js'
```
