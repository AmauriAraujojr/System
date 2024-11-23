import { z } from "zod";
import { addressCreateSchema, addressUpdateSchema } from "./address.schema";

const clientSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(100),
  phoneNumber: z.string().max(100),
 
});

const clientCreateSchema = clientSchema.omit({ id: true }).extend({address:addressCreateSchema});

const clientReadSchema = clientSchema.extend({address:addressCreateSchema});

const allClientReadSchema = clientReadSchema.array();

const clientUpdateSchema = clientCreateSchema.omit({address:true}).extend({address:addressUpdateSchema}).partial();

export {
  allClientReadSchema,
  clientSchema,
  clientCreateSchema,
  clientReadSchema,
  clientUpdateSchema,
};
