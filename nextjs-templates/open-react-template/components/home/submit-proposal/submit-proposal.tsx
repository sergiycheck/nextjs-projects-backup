"use client";
import { useRef, useState, forwardRef } from "react";
import { InputFilled } from "../../common/InputFilled";
import { TextFieldFilled } from "../../common/TextFieldFilled";
import { ZodError } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  SubmitProposalSchema,
  SubmitProposalTextFieldsSchema,
  budgets,
  projectTypes,
  submitProposalSchema,
  submitProposalTextFieldsSchema,
} from "./schema";
import { Oval, OvalProps } from "react-loader-spinner";
import { TiTick } from "react-icons/ti";
import { ContainerWrapper } from "@/components/common/container-wrapper";
import Link from "next/link";

export const SubmitProposal = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const [selectedProjectType, setProjectType] = useState<string | null>(null);
  const [selectedBudget, setBudget] = useState<string | null>(null);

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean | null>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SubmitProposalTextFieldsSchema>({
    resolver: zodResolver(submitProposalTextFieldsSchema),
  });

  const resetForm = () => {
    setFile(null);
    setProjectType(null);
    setBudget(null);

    setError(null);
    setSuccess(null);
    reset();
  };

  const onSubmit: SubmitHandler<SubmitProposalTextFieldsSchema> = (data) => {
    const formData = new FormData();

    if (file) {
      // file validation happens in schema
      formData.append("file", file);
    }

    if (selectedProjectType) {
      formData.append("projectType", selectedProjectType);
    }

    if (selectedBudget) {
      formData.append("budget", selectedBudget);
    }

    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      submitProposalSchema.parse(Object.fromEntries(formData.entries()));
    } catch (err: any) {
      const zodError = err as ZodError<SubmitProposalSchema>;
      const errorMessagesWithPath = zodError.errors
        .map((error) => {
          return error.message;
        })
        .join("\n");
      setError(errorMessagesWithPath);
      return;
    }

    setIsSubmitting(true);

    fetch("/api/send-email", {
      method: "POST",
      body: formData,
    })
      .then(() => {
        setSuccess(true);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setTimeout(() => {
          setIsSubmitting(false);
          resetForm();
        }, 3000);
      });
  };

  return (
    <section id="request-proposal">
      <ContainerWrapper>
        <h1 className="text-4xl font-bold mb-4">Request a quote</h1>
        <p className="mb-8">
          Let's discuss your project! Please, provide us with a brief description of what you already have and what you
          are going to achieve.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            {/* success submit response message */}
            {isSubmitting && (
              <div
                className="absolute top-0 left-0 right-0 bottom-0 rounded-md flex justify-center items-center z-10 backdrop-blur-sm "
                data-aos="fade-up"
              >
                {isSubmitting && (
                  <>
                    {success ? (
                      <div className="h-fit w-fit p-4 rounded-full ring-1 ring-slate-100 bg-purple-700 ">
                        <TiTick className="text-white text-4xl" />
                      </div>
                    ) : (
                      <LoadingOval />
                    )}
                  </>
                )}
              </div>
            )}

            <div className="flex flex-col gap-4">
              <InputFilled {...register("name")} placeholder="Your name" />
              {errors.name?.message && <p className="text-xs text-red-500">{errors.name?.message}</p>}
              <InputFilled {...register("company")} placeholder="Your company name" />
              {errors.company?.message && <p className="text-xs text-red-500">{errors.company?.message}</p>}
              <div>
                <span className="font-semibold block mb-2">Project type</span>
                <div className="flex gap-2 flex-wrap">
                  {projectTypes.map((projectType) => (
                    <ButtonOption
                      key={projectType}
                      className={selectedProjectType == projectType ? "bg-zinc-800" : ""}
                      onClick={() => {
                        setProjectType(projectType);
                      }}
                    >
                      {projectType}
                    </ButtonOption>
                  ))}
                </div>
              </div>
              <label className="font-semibold" htmlFor="description">
                Describe your project in short
              </label>
              <TextFieldFilled {...register("description")} placeholder="Project description" />
              {errors.description?.message && <p className="text-xs text-red-500">{errors.description?.message}</p>}

              <div className="flex gap-2">
                <input ref={fileInputRef} type="file" onChange={handleFileChange} className="hidden"></input>
                <div
                  className="flex gap-2 cursor-pointer justify-center items-center"
                  onClick={() => {
                    if (fileInputRef.current) {
                      fileInputRef.current.click();
                    }
                  }}
                >
                  <PaperclipIcon className="text-white mr-2" />
                  <p className="text-md">attach file</p>
                  {file && <p className="p text-xs no-wrap truncate max-w-[200px]">{file.name}</p>}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <InputFilled {...register("email")} placeholder="Your email" />
              {errors.email?.message && <p className="text-xs text-red-500">{errors.email?.message}</p>}

              <div className="flex flex-col gap-4">
                <span className="font-semibold block mb-2">Project Budget</span>
                <div className="flex gap-2 flex-wrap">
                  {budgets.map((budget) => (
                    <ButtonOption
                      key={budget}
                      className={selectedBudget == budget ? "bg-zinc-800" : ""}
                      onClick={() => {
                        setBudget(budget);
                      }}
                    >
                      {budget}
                    </ButtonOption>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xs mt-8">
              By submitting this form I consent to having Brights collect and process my personal details and agree with{" "}
              <Link href="/privacy-policy" className="underline">
                Privacy Policy
              </Link>
            </p>
            {error && (
              <div className="bg-red-500 p-2 rounded-lg" data-aos="fade-up">
                <p className="text-white text-sm">{error}</p>
              </div>
            )}
            {success && (
              <div className="flex gap-2">
                <p className="text-xs" data-aos="fade-up">
                  Thank you for your request! We will contact you soon.
                </p>
                <TiTick className="text-white text-2xl" data-aos="fade-up" />
              </div>
            )}
            <div className="flex justify-center">
              <button
                type="submit"
                className={`btn text-white  bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out sm:w-[200px] w-full ${
                  isSubmitting ? "opacity-50 hover:none pointer-events-none" : ""
                }`}
              >
                <div className="flex gap-2 items-center">
                  <span className="text-sm">Send</span>
                  {isSubmitting && <LoadingOval />}
                </div>
              </button>
            </div>
          </div>
        </form>
      </ContainerWrapper>
    </section>
  );
};

const LoadingOval = (props: OvalProps) => (
  <Oval
    visible={true}
    height="30"
    width="30"
    color="white"
    secondaryColor="gray"
    ariaLabel="oval-loading"
    wrapperClass="oval-wrapped-loading"
    {...props}
  />
);

function PaperclipIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
    </svg>
  );
}

const ButtonOption = forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        {...props}
        className={`p-3 bg-transparent border rounded-lg border-gray-600 text-white active:bg-zinc-800 transition duration-150 ease-in-out ${
          props.className ?? ""
        }`}
      >
        {children}
      </button>
    );
  }
);
