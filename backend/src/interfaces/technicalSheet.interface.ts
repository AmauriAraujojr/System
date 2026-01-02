import { z } from "zod";
import { DeepPartial, Repository } from "typeorm";
import TechnicalSheet from "../entities/technicalSheet.entity";
import { alltechinicalSheetReadSchema, techinicalSheetCreateSchema, techinicalSheetReadSchema } from "../schemas/technicalSheet.schema";


type createTechnicalSheet= z.infer<typeof techinicalSheetCreateSchema>;
type readTechnicalSheet= z.infer<typeof techinicalSheetReadSchema>;
type updateTechnicalSheet= DeepPartial<TechnicalSheet>;
type allTechnicalSheet= z.infer<typeof alltechinicalSheetReadSchema>;
type repositoryTechnicalSheet= Repository<TechnicalSheet>;

export {
  allTechnicalSheet,
  createTechnicalSheet,
  updateTechnicalSheet,
  readTechnicalSheet,
  repositoryTechnicalSheet,
};
