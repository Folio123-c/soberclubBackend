import { Router } from "express";

import * as ServiceControler from "../controller/serviceControler"

const route=Router();
route.route("/").post(ServiceControler.createService)
.get(ServiceControler.getAllService);


route.route("/:id").patch(ServiceControler.updateOneService)
.get(ServiceControler.getOneService)
.delete(ServiceControler.daleteOneService);

export default route