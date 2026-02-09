import z from "zod";

export const accountsCreateSchema = z.object({
  name: z.string().min(1, "Name is required"),
});

export type AccountsCreateFormValues = z.infer<typeof accountsCreateSchema>;
