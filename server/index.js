
  const express = require('express');
  const app = express();
  const router = require("./routes/routes");
  const path = require('path');
  const cors = require('cors');

  app.use(cors());
  app.use(express.json());
  app.use(express.static(path.join(__dirname, '../dist')));
  app.use("/reviews", router);

  app.listen(3001, () => {
    console.log(`Listening on port 3001`);
  });
