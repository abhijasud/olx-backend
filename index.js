const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const apiRouter = require("./routes/classified");

require('dotenv').config();
const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}).then(() => {
	console.log("Connected to mongodb");
}).catch(() => {
	console.log("failed to connect to mongodb");
})
app.use(cors());
app.use(express.json());

app.use("/api/classified", apiRouter);


app.listen(port);