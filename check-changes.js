const config = require('./vercel.json')
const redirects = require('./redirects.json')

if (config.redirects.length !== redirects.length) {
  console.warn('Redirects have changed. Please commit new redirects.')
  process.exit(1)
}
