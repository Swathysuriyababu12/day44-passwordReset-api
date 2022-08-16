const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const connectDB = require("./connect");
const userRouter = require("./routes/users");
connectDB();
//database connection
app.use(cors());
res.header("Access-Control-Allow-Origin");

//midddlewares

app.use(express.json());

app.get("/", (req, res) => res.send(`Server Running`));
app.use("/api/user", userRouter);
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`listening to PORT ${PORT}`);
});
