import express  from "express";
import aboutRoute from "./aboutRoute"
import awardRoute from "./awardRoute"
import serviceRoute from "./serviceRoute"
import uploadRoute from "./uploadRoutes"
const app =express();
app.use("/about",aboutRoute)
app.use("/award",awardRoute)
app.use("/service",serviceRoute)
app.use("/upload",uploadRoute)

export default app;