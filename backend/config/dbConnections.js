const mongoose = require("mongoose");
const { use } = require("../routes/authRoutes");

mongoose.set("strictQuery", false);
const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URL,{useUnifiedTopology:true});
        console.log(`MongoDB connected: ${connect.connection.host} ${connect.connection.name}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

module.exports = connectDb;