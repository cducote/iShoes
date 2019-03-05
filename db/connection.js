require('dotenv').config()

const mongoose = require('mongoose')

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI)
} else {
  mongoose.connect('mongodb://localhost/iShoes')
}
mongoose.connection.on('error', function(err) {
  console.error("MongoDB connection error: " + err)
  process.exit(-1)
})
mongoose.connectionl.once("open", function() {
  console.log("Mongoose has connect to MongoDB!")
})

module.exports = mongoose