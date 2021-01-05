# CODESHIP CI/CD TEST

[![Codeship Status for venzel/ci-cd-test](https://app.codeship.com/projects/8c32de3d-2888-4226-bac6-4e4ead0fd98d/status?branch=master)](https://app.codeship.com/projects/423021)

## Criar uma nova branch

```
$ git checkout -b <branch-name> <origin>
```

## Deploy commands

```
rsync -avz -e "ssh" ~/clone/ root@<ip>:/opt/project-test
ssh root@<ip> 'sudo pm2 stop all'
ssh root@<ip> 'sudo pm2 start /opt/project-test/src/Server.js
```
