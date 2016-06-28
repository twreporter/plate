# Plate - for Keystone CMS

A KeystoneJS Project with various configurations for development and testing purposes

**Note: This project requires Node.js v4.x**

# Before running Plate

Install [gm](https://github.com/aheckmann/gm.git) first.
We will need that to resize images.

# How to run Plate (TWReporter's fork of KeystoneJS CMS)
```
git clone https://github.com/twreporter/plate.git
cd plate
npm install
cp config.sample.js config.js // remember to modify the config

// dev
npm run dev

// prod
npm start
```

# How to run Plate with Keystone
```
git clone https://github.com/twreporter/keystone.git		
cd keystone		
npm link		
cd ..
git clone https://github.com/twreporter/plate.git
cd plate
npm install
npm link twreporter-keystone
cp config.sample.js config.js // remember to modify the config

// dev
npm run dev

// prod
npm start
```
