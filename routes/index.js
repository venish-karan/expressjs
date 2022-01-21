const router = require("express").Router();

const apiKeyMiddleware = require("../middlewares/apiKey");

// all url or all router level middleware
// router.use(apiKeyMiddleware);

router.get("/", (req, res) => {
  //   res.sendFile(path.resolve(__dirname) + "/index.html");
  res.render("index", {
    title: "My Home Page",
  });
});

router.get("/about", (req, res) => {
  //   res.sendFile(path.resolve(__dirname) + "/about.html");
  res.render("about", {
    about: "My About Page",
  });
});

router.get("/download", (req, res) => {
  res.download(path.resolve(__dirname) + "/about.html");
});

// router.get("/api/products", apiKeyMiddleware, (req, res)
router.get("/api/products", [apiKeyMiddleware], (req, res) => {
  res.json([
    {
      id: "123",
      name: "chrome",
    },
    {
      id: "124",
      name: "firefox",
    },
  ]);
});

module.exports = router;
