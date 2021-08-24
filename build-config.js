'use strict'

const readline = require('readline')
const fs = require('fs')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})


const question1 = () => {
  return new Promise((resolve, reject) => {
    const defaultAnswer = 'mongodb://localhost:27017/plate'
    rl.question(`set up 'mongo', default is ${defaultAnswer}.\nmongo:`, (answer) => {
      const mongo = answer || defaultAnswer
      console.log('mongo =', mongo)
      console.log('\n')
      resolve(mongo)
    })
  })
}

const question2 = () => {
  return new Promise((resolve, reject) => {
    rl.question(`set up 'auth', default is true.\nauth:`, (answer) => {
      const auth = answer === 'false' ? false : true
      console.log('auth =', auth)
      console.log('\n')
      resolve(auth)
    })
  })
}

const question3 = () => {
  return new Promise((resolve, reject) => {
    const defaultAnswer = 'unset-cookie-secret'
    rl.question(`set up 'cookie secret', default is ${defaultAnswer}.\ncookie secret:`, (answer) => {
      const cookieSecret = answer || defaultAnswer
      console.log('cookie secret =', cookieSecret)
      console.log('\n')
      resolve(cookieSecret)
    })
  })
}

const question4 = () => {
  return new Promise((resolve, reject) => {
    rl.question(`set up 'gcs project id'.\ngcs project id:`, (answer) => {
      console.log('gcs project id =', answer)
      console.log('\n')
      resolve(answer)
    })
  })
}

const question5 = () => {
  return new Promise((resolve, reject) => {
    rl.question(`set up 'gcs bucket'.\ngcs bucket:`, (answer) => {
      console.log('gcs bucket =', answer)
      resolve(answer)
    })
  })
}

const main = async() => {
  const mongo = await question1()
  const auth = await question2()
  const cookieSecret = await question3()
  const gcsProjectID = await question4()
  const gcsBucket = await question5()

  rl.close()

  const config = `
exports.options = {
  'name': 'Keystone',
  'brand': 'Keystone',
  'less': 'public',
  'static': 'public',
  'favicon': 'public/favicon.ico',
  'views': 'templates/views',
  'view engine': 'jade',
  'mongo': '${mongo}',
  'cloudinary config': 'cloudinary://333779167276662:_8jbSi9FB3sWYrfimcl8VKh34rI@keystone-demo',
  'auto update': true,
  'session': true,
  'session store': 'mongo',
  'session store options':{
    autoRemove: 'interval',
    autoRemoveInterval: 10,
    touchAfter: 0,
    ttl: 14 * 24 * 60 * 60 * 1000,
  },
  'auth': ${auth},
  'user model': 'User',
  'cookie secret': '${cookieSecret}',
  'cookie signin options': {
    maxAge: 14 * 24 * 60 * 60 * 1000,
  },
  'gcs config': {
    projectId: '${gcsProjectID}', // Your projectId
    keyFilename: __dirname + '/gcskeyfile.json', // Your keyFilename path
    bucket: '${gcsBucket}',
  },
  'preview origin': 'http://localhost:3000',
};

exports.locals = {
  env: process.env,
};

exports.nav = {
  'people': ['users', 'contacts'],
  'content': ['posts', 'post-categories', 'topics', 'images', 'audios', 'videos', 'tags'],
};
  `

  const filepath = __dirname + '/config.js'

  fs.writeFile(filepath, config, { encoding: 'utf8' }, (err) => {
    if (err) {
      console.error(err)
    }

    console.log(`config is saved in ${filepath} successfully`)
  })
}

main()
