const server = require("./server.js");
const port = process.env.PORT || 3000;
const dbCon = require("./config/dbConf.js");

dbCon()
  .then(() => {
    server.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((error) => console.error(error));
