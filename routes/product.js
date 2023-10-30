const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

router.post("/addProduct", async (req, res) => {
    try {
        const { title, description, brand, price } = req.body;
        console.log(req.body)
        const product = await Product.create({
            title,
            description,
            brand,
            price
        }); 
        res.status(201).json(product);
    
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
})

router.get("/getProducts", async (req, res) => {
    try {
        const product = await Product.find({});
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
})

router.get("/getProduct/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});

router.put("/updateProduct/:id", async (req, res) => {
    try {
        const { title, description, brand, price } = req.body;
        console.log(req.body)
        const product = await Product.findByIdAndUpdate(req.params.id, req.body);
        const products = await Product.find({})
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
})

router.delete("/deleteProduct/:id", async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});

router.delete("/deleteAllProduct", async (req, res) => {
    try {
        const product = await Product.deleteMany({});
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router; 