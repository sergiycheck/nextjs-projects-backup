"use client";

import { useFormState } from "react-dom";

export function Form({
  children,
  action,
}: {
  children: React.ReactNode;
  action: (prevState: any, formData: FormData) => Promise<ActionResult>;
}) {
  const [state, formAction] = useFormState(action, {
    error: null,
  });
  return (
    <form className="max-w-sm mx-auto" action={formAction}>
      {children}
      <p className="text-xm text-red-600">{state.error}</p>
    </form>
  );
}

export interface ActionResult {
  error: string | null;
}
