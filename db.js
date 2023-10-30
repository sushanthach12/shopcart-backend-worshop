const { MongoClient } = require("mongodb")
const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            family: 4
        })
        console.log('Mongo connected')
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB;