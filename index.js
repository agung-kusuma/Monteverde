const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.json([
    {
      id: 1,
      nama: "Yanto",
      kelas: "TT-40-01",
    },
    {
      id: 2,
      nama: "Sugito",
      kelas: "TT-42-02",
    },
  ]);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});