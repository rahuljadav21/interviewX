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
const interviewXpRoutes = require("./routes/interviewXpRoutes");
const adminRoutes = require("./routes/adminRoutes");
const cors = require('cors');

connectDb();
const app = express();
app.use(cors());
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/profiles", profileRoutes);
app.use("/api/v1/interviews", interviewRoutes);
app.use("/api/v1/companies", companyRoutes);
app.use("/api/v1/interviewXps", interviewXpRoutes);
app.use("/api/v1/admin",adminRoutes);

app.use(errorHandler);
app.use(cors({ credentials: true,origin: 'http://localhost:3000'}));

app.listen(5000, () => {
    console.log(`Server running on ${port}`);
});