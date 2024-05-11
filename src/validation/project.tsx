import { z } from "zod";

export const projectSchema = z.object({
  name: z.string().min(1, { message: "name must required" }),
  image: z.any(),
  liveLink: z.string().min(0, { message: "liveLink must required" }),
  githubLink: z.string().min(0, { message: "githubLink must required" }),
  description: z.string().min(0, { message: "description must required" }),
});
