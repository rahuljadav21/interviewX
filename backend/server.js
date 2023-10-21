const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnections");
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const profileRoutes = require("./routes/profileRoutes");
const interviewRoutes = require("./routes/interviewRoutes");
const companyRoutes = require("./routes/companyRoutes");


connectDb();
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/profiles", profileRoutes);
app.use("/api/v1/interviews", interviewRoutes);
app.use("/api/v1/companies", companyRoutes);

app.use(errorHandler);

app.listen(5000, () => {
    console.log(`Server running on ${port}`);
});