const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const conversationRoutes = require("./routes/conversations");
const messageRoutes = require("./routes/messages.js");

dotenv.config();
const PORT = 8000;
const app = express();

mongoose.connect(process.env.MONGO_DB_URL, () => {
	console.log("Connected to Mongo DB!");
});

app.use(express.json());
app.use(cors());

//Routes
app.use("/v1/auth", authRoutes);
app.use("/v1/conversations", conversationRoutes);
app.use("/v1/messages", messageRoutes);
app.use("/v1/user", userRoutes);

app.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`);
});
