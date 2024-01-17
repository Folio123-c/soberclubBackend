import AwardModel from "../models/award"
import {create,getAll,getOneById,updateOneById,deleteOneById} from "./globalControler";

export const createAward =create(AwardModel)
export const getAllAward =getAll(AwardModel);
export const getOneAward =getOneById (AwardModel)
export const updateOneAward =updateOneById (AwardModel)
export const daleteOneAward =deleteOneById (AwardModel)