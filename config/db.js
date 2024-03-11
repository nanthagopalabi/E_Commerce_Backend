import mongoose from "mongoose";

export async function dataBaseConnection() {
    try {
        const params = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };

        // Connect to MongoDB using the provided URL
        await mongoose.connect(process.env.MONGO_URL, params);

        // Once connected, log success message
        console.log("MongoDB connected");
    } catch (error) {
        // If an error occurs during connection, log the error
        console.error("MongoDB connection failed:", error);
    }
}
