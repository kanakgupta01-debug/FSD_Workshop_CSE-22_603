// Q5: Bakery Website using Express.js

const express = require("express");
const app = express();

const PORT = 3002;

// Home page
app.get("/", (req, res) => {
    res.send(`
        <html>
            <head><title>Sweet Treats Bakery - Home</title></head>
            <body>
                <h1>Sweet Treats Bakery</h1>
                <h2>Welcome to our bakery!</h2>
                <p>Freshly baked happiness, made with love.</p>
                <a href="/menu">View Menu</a> |
                <a href="/contact">Contact Us</a>
            </body>
        </html>
    `);
});

// Menu page
app.get("/menu", (req, res) => {
    res.send(`
        <html>
            <head><title>Our Menu</title></head>
            <body>
                <h1>Our Bakery Menu</h1>
                <ul>
                    <li>Chocolate Cake</li>
                    <li>Vanilla Cake</li>
                    <li>Chocolate Pastry</li>
                    <li>Red Velvet Pastry</li>
                    <li>Cookies</li>
                    <li>Brownies</li>
                </ul>
                <a href="/">Home</a> |
                <a href="/contact">Contact Us</a>
            </body>
        </html>
    `);
});

// Contact page
app.get("/contact", (req, res) => {
    res.send(`
        <html>
            <head><title>Contact Us</title></head>
            <body>
                <h1>Contact Sweet Treats Bakery</h1>
                <p>Phone: +91 98765 43210</p>
                <p>Address: Shop No. 12, Main Market, Ghaziabad, Uttar Pradesh</p>
                <a href="/">Home</a> |
                <a href="/menu">View Menu</a>
            </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Bakery website is running at http://localhost:${PORT}`);
});
