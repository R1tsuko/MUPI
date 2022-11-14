const express = require("express");
const cors = require("cors");
const serviceRouter = require("./routes/service.route");
const PORT = process.env.PORT || 8081;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", serviceRouter);

app.listen(PORT, () => console.log("server started"));
