// 1- serv part modules
require("dotenv").config();
const express= require("express"),
cors = require("cors"),
morgan = require("morgan");

// 2- modules import from folders
const dbConnection = require("./config/database"),
bookRoutes = require("./routes");

// Connect DB
dbConnection();

// Express App
const app = express();

// Enable other domains to access my application
app.use(cors());
app.options("*", cors());

// Middlewares
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log(`mode: ${process.env.NODE_ENV}`);
} else {
  console.log("Production Mode");
}

app.use(express.json({ limit: "20kb" })); // parsing data to convert to json & limit data sending 20kb


// Routes
app.use("/api/v1/books",bookRoutes)

// Error handling route (unhandled routes)
app.all("*", (req, res, next) => {
  next(res.status(400).json(`Can't find this route ${req.originalUrl}`))
});

// Listenning app
const  PORT  = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Listineng on Port ${PORT}`);
});

// Unhandling rejection Error (Outside Express) like: db connection
process.on("unhandledRejection", (err) => {
  console.log(`UnhandledRejection Error: ${err}`);
  server.close();
  console.log("Shutting down server...");

  process.exit(1);
});