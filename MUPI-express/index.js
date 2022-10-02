const express = require("express");
const serviceRouter = require("./routes/service.route");
const PORT = process.env.PORT || 8081;

const app = express();

app.use(express.json());
app.use("/api", serviceRouter);

app.listen(PORT, () => console.log("server started"));
