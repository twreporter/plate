# Plate - CMS of 報導者 The Reporter

This repo is used as the CMS of [報導者 The Reporter](https://www.twreporter.org).

`Plate` uses [twreporter-keystone](https://github.com/twreporter/keystone) which is based on [keystone](https://github.com/twreporter/keystone).


# How to Use Plate ?
## Prerequisite
Node version: **node@4.x.x**

Install [gm](https://github.com/aheckmann/gm.git) first.
We will need that to resize images.

## Clone the repo
```
cd $WORKSPACE/
git clone https://github.com/twreporter/plate.git
```

## Install the dependencies
```
cd $WORKSPACE/plate
npm install
```

## Create the config.js
```
cd $WORKSPACE/plate
// if you are not sure what kind of config you should use,
// you can use the example one, and make changes.
cp config.sample.js config.js 
```

## Start up the CMS 
```
// dev environment
npm run dev

// prod environment
npm start
```

# How to Use Plate with Dev Keystone Library?
If you want to develop `twreporter-keystone`(or your own keystone project) and `plate` at the same time,
you can follow the commands below to set up your development environment.

## Create npm link of keystone
```
cd $WORKSPACE/ 
git clone https://github.com/twreporter/keystone.git
cd $WORKSPACE/keystone	
npm install
npm run build
npm link
```

## Link keystone to plate
```
cd $WORKSPACE/
git clone https://github.com/twreporter/plate.git
cd plate
npm install
npm link twreporter-keystone
```

## Create the config.js
```
cd $WORKSPACE/plate/

// if you are not sure what kind of config you should use,
// you can use the example one, and make changes.
cp config.sample.js config.js 
```
## Start up the CMS
```
cd $WORKSPACE/plate/

// dev
npm run dev

// prod
npm start
```
