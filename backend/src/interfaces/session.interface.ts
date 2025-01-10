import { z } from "zod";
import { sessionSchema } from "../schemas/session.schema";

type login = z.infer<typeof sessionSchema>;
type sessionReturn = { token: string };

export { login, sessionReturn };
