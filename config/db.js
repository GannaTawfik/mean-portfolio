const mongoose = require('mongoose');

const connectToDB = async () => {
    try {
        console.log("Attempting to connect to MongoDB...");
        await mongoose.connect('mongodb://gannnaatawfiikk:3PTrMbJfRqLxtNf6@cluster0-shard-00-00.mongodb.net:27017,cluster0-shard-00-01.mongodb.net:27017,cluster0-shard-00-02.mongodb.net:27017/portfolioDB?ssl=true&replicaSet=atlas-xyz-shard-0&authSource=admin&retryWrites=true&w=majority');
        console.log('Connected to MongoDB Atlas');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
};

module.exports = connectToDB;
