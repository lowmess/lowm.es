const fs = require('fs')
const config = require('./vercel.json')
const URLs = require('./redirects.json')

function writeConfig() {
  const redirects = URLs.map(([source, destination, permanent]) => ({
    source,
    destination,
    // Kind of weird, but I have to do it this way because the 3rd item in the
    // array isn't always present (and thus, doesn't have a value)
    permanent: permanent === false ? false : true,
  }))

  const updatedConfig = {
    ...config,
    redirects,
  }

  fs.writeFileSync('./vercel.json', JSON.stringify(updatedConfig, null, 2))
}

writeConfig()
