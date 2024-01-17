import { Router } from "express";

import * as AwardControler from "../controller/awardController"

const route=Router();
route.route("/").post(AwardControler.createAward)
.get(AwardControler.getAllAward);


route.route("/:id").patch(AwardControler.updateOneAward)
.get(AwardControler.getOneAward)
.delete(AwardControler.daleteOneAward);

export default route