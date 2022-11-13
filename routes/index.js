const express = require("express");
const router = express.Router();
// any route that isn't followed by something (ie. top-level routes)

// @desc    Login/Landing Page
// @route   GET /
router.get("/", (req, res) => {
  res.render("login", {
    layout: "login",
  });
});

// @desc    Dashboard
// @route   GET /dashboard
router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

module.exports = router;
