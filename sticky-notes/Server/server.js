const express = require("express");
const cors = require("cors");

const app = express();

// To fix cors origin error
app.use(cors(), express.urlencoded({ extended: false }));

// CDD
app.get("/appsettings", async (req, res) => {
  await sleep(1000);
  res.json({
    noteBoard: {
      mainHeader: "Add your notes",
    },
  });
});

app.post("/addnote", function (req, res) {
  const noteId = req.body.noteId;
  const noteHeader = req.body.noteHeader;
  const noteValue = req.body.noteValue;

  res.json({
    noteId: noteId,
    noteHeader: noteHeader,
    noteValue: noteValue,
  });
});

app.post("/editnote", function (req, res) {
  const noteId = req.body.noteId;
  const noteHeader = req.body.noteHeader;
  const noteValue = req.body.noteValue;

  res.json({
    noteId: noteId,
    noteHeader: noteHeader,
    noteValue: noteValue,
  });
});

app.get("/deletenote", function (req, res) {
  res.json({
    noteId: "",
    noteHeader: "",
    noteValue: "",
  });
});

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
