# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### 3.1.12 (2020-11-25)

#### Commits

* [[`ae8376f7e0`](https://github.com/twreporter/keystone-plate/commit/ae8376f7e0)] - **chore**: add @twreporter/keystone@0.9.1 (nickhsine)
* [[`0708c1fa9a`](https://github.com/twreporter/keystone-plate/commit/0708c1fa9a)] - Merge pull request #178 from nickhsine/master (nick)

### 3.1.11 (2020-11-25)

#### Notable Changes

- [chore: fix deployment steps](https://github.com/twreporter/plate/pull/176)
- [chore: test slack channel deployment approval on staging](https://github.com/twreporter/plate/pull/175)
- [refactor: update models/Image.js. add slack channel notice](https://github.com/twreporter/plate/pull/174)

#### Commits

* [[`aad2c52073`](https://github.com/twreporter/keystone-plate/commit/aad2c52073)] - **refactor**: update models/Image.js. add slack channel notice (nickhsine)
* [[`c4ae8b3b0e`](https://github.com/twreporter/keystone-plate/commit/c4ae8b3b0e)] - Merge pull request #176 from babygoat/master (babygoat)
* [[`a805e862ab`](https://github.com/twreporter/keystone-plate/commit/a805e862ab)] - **chore**: fix cluster location (Ching-Yang, Tseng)
* [[`52bf25ea86`](https://github.com/twreporter/keystone-plate/commit/52bf25ea86)] - **chore**: fix typo `gcloud` (Ching-Yang, Tseng)
* [[`02d882f93f`](https://github.com/twreporter/keystone-plate/commit/02d882f93f)] - Merge pull request #170 from babygoat/master (babygoat)
* [[`7572614808`](https://github.com/twreporter/keystone-plate/commit/7572614808)] - **chore**: update kustomize installation (Ching-Yang, Tseng)
* [[`308325db08`](https://github.com/twreporter/keystone-plate/commit/308325db08)] - **chore**: remove redundant dependency (Ching-Yang, Tseng)
* [[`6e33031f89`](https://github.com/twreporter/keystone-plate/commit/6e33031f89)] - Merge pull request #172 from nickhsine/master (nick)

### 3.1.10 (2020-11-09)

#### Notable Changes

- [refactor: send resize tasks to pubsub rather than executing `gm` locally](https://github.com/twreporter/plate/pull/166)
- [chore: update dependency](https://github.com/twreporter/plate/pull/171)

#### Commits
* [[`28825c7207`](https://github.com/twreporter/keystone-plate/commit/28825c7207)] - **chore**: update dependency (nickhsine)
* [[`796f25a798`](https://github.com/twreporter/keystone-plate/commit/796f25a798)] - Merge pull request #166 from nickhsine/drop-resize (nick)
* [[`da7cf15883`](https://github.com/twreporter/keystone-plate/commit/da7cf15883)] - **refactor**: update description field in models/Image.js (nickhsine)
* [[`ee2cb23130`](https://github.com/twreporter/keystone-plate/commit/ee2cb23130)] - **refactor**: update model/Image.js (nickhsine)
* [[`a9c57f8253`](https://github.com/twreporter/keystone-plate/commit/a9c57f8253)] - Merge pull request #167 from nickhsine/master (nick)
* [[`1037f3ab88`](https://github.com/twreporter/keystone-plate/commit/1037f3ab88)] - **chore**: bump version to 3.1.9 (nickhsine)
* [[`af559a5fbb`](https://github.com/twreporter/keystone-plate/commit/af559a5fbb)] - **chore**: upgrade @twreporter/keystone-plugin-(socketio|client) (nickhsine)
* [[`a408c2ae4b`](https://github.com/twreporter/keystone-plate/commit/a408c2ae4b)] - Merge pull request #163 from nickhsine/master (nick)

### 3.1.9 (2020-09-25)

#### Commits
* [[`dba9514163`](https://github.com/twreporter/keystone-plate/commit/dba9514163)] - **chore**: upgrade @twreporter/keystone-plugin-(socketio|client) (nickhsine)
* [[`a408c2ae4b`](https://github.com/twreporter/keystone-plate/commit/a408c2ae4b)] - Merge pull request #163 from nickhsine/master (nick)

### 3.1.8 (2020-09-09)

#### Notable Changes
- refactor:
	- [update config. `preview config` -> `preview origin`](https://github.com/twreporter/plate/pull/162)

#### Commits
* [[`f5577bba88`](https://github.com/twreporter/keystone-plate/commit/f5577bba88)] - Merge pull request #162 from nickhsine/preview-origin (nick)
* [[`72a98d321a`](https://github.com/twreporter/keystone-plate/commit/72a98d321a)] - **refactor**: update config. `preview config` -\> `preview origin` (nickhsine)
* [[`c5f3c34899`](https://github.com/twreporter/keystone-plate/commit/c5f3c34899)] - Merge pull request #159 from nickhsine/master (nick)
* [[`bb30953b4b`](https://github.com/twreporter/keystone-plate/commit/bb30953b4b)] - **fix**: update .circleci/config.yml. fix typo (nickhsine)

### 3.1.7 (2020-08-26)
#### Notable Changes
- fix: 
  - add `專題名稱` and `發佈日期` as topic default columns
- chore:
  - update circleci config. add staging branch 
  - upgrade @twreporter/keystone-plugin-client to 3.1.5
  - upgrade @twreporter/keystone-plugin-socketio to 3.1.5

#### Commits
* [[`93bf91f51d`](https://github.com/twreporter/keystone-plate/commit/93bf91f51d)] - **chore**: update package.json#dependencies (nickhsine)
* [[`a41af86024`](https://github.com/twreporter/keystone-plate/commit/a41af86024)] - **fix**: add `專題名稱` and `發佈日期` as topic default columns (nickhsine)
* [[`f636be84b6`](https://github.com/twreporter/keystone-plate/commit/f636be84b6)] - Merge pull request #154 from nickhsine/circleci-staging (nick)
* [[`6069d422a5`](https://github.com/twreporter/keystone-plate/commit/6069d422a5)] - **refactor**: update circleci config. add staging branch (nickhsine)
* [[`de56e993f7`](https://github.com/twreporter/keystone-plate/commit/de56e993f7)] - Merge pull request #152 from nickhsine/3.1.6 (nick)

### 3.1.6 (2020-08-17)
#### Commits
* [[`39c6dc45c4`](https://github.com/twreporter/keystone-plate/commit/39c6dc45c4)] - **refactor**: update keystone.js (nickhsine)
* [[`3c88b6c40d`](https://github.com/twreporter/keystone-plate/commit/3c88b6c40d)] - Merge pull request #150 from nickhsine/3.1.5 (nick)

### 3.1.5 (2020-08-14)
#### Commits
* [[`ee704bacfc`](https://github.com/twreporter/keystone-plate/commit/ee704bacfc)] - **chore**: upgrade @twreporter/keystone to v0.8.0-rc.6 (nickhsine)
* [[`505ca71820`](https://github.com/twreporter/keystone-plate/commit/505ca71820)] - **refactor**: update models/User.js (nickhsine)
* [[`04a7955e5e`](https://github.com/twreporter/keystone-plate/commit/04a7955e5e)] - **refactor**: update models (nickhsine)
* [[`158a635224`](https://github.com/twreporter/keystone-plate/commit/158a635224)] - Merge pull request #147 from nickhsine/master (nick)
* [[`ade48ea71b`](https://github.com/twreporter/keystone-plate/commit/ade48ea71b)] - **docs**: update README.md (nickhsine)

### 3.1.4 (2020-06-01)
#### Commits
* [[`1487318b46`](https://github.com/twreporter/keystone-plate/commit/1487318b46)] - Merge pull request #145 from YuCJ/master (yucj)
* [[`1ccf384cc3`](https://github.com/twreporter/keystone-plate/commit/1ccf384cc3)] - chore(release): 3.1.4 (yucj)

### 3.1.3 (2020-05-07)
#### Commits
* [[`6e8604d308`](https://github.com/twreporter/keystone-plate/commit/6e8604d308)] - **chore**: upgrade @twreporter/keystone to 0.8.0-rc.3 (nickhsine)

### 3.1.2 (2020-05-06)
#### Commits
* [[`a4bc1af177`](https://github.com/twreporter/keystone-plate/commit/a4bc1af177)] - **chore**: upgrade @twreporter/keystone to 0.8.0-rc.2 (nickhsine)

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
