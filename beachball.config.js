const path = require("path");

module.exports = {
    path: `${path.resolve(__dirname)}/dist`,
    branch: "origin/master",
    registry: "https://npm.pkg.github.com",
};
