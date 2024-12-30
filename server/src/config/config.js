const { config } = require('dotenv')
config()

const URL_MONGOOSE= process.env.URL_MONGOOSE;

module.exports = {
    URL_MONGOOSE
}