import { ZodError, z } from "zod";

export const budgets = ["< $50k", "$50k - 100k", "$100k - 200k", "> $200k"] as const;
export const projectTypes = ["Web App", "Mobile App", "SaaS", "Marketplace", "Website"] as const;

export const submitProposalTextFieldsSchema = z.object({
  name: z.string().optional(),
  company: z.string().optional(),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .max(100, {
      message: "Email is too long",
    })
    .email({ message: "Email is invalid" }),
  description: z.string().optional(),
});

export type SubmitProposalTextFieldsSchema = z.infer<typeof submitProposalTextFieldsSchema>;

export const MAX_FILE_SIZE = 5 * 1024 * 1024;

export function validateFile(file: File) {
  if (file && file.size > MAX_FILE_SIZE) {
    const zodError = new ZodError([
      {
        fatal: true,
        message: `File is too big. Max file size is ${MAX_FILE_SIZE / 1024 / 1024} MB`,
        code: "too_big",
        path: ["file"],
        maximum: MAX_FILE_SIZE,
        inclusive: true,
        type: "string",
      },
    ]);
    throw zodError;
  }
  return true;
}

export const submitProposalSchema = submitProposalTextFieldsSchema.extend({
  projectType: z.enum([...projectTypes]).optional(),
  budget: z.enum([...budgets]).optional(),
  file: z
    .any()
    .refine((file) => {
      return validateFile(file);
    })

    .optional(),
});

export type SubmitProposalSchema = z.infer<typeof submitProposalSchema>;
