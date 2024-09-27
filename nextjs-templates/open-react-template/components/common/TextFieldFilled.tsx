import { ChangeEventHandler, FC, FormEventHandler, ReactNode, forwardRef, useId } from "react";

interface TextFieldFilledProps {
  cols?: number;
  id?: string;
  leftElement?: ReactNode;
  name?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  onSubmit?: FormEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
  rightElement?: ReactNode;
  rows?: number;
  type?: string;
  value?: string;
}

const TextFieldFilled = forwardRef<HTMLTextAreaElement, TextFieldFilledProps>((props, ref) => {
  const {
    cols,
    id,
    leftElement,
    name,
    onChange,
    onSubmit,
    placeholder = "Placeholder",
    rightElement,
    rows = 4,
    type,
    value,
    ...rest
  } = props;

  const formId = useId();
  return (
    <div className="relative flex w-full rounded-t-[8px]">
      {leftElement && (
        <div className="absolute flex h-[56px] w-[56px] items-center justify-center">
          <div className="text-gray-500">{leftElement}</div>
        </div>
      )}
      <textarea
        ref={ref}
        id={id || formId}
        onChange={onChange}
        onSubmit={onSubmit}
        name={name}
        cols={cols}
        rows={rows}
        value={value}
        style={{ boxShadow: "none" }}
        autoComplete={"off"}
        className={`
          peer
          flex
          w-full
          rounded-t-[8px]
          border-x-0
          border-t-0
          border-b-2
          border-indigo-200
          bg-indigo-50
          px-[12px]
          pt-[26px]
          pr-[48px]
          text-body-medium
          text-gray-900
          placeholder-transparent
          focus:border-indigo-500
          focus:outline-none
          dark:border-gray-700
          dark:bg-gray-800
          dark:text-white
          dark:focus:border-indigo-500
          sm:pt-[28px]
          ${leftElement ? "pl-[60px]" : ""}
        `}
        placeholder={placeholder}
        {...props}
      />
      <label
        htmlFor={id || formId}
        className={`
          absolute
          top-[0px]
          cursor-text
          rounded-br-[8px]
          rounded-tl-[8px]
          
          px-[12px]
          pb-[6px]
          pt-[6px]
          text-body-small
          text-gray-500
          transition-all
          peer-placeholder-shown:top-[17px]
          peer-placeholder-shown:text-body-medium
          peer-placeholder-shown:text-gray-500
          peer-focus:-top-[-0px]
          peer-focus:text-body-small
          peer-focus:text-gray-500
          peer-focus:text-xs
          dark:peer-placeholder-shown:text-gray-500
          ${leftElement ? "left-[48px]" : ""}
        `}
      >
        {placeholder}
      </label>
      {rightElement && (
        <div className="absolute right-2 flex h-[56px] w-[56px] items-center justify-end dark:text-white">
          <div>{rightElement}</div>
        </div>
      )}
    </div>
  );
});

export { TextFieldFilled };
