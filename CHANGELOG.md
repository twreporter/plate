# Changelog

### 3.2.21 (2024-04-08)

#### Notable Changes

- feat
  - add `PostReview` modal
  - add `reviewWord` column for `Post` modal
- chore
  - update @twreporter/keystone version

#### Commits

- [[`c0a9d0b46b`](https://github.com/twreporter/keystone-plate/commit/c0a9d0b46b)] - **chore**: update @twreporter/keystone version (Aylie Chou)
- [[`42e6c51d5b`](https://github.com/twreporter/keystone-plate/commit/42e6c51d5b)] - **chore**: update @twreporter/keystone version (Aylie Chou)
- [[`a46fff2892`](https://github.com/twreporter/keystone-plate/commit/a46fff2892)] - **fix**: typo (Aylie Chou)
- [[`e8a2292318`](https://github.com/twreporter/keystone-plate/commite8a2292318)] - **fix**: add `maxLength` for `reviewWord` field (Aylie Chou)
- [[`5f6998b7e9`](https://github.com/twreporter/keystone-plate/commit/5f6998b7e9)] - **chore**: update @twreporter/keystone version (Aylie Chou)
- [[`e8d74adc03`](https://github.com/twreporter/keystone-plate/commit/e8d74adc03)] - **feat**: add `PostReview` modal (Aylie Chou)

### 3.2.20 (2024-03-13)

#### Notable Changes

- feat
  - no edit for old category

#### Commits

- [[`4a13cd9692`](https://github.com/twreporter/keystone-plate/commit/4a13cd9692)] - **feat**: set categories to noedit (Lucien)

### 3.2.19 (2024-01-02)

#### Notable Changes

- chore
  - update @twreporter packages

#### Commits

- [[`087607ff9d`](https://github.com/twreporter/keystone-plate/commit/087607ff9d)] - **chore**: update @twreporter/keystone (Aylie Chou)
- [[`5e5434412b`](https://github.com/twreporter/keystone-plate/commit/5e5434412b)] - **chore**: update @twreporter packages (Aylie Chou)

### 3.2.18 (2023-10-23)

#### Notable Changes

- chore
  - update @twreporter/keystone version
    - fix search style
- chore
  - update keystone version
- fix
  - `latest_order` label wording
- fix
  - show `latest_order` only when `latest_order` > 0 in tag page
- feat: enable latest page

#### Commits

- [[`d1b62fe8c0`](https://github.com/twreporter/keystone-plate/commit/d1b62fe8c0)] - **chore**: update @twreporter package (Aylie Chou)
* \[[`6e0a0f0c4f`](https://github.com/twreporter/keystone-plate/commit/6e0a0f0c4f)] - Merge pull request #353 from duidae/jason/update\_keystone (許守傑 Shou-Chieh Hsu (Jason))
* \[[`3370b12af7`](https://github.com/twreporter/keystone-plate/commit/3370b12af7)] - **fix**: fix lint (duidae)
* \[[`01b152a8c0`](https://github.com/twreporter/keystone-plate/commit/01b152a8c0)] - **fix**: fix lint (duidae)
* \[[`fa6dbb7e18`](https://github.com/twreporter/keystone-plate/commit/fa6dbb7e18)] - **chore**: update keystone & fix lint (duidae)
- [[`123879e8d3`](https://github.com/twreporter/keystone-plate/commit/123879e8d3)] - **fix**: `latest\_order` label wording (Aylie Chou)
- [[`49797a5514`](https://github.com/twreporter/keystone-plate/commit/49797a5514)] - **fix**: latest\_order use built-in number type (Aylie Chou)
- [[`1af7c97825`](https://github.com/twreporter/keystone-plate/commit/1af7c97825)] - **feat**: apply latest tag on tag.latest\_order field (Aylie Chou)
* \[[`7c55a91d65`](https://github.com/twreporter/keystone-plate/commit/7c55a91d65)] - Jason/latest page (#336) (許守傑 Shou-Chieh Hsu (Jason))

### 3.2.17 (2023-01-13)

#### Notable Changes

- circleci
  - use gke-gcloud-auth-plugin in circleci

### Commits

- [[`451340f23e`](https://github.com/twreporter/keystone-plate/commit/451340f23e)] - **fix**: use gke-gcloud-auth-plugin in circleci (Aylie Chou)

### 3.2.16 (2023-01-13)

#### Notable Changes

- circleci
  - use twreporter-gcp context for gcp related credential

#### Commits

- [[`2b3121d4de`](https://github.com/twreporter/keystone-plate/commit/2b3121d4de)] - **fix**: use twreporter-gcp context for gcp related credential (Aylie Chou)

### 3.2.15 (2022-10-28)

#### Notable Changes
- fix
    - fix category set key to 'category_set'

#### Commits
* \[[`852a811fb6`](https://github.com/twreporter/keystone-plate/commit/852a811fb6)] - Merge pull request #332 from duidae/jason/fix\_category\_set\_key (許守傑 Shou-Chieh Hsu (Jason))
* \[[`ecf7aca73c`](https://github.com/twreporter/keystone-plate/commit/ecf7aca73c)] - **fix**: fix key name (duidae)

### 3.2.14 (2022-10-24)

#### Notable Changes
- chore
    - update npm package @twreporter/keystone@0.9.9

#### Commits
* \[[`1226a85f6d`](https://github.com/twreporter/keystone-plate/commit/1226a85f6d)] - Merge pull request #328 from duidae/jason/upgrade\_keystone\_v0.9.9 (許守傑 Shou-Chieh Hsu (Jason))
* \[[`59e243c2de`](https://github.com/twreporter/keystone-plate/commit/59e243c2de)] - **chore**: upgrade keystone to v0.9.9 (duidae)
* \[[`fa9a776a5a`](https://github.com/twreporter/keystone-plate/commit/fa9a776a5a)] - **chore**: upgrade keystone to v0.9.9-rc.1 (#325) (許守傑 Shou-Chieh Hsu (Jason))
* \[[`6500a215fe`](https://github.com/twreporter/keystone-plate/commit/6500a215fe)] - Jason/issue 327 (#314) (許守傑 Shou-Chieh Hsu (Jason))

### 3.2.13 (2022-09-20)

#### Notable Changes
- chore
    - update npm package @twreporter/keystone@0.9.8

#### Commits
* [[`00493f2bd7`](https://github.com/twreporter/keystone-plate/commit/00493f2bd7)] - **chore**: upgrade @twreporter/keystone to v0.9.8 (Tai-Jiun Fang)
* [[`ae4b556146`](https://github.com/twreporter/keystone-plate/commit/ae4b556146)] - **chore**: update @twreporter/keystone@0.9.8-rc.0 (Tai-Jiun Fang)

### 3.2.12 (2022-06-09)

#### Notable Changes
- refactor 
    - add 'status' to default columns in topic page ([#308](https://github.com/twreporter/plate/pull/308))
- fix
    - replace version source with package.json instead of changelog.md ([#298](https://github.com/twreporter/plate/pull/298))

#### Commits
* [[`cca58b4c24`](https://github.com/twreporter/keystone-plate/commit/cca58b4c24)] - **refactor**: add 'status' to default columns in topic page (#308) (Tai-Jiun Fang)
* [[`88364ce85a`](https://github.com/twreporter/keystone-plate/commit/88364ce85a)] - **fix**: read version from package.json instead of changelog.md (duidae)

### 3.2.11 (2022-05-16)

#### Notable Changes
- chore
    - update @twreporter/keystone to v0.9.7 ([#302](https://github.com/twreporter/plate/pull/302))

#### Commits
* [634629cca8] - Merge pull request #302 from duidae/jason/upgrade_keystone_v0.9.7 (許守傑 Shou-Chieh Hsu (Jason))
* [27128d8bff] - chore: upgrade keystone to v0.9.7 (duidae)

### 3.2.10 (2022-05-04)

#### Notable Changes
- chore
    - bump version to v3.2.10 due to CI anomaly

#### Commits
* [ef1efbce59] - Merge pull request #294 from duidae/jason/bump_version_v3.2.10 (許守傑 Shou-Chieh Hsu (Jason))
* [e7f53fb4cc] - fix: bump version (duidae)
* [3b2fb97a5b] - Merge pull request #291 from duidae/master (許守傑 Shou-Chieh Hsu (Jason))
* [545a0a5c34] - chore: bump version (duidae)

### 3.2.9 (2022-05-04)

#### Notable Changes
- chore
    - downgrade @twreporter/keystone to v0.9.5 ([#284](https://github.com/twreporter/plate/pull/284))

#### Commits
* [64ac61a04b] - fix: downgrade keystone to v0.9.5 (duidae)
* [90c65ddb6a] - Merge pull request #285 from duidae/jason/bump_version_v3.2.8 (許守傑 Shou-Chieh Hsu (Jason))

### 3.2.8 (2022-04-26)

#### Notable Changes
- chore
    - update @twreporter/keystone to v0.9.6 ([#284](https://github.com/twreporter/plate/pull/284))

#### Commits
* [93a8e5ec6e] - Merge pull request #284 from duidae/jason/upgrade_keystone_v0.9.6 (許守傑 Shou-Chieh Hsu (Jason))
* [5e0c54202b] - chore: upgrade keystone to v0.9.6 (duidae)

### 3.2.7 (2021-10-13)

#### Notable Changes
- chore
  - remove build filter([#270](https://github.com/twreporter/plate/pull/270))
  - update @twreporter/keystone to 0.9.5([#275](https://github.com/twreporter/plate/pull/275))
  - update @twreporter/keystone-plugin-client to 1.0.8([#275](https://github.com/twreporter/plate/pull/275))
  - update @twreporter/keystone-plugin-socketio to 1.0.8([#275](https://github.com/twreporter/plate/pull/275))
- feat
  - add avatar to user model ([#263](https://github.com/twreporter/plate/pull/263))
  - add signout page([#256](https://github.com/twreporter/plate/pull/256))
- refactor
  - change session key to `keystone.sid`([#258](https://github.com/twreporter/plate/pull/258))

#### Commits
* [[`6c4b5e54d5`](https://github.com/twreporter/keystone-plate/commit/6c4b5e54d5)] - **chore**: update keystone-plugin-client dependency (Ching-Yang, Tseng)
* [[`ebc412dc58`](https://github.com/twreporter/keystone-plate/commit/ebc412dc58)] - **chore**: removes build filter (Ching-Yang, Tseng)
* [[`700ae795e4`](https://github.com/twreporter/keystone-plate/commit/700ae795e4)] - **chore**: update several dependencies (babygoat)
* [[`616c9f012b`](https://github.com/twreporter/keystone-plate/commit/616c9f012b)] - **chore**: update @twreporter/keystone to v0.9.5-rc.3 (Tai-Jiun Fang)
* [[`601fc8bf07`](https://github.com/twreporter/keystone-plate/commit/601fc8bf07)] - **chore**: update @twreporter/keystone to v0.9.5-rc.2 (Tai-Jiun Fang)
* [[`0366f0d53f`](https://github.com/twreporter/keystone-plate/commit/0366f0d53f)] - **refactor**: add avatar bucket in gcs config (Tai-Jiun Fang)
* [[`c4ce6ba296`](https://github.com/twreporter/keystone-plate/commit/c4ce6ba296)] - **refactor**: remove unused `datePrefix` key from User avatar option (Tai
-Jiun Fang)
* [[`9ae8b27d5f`](https://github.com/twreporter/keystone-plate/commit/9ae8b27d5f)] - **refactor**: remove field as a prop of user avatar (Tai-Jiun Fang)
* [[`0af371be12`](https://github.com/twreporter/keystone-plate/commit/0af371be12)] - **feat**: add avatar to user model (Tai-Jiun Fang)
* [[`931dae0d1f`](https://github.com/twreporter/keystone-plate/commit/931dae0d1f)] - **chore**: update @twreporter/keystone to v0.9.5-rc.1 (#260) (Tai-Jiun Fang)
* [[`50531bea4c`](https://github.com/twreporter/keystone-plate/commit/50531bea4c)] - **refactor**: change session key to `keystone.sid` (Ching-Yang, Tseng)
* [[`f4d057dc91`](https://github.com/twreporter/keystone-plate/commit/f4d057dc91)] - ***Revert*** "**refactor**: change session key to `keystone.sid`" (babygoat)
* [[`2f02b40a31`](https://github.com/twreporter/keystone-plate/commit/2f02b40a31)] - **feat**: add signout page (Ching-Yang, Tseng)
* [[`bf3f0bdf17`](https://github.com/twreporter/keystone-plate/commit/bf3f0bdf17)] - **refactor**: change session key to `keystone.sid` (Ching-Yang, Tseng)
* [[`a0d5a55d6b`](https://github.com/twreporter/keystone-plate/commit/a0d5a55d6b)] - **chore**: update @twreporter/keystone to v0.9.5-rc.0 (Tai-Jiun Fang)

### 3.2.6 (2021-08-03)

#### Notable Changes
- refactor
  - add Description word limits to note for image ([#247](https://github.com/twreporter/plate/pull/247))

#### Commits
* [[`606bc0cc57`](https://github.com/twreporter/keystone-plate/commit/606bc0cc57)] - **refactor**: add Description word limits to note for image (#247) (Tai-Jiun Fang)

### 3.2.5 (2021-7-13)

#### Notable Changes
- feat
	- graceful shutdown of keystone server ([#236](https://github.com/twreporter/plate/pull/236))
	- enable mongo session store([#215](https://github.com/twreporter/plate/pull/215), [#216](https://github.com/twreporter/plate/pull/216))
- docs
	- update release-test-items/posts.md([#220](https://github.com/twreporter/plate/pull/220)) to add test items for editor
	- add release-test-item([#149](https://github.com/twreporter/plate/pull/149))
- chore
    - update @twreporter/keystone to v0.9.4

#### Commits
* [[`c9107a8bf6`](https://github.com/twreporter/plate/commit/c9107a8bf6)] - **chore**: bump @twreporter/keystone to v0.9.4-rc.7 (Ching-Yang, Tseng)
* [[`2eca5ae1dc`](https://github.com/twreporter/plate/commit/2eca5ae1dc)] - **feat**: add healthcheck for keystone (Ching-Yang, Tseng)
* [[`a5ce5574d3`](https://github.com/twreporter/plate/commit/a5ce5574d3)] - **feat**: graceful shutdown the servers (Ching-Yang, Tseng)
* [[`aa57d3efbb`](https://github.com/twreporter/plate/commit/aa57d3efbb)] - **refactor**: use initExpressApp instead of start (Ching-Yang, Tseng)
* [[`f683e90c20`](https://github.com/twreporter/plate/commit/f683e90c20)] - **chore**: downgrade @twreporter/keystone to v0.9.4-rc.5 (#233) (Tai-Jiun Fang)
* [[`53f5b9e1de`](https://github.com/twreporter/plate/commit/53f5b9e1de)] - **chore**: upgrade @twreporter/keystone to v0.9.4-rc.6 (#230) (Tai-Jiun Fang)
* [[`9b68a9a1b6`](https://github.com/twreporter/plate/commit/9b68a9a1b6)] - **chore**: upgrade @twreporter/keystone to v0.9.4-rc.5 (Tai-Jiun Fang)
* [[`4395bbdfe0`](https://github.com/twreporter/plate/commit/4395bbdfe0)] - **docs**: update release-test-items/posts.md (#220) (Tai-Jiun Fang)
* [[`63721f1a86`](https://github.com/twreporter/plate/commit/63721f1a86)] - **chore**: upgrade @twreporter/keystone to v0.9.4-rc.4 (Tai-Jiun Fang)
* [[`325fac2e06`](https://github.com/twreporter/plate/commit/325fac2e06)] - **chore**: upgrade @twreporter/keystone@v0.9.4-rc.3 (Tai-Jiun Fang)
* [[`5310581ca3`](https://github.com/twreporter/plate/commit/5310581ca3)] - **feat**: define the options of session store (Ching-Yang, Tseng)
* [[`b575395843`](https://github.com/twreporter/plate/commit/b575395843)] - **feat**: use connect-mongo as express-session storage (Ching-Yang, Tseng)
* [[`083e9490f7`](https://github.com/twreporter/plate/commit/083e9490f7)] - Merge pull request #149 from nickhsine/release-test-items (babygoat)

### 3.2.4 (2020-12-09)

#### Notable Changes

- chore: upgrade @twreporter/keystone to v0.9.3 

#### Commits

* [[`7d90b42d64`](https://github.com/twreporter/plate/commit/7d90b42d64)] - Merge pull request #211 from taylrj/update-dep (Tai-Jiun Fang)
* [[`c771d799b2`](https://github.com/twreporter/plate/commit/c771d799b2)] - **chore**: upgrade dep @twreporter/keystone to v0.9.3 (Taylor Fang)
* [[`99ff41891d`](https://github.com/twreporter/plate/commit/99ff41891d)] - Merge pull request #209 from taylrj/master (Tai-Jiun Fang)
* [[`f01a8cbfb4`](https://github.com/twreporter/plate/commit/f01a8cbfb4)] - Merge pull request #208 from taylrj/update-dep (Tai-Jiun Fang)
* [[`84dd798cc8`](https://github.com/twreporter/plate/commit/84dd798cc8)] - **chore**: upgrade dep @twreporter/keystone to v0.9.3-rc.0 (Taylor Fang)
* [[`12347f38af`](https://github.com/twreporter/plate/commit/12347f38af)] - Merge pull request #206 from taylrj/master (Tai-Jiun Fang)

### 3.2.3 (2020-12-09)

#### Notable Changes

- [refactor: update gcs buckets](https://github.com/twreporter/plate/pull/202)

#### Commits

* [[`f03e847930`](https://github.com/twreporter/plate/commit/f03e847930)] - Merge pull request #202 from taylrj/fix-audio-path (Tai-Jiun Fang)
* [[`b50eb6a594`](https://github.com/twreporter/plate/commit/b50eb6a594)] - **refactor**: update gcs buckets (Taylor Fang)
* [[`21570f9f28`](https://github.com/twreporter/plate/commit/21570f9f28)] - **refactor**: update bucket in `config-for-docker-build.js` (Taylor Fang)
* [[`2ffb99517e`](https://github.com/twreporter/plate/commit/2ffb99517e)] - Merge pull request #199 from nickhsine/master (nick)

### 3.2.2 (2020-11-26)

#### Notable Changes

- [chore: update dependencies](https://github.com/twreporter/plate/pull/194)

#### Commits

* [[`42c0b21349`](https://github.com/twreporter/plate/commit/42c0b21349)] - Merge pull request #198 from nickhsine/master (nick)
* [[`64ba4ab3aa`](https://github.com/twreporter/plate/commit/64ba4ab3aa)] - **chore**: yarn add @twreporter/keystone@0.9.2 (nickhsine)
* [[`7bef21e5dc`](https://github.com/twreporter/plate/commit/7bef21e5dc)] - Merge pull request #194 from nickhsine/master (nick)
* [[`ce5ccd16f6`](https://github.com/twreporter/plate/commit/ce5ccd16f6)] - **chore**: update dependencies (nickhsine)

### 3.2.1 (2020-11-26)

#### Notable Changes

- [Revert "chore: yarn-deduplicate"](https://github.com/twreporter/plate/pull/190)

#### Commits

* [[`e39a0380f1`](https://github.com/twreporter/plate/commit/e39a0380f1)] - Merge pull request #190 from nickhsine/fix-yarn-lock (nick)
* [[`6e70a69bcd`](https://github.com/twreporter/plate/commit/6e70a69bcd)] - ***Revert*** "**chore**: yarn-deduplicate" (nickhsine)

### 3.2.0 (2020-11-25)

#### Notable Changes

Bump version v3.2.0 to correct the versioning.

### 3.1.12 (2020-11-25)

#### Commits

* [[`ae8376f7e0`](https://github.com/twreporter/plate/commit/ae8376f7e0)] - **chore**: add @twreporter/keystone@0.9.1 (nickhsine)
* [[`0708c1fa9a`](https://github.com/twreporter/plate/commit/0708c1fa9a)] - Merge pull request #178 from nickhsine/master (nick)

### 3.1.11 (2020-11-25)

#### Notable Changes

- [chore: fix deployment steps](https://github.com/twreporter/plate/pull/176)
- [chore: test slack channel deployment approval on staging](https://github.com/twreporter/plate/pull/175)
- [refactor: update models/Image.js. add slack channel notice](https://github.com/twreporter/plate/pull/174)

#### Commits

* [[`aad2c52073`](https://github.com/twreporter/plate/commit/aad2c52073)] - **refactor**: update models/Image.js. add slack channel notice (nickhsine)
* [[`c4ae8b3b0e`](https://github.com/twreporter/plate/commit/c4ae8b3b0e)] - Merge pull request #176 from babygoat/master (babygoat)
* [[`a805e862ab`](https://github.com/twreporter/plate/commit/a805e862ab)] - **chore**: fix cluster location (Ching-Yang, Tseng)
* [[`52bf25ea86`](https://github.com/twreporter/plate/commit/52bf25ea86)] - **chore**: fix typo `gcloud` (Ching-Yang, Tseng)
* [[`02d882f93f`](https://github.com/twreporter/plate/commit/02d882f93f)] - Merge pull request #170 from babygoat/master (babygoat)
* [[`7572614808`](https://github.com/twreporter/plate/commit/7572614808)] - **chore**: update kustomize installation (Ching-Yang, Tseng)
* [[`308325db08`](https://github.com/twreporter/plate/commit/308325db08)] - **chore**: remove redundant dependency (Ching-Yang, Tseng)
* [[`6e33031f89`](https://github.com/twreporter/plate/commit/6e33031f89)] - Merge pull request #172 from nickhsine/master (nick)

### 3.1.10 (2020-11-09)

#### Notable Changes

- [refactor: send resize tasks to pubsub rather than executing `gm` locally](https://github.com/twreporter/plate/pull/166)
- [chore: update dependency](https://github.com/twreporter/plate/pull/171)

#### Commits
* [[`28825c7207`](https://github.com/twreporter/plate/commit/28825c7207)] - **chore**: update dependency (nickhsine)
* [[`796f25a798`](https://github.com/twreporter/plate/commit/796f25a798)] - Merge pull request #166 from nickhsine/drop-resize (nick)
* [[`da7cf15883`](https://github.com/twreporter/plate/commit/da7cf15883)] - **refactor**: update description field in models/Image.js (nickhsine)
* [[`ee2cb23130`](https://github.com/twreporter/plate/commit/ee2cb23130)] - **refactor**: update model/Image.js (nickhsine)
* [[`a9c57f8253`](https://github.com/twreporter/plate/commit/a9c57f8253)] - Merge pull request #167 from nickhsine/master (nick)
* [[`1037f3ab88`](https://github.com/twreporter/plate/commit/1037f3ab88)] - **chore**: bump version to 3.1.9 (nickhsine)
* [[`af559a5fbb`](https://github.com/twreporter/plate/commit/af559a5fbb)] - **chore**: upgrade @twreporter/keystone-plugin-(socketio|client) (nickhsine)
* [[`a408c2ae4b`](https://github.com/twreporter/plate/commit/a408c2ae4b)] - Merge pull request #163 from nickhsine/master (nick)

### 3.1.9 (2020-09-25)

#### Commits
* [[`dba9514163`](https://github.com/twreporter/plate/commit/dba9514163)] - **chore**: upgrade @twreporter/keystone-plugin-(socketio|client) (nickhsine)
* [[`a408c2ae4b`](https://github.com/twreporter/plate/commit/a408c2ae4b)] - Merge pull request #163 from nickhsine/master (nick)

### 3.1.8 (2020-09-09)

#### Notable Changes
- refactor:
	- [update config. `preview config` -> `preview origin`](https://github.com/twreporter/plate/pull/162)

#### Commits
* [[`f5577bba88`](https://github.com/twreporter/plate/commit/f5577bba88)] - Merge pull request #162 from nickhsine/preview-origin (nick)
* [[`72a98d321a`](https://github.com/twreporter/plate/commit/72a98d321a)] - **refactor**: update config. `preview config` -\> `preview origin` (nickhsine)
* [[`c5f3c34899`](https://github.com/twreporter/plate/commit/c5f3c34899)] - Merge pull request #159 from nickhsine/master (nick)
* [[`bb30953b4b`](https://github.com/twreporter/plate/commit/bb30953b4b)] - **fix**: update .circleci/config.yml. fix typo (nickhsine)

### 3.1.7 (2020-08-26)
#### Notable Changes
- fix: 
  - add `專題名稱` and `發佈日期` as topic default columns
- chore:
  - update circleci config. add staging branch 
  - upgrade @twreporter/keystone-plugin-client to 3.1.5
  - upgrade @twreporter/keystone-plugin-socketio to 3.1.5

#### Commits
* [[`93bf91f51d`](https://github.com/twreporter/plate/commit/93bf91f51d)] - **chore**: update package.json#dependencies (nickhsine)
* [[`a41af86024`](https://github.com/twreporter/plate/commit/a41af86024)] - **fix**: add `專題名稱` and `發佈日期` as topic default columns (nickhsine)
* [[`f636be84b6`](https://github.com/twreporter/plate/commit/f636be84b6)] - Merge pull request #154 from nickhsine/circleci-staging (nick)
* [[`6069d422a5`](https://github.com/twreporter/plate/commit/6069d422a5)] - **refactor**: update circleci config. add staging branch (nickhsine)
* [[`de56e993f7`](https://github.com/twreporter/plate/commit/de56e993f7)] - Merge pull request #152 from nickhsine/3.1.6 (nick)

### 3.1.6 (2020-08-17)
#### Commits
* [[`39c6dc45c4`](https://github.com/twreporter/plate/commit/39c6dc45c4)] - **refactor**: update keystone.js (nickhsine)
* [[`3c88b6c40d`](https://github.com/twreporter/plate/commit/3c88b6c40d)] - Merge pull request #150 from nickhsine/3.1.5 (nick)

### 3.1.5 (2020-08-14)
#### Commits
* [[`ee704bacfc`](https://github.com/twreporter/plate/commit/ee704bacfc)] - **chore**: upgrade @twreporter/keystone to v0.8.0-rc.6 (nickhsine)
* [[`505ca71820`](https://github.com/twreporter/plate/commit/505ca71820)] - **refactor**: update models/User.js (nickhsine)
* [[`04a7955e5e`](https://github.com/twreporter/plate/commit/04a7955e5e)] - **refactor**: update models (nickhsine)
* [[`158a635224`](https://github.com/twreporter/plate/commit/158a635224)] - Merge pull request #147 from nickhsine/master (nick)
* [[`ade48ea71b`](https://github.com/twreporter/plate/commit/ade48ea71b)] - **docs**: update README.md (nickhsine)

### 3.1.4 (2020-06-01)
#### Commits
* [[`1487318b46`](https://github.com/twreporter/plate/commit/1487318b46)] - Merge pull request #145 from YuCJ/master (yucj)
* [[`1ccf384cc3`](https://github.com/twreporter/plate/commit/1ccf384cc3)] - chore(release): 3.1.4 (yucj)

### 3.1.3 (2020-05-07)
#### Commits
* [[`6e8604d308`](https://github.com/twreporter/plate/commit/6e8604d308)] - **chore**: upgrade @twreporter/keystone to 0.8.0-rc.3 (nickhsine)

### 3.1.2 (2020-05-06)
#### Commits
* [[`a4bc1af177`](https://github.com/twreporter/plate/commit/a4bc1af177)] - **chore**: upgrade @twreporter/keystone to 0.8.0-rc.2 (nickhsine)

### 3.1.1 (2020-05-01)
#### Commits
* [[`65a61b387e`](https://github.com/twreporter/plate/commit/65a61b387e)] - **chore**: upgrade @twreporter/keystone to 0.8.0-rc.1 (nickhsine)

### 3.1.0 (2020-04-20)
#### Commits
* [[`49c1310f58`](https://github.com/twreporter/plate/commit/49c1310f58)] - **feat**: add `toAutoNotify` field in models/Post.js (nickhsine)

### 3.0.2 (2020-03-30)

### Commits
* [[`9ad3f4e46c`](https://github.com/twreporter/plate/commit/9ad3f4e46c)] - **chore**: npm run changelog-maker to create change log (nickhsine)
* [[`b497f5d50f`](https://github.com/twreporter/plate/commit/b497f5d50f)] - **chore**: update @twreporter/keystone-plugin-(socketio|client) to v1.0.3 (nickhsine)
* [[`94690d0bf0`](https://github.com/twreporter/plate/commit/94690d0bf0)] - **chore**: add @twreporter/keystone-plugin-socketio@1.0.4 (nickhsine)

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
