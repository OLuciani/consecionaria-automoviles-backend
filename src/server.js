require('dotenv').config();

const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "../public")));



app.use(express.urlencoded({ extended: false }));

app.use(express.json());

const cors = require("cors");
  app.use(cors());
const methodOverride = require("method-override"); //descomentar y requerir el modulo methodOverride con npm install
app.use(methodOverride('_method'));


/* app.set("view engine", "ejs");
app.set("views", "src/views"); */

app.set('views', path.join(__dirname, '/views'));  //Con estas dos lineas de codigo tambien anda
app.set('view engine', 'ejs');

const mainRoute = require("./routes/mainRoute");
const apiRoute = require("./routes/apiRoute");
const productsRoute = require("./routes/productsRoute")

app.listen(process.env.PORT, () => console.log("Server running"));

app.use("/", mainRoute);
app.use("/api", apiRoute);
app.use("/products", productsRoute);