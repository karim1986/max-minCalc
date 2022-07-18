const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middlewares/errorMiddleware");
const connectDB = require("./config/db");
const app = express();
const port = process.env.PORT || 8888;

connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", require("./routes/userRoute"));
app.use("/api/dnd", require("./routes/dndRoute"));
app.use("/api/recommendeddnp", require("./routes/recommendedDnpRoute"));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`.yellow));
