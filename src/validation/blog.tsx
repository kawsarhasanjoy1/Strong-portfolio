import { z } from "zod";

export const BlogSchema = z.object({
    name: z.string().min(1,{message: 'name must required'}),
    what: z.string().min(1,{message: 'what must required'}),
    how: z.string().min(1,{message: 'how must required'}),
    image: z.string().min(1,{message: 'image must required'})
  })