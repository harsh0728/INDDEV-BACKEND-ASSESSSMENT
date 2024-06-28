const express = require("express");
const app = express();

const userRoutes = require("./routes/userRoutes");
const database = require("./config/db");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 4000;

//database connect
database.connect();

//middlewares
app.use(express.json());
app.use(cookieParser());


//routes
app.use("/api/v1/auth", userRoutes);


//def route
app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running....",
  });
});


app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});
