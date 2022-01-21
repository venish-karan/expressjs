const express = require("express");
const path = require("path");
const app = express();
// Creating the server
const PORT = process.env.PORT || 3000;

// const apiKeyMiddleware = require("./middlewares/apiKey");

//global level middleware => where middleware applies to all files
// app.use(apiKeyMiddleware);

// set() method does key value pair stores in app or container and we can get it
app.set("view engine", "ejs");

// console.log(app.get("views"));

//if we want our files to stored in templates but not in views
// app.set(key,value)

// app.set("views", path.resolve(__dirname) + "templates");
console.log(app.get("view engine"));

// app.use(express.static("public"));

const mainRouter = require("./routes/index");

app.use(mainRouter);

// app.use("/en", mainRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
