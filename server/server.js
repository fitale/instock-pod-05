const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

app.use(express.json());

const inventoryRoute = require("./routes/api/inventory");
app.use("/api/inventory", inventoryRoute);

app.listen(5000, function() {
  console.log("server is running on port 5000");
});

// Response is an object in the form of { status: 'message' },
// where message is either a successful login, or an invalid email/password
app.get("/login", (req, res) => {
  const { email, password } = req.body;
  res.send("login");
});
