const mongoose = require("mongoose");


const AdSchema = mongoose.Schema({
	name: {
		required: true,
		type: String
	},
	description: {
		required: true,
		type: String,
	},
	category: {
		type: String,
		enum: ["slothing", "electronics", "furniture", "other"],
		default: "other",
	},
	image: {
		type: String,
		required: true,
	},
	location: {
		type: String,
		required: true,
	},
	postedAt: {
		type: Date,
		default: Date.now,
	},
	price: {
		type: Number,
		required: true,
	},
})

module.exports = mongoose.model("Ad", AdSchema);