# Plate - CMS of 報導者 The Reporter

This repo is used as the CMS of [報導者 The Reporter](https://www.twreporter.org).

`Plate` uses [twreporter-keystone](https://github.com/twreporter/keystone) which is based on [keystone](https://github.com/twreporter/keystone).


# Install Dependencies
```
yarn install
```

# Development
```
make dev
```

# Production
```
make start
```

# Re-Configuration
```
make build-config
```

## Configuration 
- mongo:
  - mongodb url to connect to
  - default value: 'mongodb://localhost:27017/plate'
- auth: 
  - check requests authorization if true 
  - default value: true
- cookie secret
  - to sign cookies
  - default value: 'unset-cookie-secret'
- gcs project id
  - google cloud platform project id
  - default value: ''
- gcs bucket
  - google cloud platform storage bucket
  - default value: ''
