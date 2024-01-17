import ServiceModel from "../models/services"
import {create,getAll,getOneById,updateOneById,deleteOneById} from "./globalControler";

export const createService =create(ServiceModel)
export const getAllService =getAll(ServiceModel);
export const getOneService =getOneById (ServiceModel)
export const updateOneService =updateOneById (ServiceModel)
export const daleteOneService =deleteOneById (ServiceModel)