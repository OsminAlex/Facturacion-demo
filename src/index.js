const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`App corriendo en el puerto ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`App corriendo en el puerto ${PORT}`);
});
