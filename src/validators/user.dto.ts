import { z } from "zod";

export const createUserDTO = z.object({
  body: z.object({
    nombre: z.string().min(1, "Nombre es requerido"),
    edad: z
      .number({ invalid_type_error: "Edad debe ser un numero entero" })
      .min(1, "Edad es requerida"),
  }),
});
