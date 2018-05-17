// This file doesn't not go through babel or webpack transformation.
// Make sure the syntax and sources this file requires are compatible with the current node version you are running
// See https://github.com/zeit/next.js/issues/1245 for discussions on Universal Webpack or universal Babel
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const env = require('./env')
const dev = process.env.NODE_ENV !== 'production'
const customRouter = require('./customRouter')
// quiet: if show log in terminal when node run, error msg & log data , false = show
const app = next({ dev, quiet: false })
const handle = app.getRequestHandler()
app.prepare().then(() => {
  createServer((req, res) => {
    console.log(req.url)
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl

    //logger.fileLog(`${__dirname}/storage/log`, 'serverLog.log', pathname)
    if (customRouter[pathname]) {
      app.render(req, res, customRouter[pathname].path, query)
    } else {
      handle(req, res, parsedUrl)
    }
    // if (pathname === '/') {
    //   app.render(req, res, '/portal/guess', query)
    // } else if (pathname === '/b') {
    //   app.render(req, res, '/a', query)
    // } else {
    //   handle(req, res, parsedUrl)
    // }
  }).listen(env.process.env.SERVER_PORT, err => {
    console.log('error', err)
    if (err) {
      throw err
    }
    console.log(`--------------- start custom server ---------------`)
    console.log(`> Ready on http://localhost:${env.process.env.SERVER_PORT}`)
  })
})
