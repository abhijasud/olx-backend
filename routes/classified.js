const router = require("express").Router();
const Ad = require('../models/Ad');



router.post('/create', async (req, res) => {
	try {
		const {name, description, category, image, location, price} = req.body;
		const newAd = new Ad({
			name,
			description,
			category,
			image,
			location,
			price,
		})
		await newAd.save();
		res.json({
			message: "Ad posted succesfully",
		})
	} catch (error) {
		res.status(500).json({message: "internal server error"});
		console.log(error);
	}
})

router.get("/", async (req, res) => {
	try {
		const {category, page, search, sort} = req.query;
		let query = {};
		// console.log(category);
		if(category){
			query.category = category;
		}
		if(search){
			query.name = { $regex: new RegExp(search, "i") };
		}
		const sortOptions = {postedAt : 1};
		if(sort === "desc"){
			sortOptions.postedAt = -1; 
		}

		const ads = await Ad.find(query).limit(4).skip(page*4).sort(sortOptions);
		res.json(ads);

	} catch (error) {
		res.status(500).json({message: "Internal server Error"});
	}
})






module.exports = router;