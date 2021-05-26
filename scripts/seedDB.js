const mongoose = require("mongoose");
const db = require("../models");
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI);

const menuSeed = [
  {
    name: "Biscotti",
    category: "Cookies & Cannolis",
    pricing: {
      MezzaDozzina: 15,
      Dozzina: 25,
    },
  },
  {
    name: "Pizelle (Chocolate & Vanilla)",
    category: "Cookies & Cannolis",
    pricing: {
      MezzaDozzina: 15,
      Dozzina: 25,
    },
  },
  {
    name: "Nutella Sea Salt Cookies",
    category: "Cookies & Cannolis",
    pricing: {
      MezzaDozzina: 15,
      Dozzina: 25,
    },
  },
  {
    name: "Bourbon Caramel Pretzel Cookies",
    category: "Cookies & Cannolis",
    pricing: {
      MezzaDozzina: 15,
      Dozzina: 25,
    },
  },
  {
    name: "S'Mores Stuffed Chocolate Chip Cookies",
    category: "Cookies & Cannolis",
    pricing: {
      MezzaDozzina: 15,
      Dozzina: 25,
    },
  },
  {
    name: "Ultimate Brownies",
    category: "Brownies, Bars & Bites",
    pricing: {
      MezzaDozzina: 15,
      Dozzina: 25,
      Tray: 35,
    },
  },
  {
    name: "Salted Pretzel Chocolate Chip Snickers Bar",
    category: "Brownies, Bars & Bites",
    pricing: {
      MezzaDozzina: 15,
      Dozzina: 25,
      Tray: 35,
    },
  },
  {
    name: "Brown Butter Bites",
    category: "Brownies, Bars & Bites",
    pricing: {
      MezzaDozzina: 15,
      Dozzina: 25,
      Tray: 35,
    },
  },
  {
    name: "S'Mores Cups",
    category: "Brownies, Bars & Bites",
    pricing: {
      MezzaDozzina: 15,
      Dozzina: 20,
    },
  },
  {
    name: "Oreo Truffles",
    category: "Brownies, Bars & Bites",
    pricing: {
      MezzaDozzina: 15,
      Dozzina: 20,
    },
  },
  {
    name: "Cookie Dough Cheesecake Bites",
    category: "Brownies, Bars & Bites",
    pricing: {
      MezzaDozzina: 15,
      Dozzina: 25,
      Tray: 35,
    },
  },
  {
    name: "Cannolis",
    category: "Cookies & Cannolis",
    pricing: {
      MezzaDozzina: 18,
      Dozzina: 30,
    },
  },
  {
    name: "Blueberry Crumble Bars",
    category: "Vegan Gluten Free Goodies",
    pricing: {
      MezzaDozzina: 15,
      Dozzina: 25,
      Tray: 35,
    },
  },
  {
    name: "Apple Crumble Bars",
    category: "Vegan Gluten Free Goodies",
    pricing: {
      MezzaDozzina: 15,
      Dozzina: 25,
      Tray: 35,
    },
  },
  {
    name: "Pistachio Oat Squares",
    category: "Vegan Gluten Free Goodies",
    pricing: {
      MezzaDozzina: 15,
      Dozzina: 25,
      Tray: 30,
    },
  },
  {
    name: "Chocolate Raspberry Pie",
    category: "By The Slice",
    pricing: {
      Slice: 5,
      HalfPie: 15,
      WholePie: 25,
    },
  },
  {
    name: "Lemon Poppyseed Loaf",
    category: "By The Slice",
    pricing: {
      Slice: 5,
      HalfPie: 15,
      WholePie: 25,
    },
  },
  {
    name: "Blueberry Lemon Poppyseed Custard Cake",
    category: "By The Slice",
    pricing: {
      Slice: 5,
      HalfPie: 15,
      WholePie: 25,
    },
  },
  {
    name: "Cannoli Cheesecake",
    category: "By The Slice",
    pricing: {
      Slice: 6,
      HalfPie: 18,
      WholePie: 30,
    },
  },
];

db.MenuItem.remove({})
  .then(() => db.MenuItem.collection.insertMany(menuSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
  });
