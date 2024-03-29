
const express = require("express")
const mongoConnect = require("./db/db")
const bookRoutes = require("./routes/route.js")
const cors = require("cors")
const app = express()

port = 5001

app.use(
  cors({
    origin: "https://addbookscardanyonecanvisit.netlify.app",
  })
);

app.use(express.json());

mongoConnect(); 

app.get("/hello",(req, res)=>{
    res.send("hello word")
})

app.use("/api", bookRoutes);


async function startServer() {
    try {
      app.listen(port, () => {
        console.log("server is conneceted", port );
      });
    } catch (error) {
      console.error("Error connecting to database:", error);
    }
  }
startServer();