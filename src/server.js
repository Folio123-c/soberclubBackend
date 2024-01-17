import express from "express";
import "dotenv/config";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import routes from "./routes";
import cors from "cors";
const app=express();
app.use(cors());
app.use(bodyParser.json());
app.use("/v1/soberclub",routes)
app.get('/', (req, res) => {
  res.send('Hello World')
})
const dbUrl=process.env.DATABASE_URL;
mongoose
  .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(
      `Database connected succesfully
      `
    )});
const port=process.env.PORT || 9090;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})