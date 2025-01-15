const mongoose = require("mongoose");

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URL);

        const connection = mongoose.connection;

        connection.on("connected", () => {
            console.log("Connected to MongoDB");
        });

        connection.on("error", (error) => {
            console.error("MongoDB connection error:", error);
        });
    } catch (err) {
        console.error("Database connection failed:", err);
    }
}

module.exports = connectDB;
