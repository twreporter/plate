# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### 3.1.1 (2020-05-01)
#### Commits
* [[`65a61b387e`](https://github.com/twreporter/keystone-plate/commit/65a61b387e)] - **chore**: upgrade @twreporter/keystone to 0.8.0-rc.1 (nickhsine)

### 3.1.0 (2020-04-20)
#### Commits
* [[`49c1310f58`](https://github.com/twreporter/keystone-plate/commit/49c1310f58)] - **feat**: add `toAutoNotify` field in models/Post.js (nickhsine)

### 3.0.2 (2020-03-30)

### Commits
* [[`9ad3f4e46c`](https://github.com/twreporter/keystone-plate/commit/9ad3f4e46c)] - **chore**: npm run changelog-maker to create change log (nickhsine)
* [[`b497f5d50f`](https://github.com/twreporter/keystone-plate/commit/b497f5d50f)] - **chore**: update @twreporter/keystone-plugin-(socketio|client) to v1.0.3 (nickhsine)
* [[`94690d0bf0`](https://github.com/twreporter/keystone-plate/commit/94690d0bf0)] - **chore**: add @twreporter/keystone-plugin-socketio@1.0.4 (nickhsine)

### 3.0.1 (DEPRECATED)

## [3.0.0](https://github.com/twreporter/plate/compare/v2.0.3...v3.0.0) (2019-11-27)

### Notable Changes
- features:
  - build keystone-plugin bundles by integrating circleCI
  - start keystone-plugin server to serve keystone-plugin bundle
  - start keystone-plugin server to handle socketio connection

### Commits
* build and serve keystone-plugin bundle ([67dcd28](https://github.com/twreporter/plate/commit/67dcd282066c2d9dd508586c0a02eba07a52ca3d))
* start a Socket.IO server in process ([a1b6912](https://github.com/twreporter/plate/commit/a1b6912c17afa456b3098567bfdee3d93c520166))
* fix socketio connection refuse problem ([9681436](https://github.com/twreporter/plate/commit/9681436b4fcb91920a9432bd7c15d0ad4cc7ba72))
* specify socketio connection host and protocol along with port ([b6aa513](https://github.com/twreporter/plate/commit/b6aa513b21165ea94022fe87cb953384918724d8))
* add package.json#repository info ([a9923d2](https://github.com/twreporter/plate/commit/a9923d221fca8e6fa47281e70aa276139029db99))
* add keystone-plugin deps ([02593d0](https://github.com/twreporter/plate/commit/02593d091c017904e86694f91afe6a46f62f2f49))
* bump @twreporter/keystone version ([1765482](https://github.com/twreporter/plate/commit/1765482a4fc62d2904b8dc6d9ebce439454309ce))
* update .gitignore ([cd381ef](https://github.com/twreporter/plate/commit/cd381ef366e41940d87232409971f04b094d2a49))
* update ci config and Dockerfile ([5e5825b](https://github.com/twreporter/plate/commit/5e5825becc093a0807db3b0e1c5346351046a19f))
* **release:** 2.1.0-rc.0 ([8978280](https://github.com/twreporter/plate/commit/89782809157bcedb5dc4e2127c0c96f0c28dd500))
* **release:** 2.1.0-rc.1 ([f2eae8e](https://github.com/twreporter/plate/commit/f2eae8ef94311ffb2476c4f2fb8e873e4f8ffbc4))
* **release:** 2.1.0-rc.2 ([02896c0](https://github.com/twreporter/plate/commit/02896c06ef954e6c2a3aa1c30873b2376c2a7b8b))

### [2.0.3](https://github.com/twreporter/plate/compare/v2.0.2...v2.0.3) (2019-11-21)

### Bug Fixes

* upgrade dependency ([5c3e1d6](https://github.com/twreporter/plate/commit/5c3e1d648896331dd46f5c319f65b4a16da818e3))


### Chores

* add commitlint ([5423d6e](https://github.com/twreporter/plate/commit/5423d6e55b16637b21723886ed5dc1a9c4a9f419))
* add standard-version ([0bf5f36](https://github.com/twreporter/plate/commit/0bf5f36e45633b5f792beeda86db3b56a7ff2110))

## 2.0.2, 2019-10-30
### Commits
- [[59d4707](https://github.com/twreporter/plate/commit/59d47077edf5a2d033ce359146a29d7060b4bc63)] - upgrade @twreporter/keystone from 0.7.1 to 0.7.2

## 2.0.1, 2019-10-25
### Notable Changes
- models/post:
  - update `heroImageSizes` and `articleStyles`
  - disable old values, such as `review`, `article`, `longform` ...etc
  - add label on each option

### Commits
- [[171c11b](https://github.com/twreporter/plate/commit/171c11be9173e8504f5f2fba143e94509a7009ca)] - update models/Post.js(nickhsine)
- [[1354d0f](https://github.com/twreporter/plate/commit/1354d0f8c98ee1c6fbe44656d9619e919e7c5164)] - update makefile: fix typo(nickhsine)
- [[8918be9](https://github.com/twreporter/plate/commit/8918be924f2ffea5a2ff7d64bf4b9b28396f181a)] - remove old styles: longform and review from models/Post.js(nickhsine)
- [[cf07272](https://github.com/twreporter/plate/commit/cf07272a44d6b0c84f6cafe5f70699814b304ba5)] - bug fix: can not create new post due to default style is not specified(nickhsine)

## 2.0.0, 2019-10-23
### Notable Changes
- major updates:
  - nodejs version: ^4.4.0 -> ^10.0.0 
  - package dep manager: npm -> yarn
- build: 
  - refine Dockerfile
  - integration with CircleCI
- dev:
  - create config.js on demand
- code refactor:
  - import used lodash functions without importing all

### Commits
- [[a47bc44](https://github.com/twreporter/plate/commit/a47bc440329125205e0082e70f7b67af1757c2e0)] - integration with CircleCI
- [[ab7ec4f](https://github.com/twreporter/plate/commit/ab7ec4f8a4924f98fe0d98cdb264da8acf812ae4)] - update package.json#engines. restrict node engine >=10.0.0(nickhsine)
- [[682a531](https://github.com/twreporter/plate/commit/682a5318f4f75c0b6ed380887096726b143e74b2)] - enhance developing process(nickhsine)
- [[449d976](https://github.com/twreporter/plate/commit/449d976e5a5816b204c158ab808f058875cc253e)] - upgrade @twreporter/keystone to 0.7.1(nickhsine)
- [[b27a131](https://github.com/twreporter/plate/commit/b27a1312d1a360483175e858575a7ecb270e2c92)] - fix typo in lib/extractIPTC.js
- [[7ebf6c6](https://github.com/twreporter/plate/commit/7ebf6c623b272b75aa0791e883dbfb96a8a2a50d)] - add dep babel-preset-stage-0(nickhsine)
- [[c76ba09](https://github.com/twreporter/plate/commit/c76ba09e116c6f4904186aaa6b9f7ad34e3a3194)] - add yarn.lock(nickhsine)
- [[491b950](https://github.com/twreporter/plate/commit/491b95081dc6319e1019ede91add25209aa61c0a)] - update @twreporter/keystone in package.json#dependencies(nickhsine)
- [[f62075b](https://github.com/twreporter/plate/commit/f62075b99bcfd69020c8761a49c015adec9ca35a)] - update lib/extractIPTC.js: only import lodash/get(nickhsine)

### 1.2.9
#### models/Post.js
- heroImageSize: add `fullscreen` option
- style: 
  - remove `article`, `photography`, `article:fullscreen:dark` and `article:fullscreen:normal`
  - add `article:v2:photo`

### 1.2.8
- Remove `article:v2:green` and `article:v2:yellow` article styles

### 1.2.7
- Add four new article style, including `article:v2:default`, `article:v2:green`, `article:v2:yellow` and `article:v2:pink`.

### 1.2.6
- Relpace `theme` by certain article style. Add `article:fullscreen:normal` and `article:fullscreen:dark` styles

### 1.2.5
- Update @twreporter/keystone@^0.6.3 to @0.7.0

### 1.2.4 
- Downgrade pm2-logrotate to 2.2.0 since Node version(4.x) is not supporting pm2-logrotate@2.4.0 
- Upgrade @twreporter/keystone to 0.6.4

### 1.2.3
- Resize image in 400px width

### 1.2.2
- Upgrade @twreporter/keystone to 0.6.3 

### 1.2.1
- Update package name in README.md
- Remove unexist default columns
- Add `secretEnabled` and `secretKey` to `User` model
- Upgrade @twreporter/keystone to 0.6.2

### 1.2.0
- Add Theme model and it will belong to Post model

### 1.1.6
- Resize gif image correctly 

### 1.1.5
- Update Dockerfile. Install more dependencies like imagemagick and graphicsmagick

### 1.1.4
- Update models/Post.js. Add leading_image_description field

### 1.1.3
- Upgrade twreporter-keystone to 0.5.35 

### 1.1.2
- Upgrade twreporter-keystone to 0.5.34 

### 1.1.1
- Upgrade twreporter-keystone to 0.5.33 

### 1.1.0
- Add CHANGELOG.md
