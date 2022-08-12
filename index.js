const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const connectDB = require("./connect");
const userRouter = require("./routes/users");

//database connection

connectDB();

//midddlewares

app.use(express.json());
app.use(cors());
app.use("/api/user", userRouter);
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`listening to PORT ${PORT}`);
});
