import { z } from "zod";

export const skillSchema = z.object({
  name: z.string().min(1, { message: "name must required" }),
  image: z.any(),
 
});
