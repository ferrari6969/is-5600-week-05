// db.js
const mongoose = require('mongoose')

/**
 * In this example we are connecting to a local MongoDB instance. This instance is running via docker-compose in our GitHub Codespaces environment.
 * In a real-world application, you would want to use a cloud-based MongoDB service like MongoDB Atlas.
 */
mongoose.connect(
  process.env.MONGODB_URI || "mongodb+srv://srivallabhtippa:qwerty12345@cluster0.1mgb8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)

module.exports = mongoose