import { EmailTemplate } from "../../../../components/common/email-templates/email-template";
import { Resend } from "resend";
import * as React from "react";
import { SubmitProposalSchema, submitProposalSchema } from "@/components/home/submit-proposal/schema";
import { ZodError } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const formData = await request.formData();
  const body = Object.fromEntries(formData) as SubmitProposalSchema;

  // validate body with zod schema
  try {
    await submitProposalSchema.parseAsync(body);
  } catch (err) {
    const error = err as unknown as ZodError;
    const messages = error.issues.map((issue) => issue.message);
    return Response.json({ messages }, { status: 400 });
  }

  try {
    const { file, ...dataTextFields } = body;

    let payload: any = {
      from: "Craft Studio request <onboarding@resend.dev>",
      to: ["cra4t.stud1o@gmail.com"],
      subject: "New proposal",
      react: EmailTemplate(dataTextFields) as React.ReactElement,
    };

    if (file) {
      const attachmentContent = await file.arrayBuffer();
      payload = {
        ...payload,
        attachments: [
          {
            filename: file.name,
            content: Buffer.from(attachmentContent),
          },
        ],
      };
    }

    const { data, error } = await resend.emails.send({
      ...payload,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
