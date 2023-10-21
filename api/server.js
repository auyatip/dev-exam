const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const itemRoute = require("./routes/itemRoute");
const app = express();
dotenv.config();
connectDB();

// Port
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Node Server",
  });
});

//middelwares
app.use(cors()); // Server Port = 8000 || client Port = 3000 >> going to Error !! but Cors Help it
app.use(express.json());

//routes
app.use("/", itemRoute);

//listen
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
