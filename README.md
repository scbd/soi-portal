# soi-portal
Substainable Ocean Initiative Portal

[![Dependency Status](https://david-dm.org/scbd/soi-portal.svg)](https://david-dm.org/scbd/soi-portal) [![Circle CI](https://circleci.com/gh/scbd/soi-portal/tree/master.svg?style=shield)](https://circleci.com/gh/scbd/soi-portal/tree/master)

## Run

Requires Node `^22.23.4 || ^24.22.1 || >=26.12.1` (see `engines` in `package.json`).

```sh
npm install   # postinstall runs `bower install` into app/libs/
npm start     # http://localhost:8000/
npm test      # smoke tests
```

Docker:

```sh
docker build -t soi-portal .
docker run -p 8000:8000 -e BASE_PATH=/ soi-portal
docker run --rm soi-portal npm test
```

| Env var     | Default | Purpose                                                                           |
| ----------- | ------- | --------------------------------------------------------------------------------- |
| `PORT`      | `8000`  | HTTP port                                                                         |
| `BASE_PATH` | `/`     | Mount path; if unset, the `base_url` request header is used (a warning is logged) |
