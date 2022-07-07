const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(require("./routes/todo.route"))
mongoose
  .connect(
    "mongodb+srv://tamer:zebralun95@cluster0.o5vj7.mongodb.net/fullstack?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("успешно соеденились с сервером MongoDB"))
  .catch(() => console.log("ошибка при соеденении с сервером MongoDB"));

const port = 4000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
