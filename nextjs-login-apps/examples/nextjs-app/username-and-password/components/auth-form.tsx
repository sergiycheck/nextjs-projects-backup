import { Label, Input, Button } from "@/components/form-components";
import { Form } from "@/components/form";
import Link from "next/link";
import type { ActionResult } from "@/components/form";

export const AuthForm = ({
  action,
  formFields,
}: {
  action: (prevState: any, formData: FormData) => Promise<ActionResult>;
  formFields: {
    header: string;
    linkData: {
      href: string;
      text: string;
    };
  };
}) => {
  return (
    <div className="grid sm:grid-cols-3 sm:grid-rows-3 h-full">
      <div className="wrapper col-span-1 col-start-2 row-start-2">
        <h1 className="text-4xl">{formFields.header}</h1>
        <Form action={action}>
          <div className="sy-5">
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              name="username"
              id="username"
              placeholder=""
              autocomplete="username"
            />
          </div>

          <div className="sy-5">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder=""
              autocomplete="current-passpord"
            />
          </div>

          <div className="mt-5 flex sm:justify-between items-end">
            <Link href={formFields.linkData.href}>{formFields.linkData.text}</Link>
            <Button>Continue</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
