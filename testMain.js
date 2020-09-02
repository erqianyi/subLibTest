const testCommon = require("./common/test");

module.exports = function() {
  setTimeout(() => {
    testCommon();
  }, 3000);
}

