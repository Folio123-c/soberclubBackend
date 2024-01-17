import AboutModel from "../models/about"
import {create,getAll,getOneById,updateOneById,deleteOneById} from "./globalControler";

export const createAbout =create(AboutModel);
// export const imageUpload = addImage(AboutModel);
export const getAllAbout =getAll(AboutModel);
export const getOneAbout =getOneById (AboutModel)
export const updateOneAbout =updateOneById (AboutModel)
export const daleteOneAbout =deleteOneById (AboutModel)