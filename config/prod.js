// prod.js -- production keys here

module.exports = {
  mongoURI: 'process.env.MONGO_URI',
  google: {
    clientID: 'process.env.GOOGLE_CLIENT_ID',
    clientSecret: 'process.env.CLIENT_SECRET',
  },
  cookieKey: 'process.env.COOKIE_KEY'
}