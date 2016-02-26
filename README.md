# keystone-test-project

A KeystoneJS Project with various configurations for development and testing purposes

**Note: This project requires Node.js v4.x**


# How to run Plate (TWReporter's fork of KeystoneJS CMS)

```
git clone https://github.com/twreporter/keystone.git
cd keystone
npm link
cd ..
git clone https://github.com/twreporter/keystone-test-project
cd keystone-test-project
npm install
npm link keystone
KEYSTONE_DEV=true npm start
```
