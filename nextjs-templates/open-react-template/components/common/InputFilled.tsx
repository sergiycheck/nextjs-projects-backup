import { ChangeEventHandler, FC, FormEventHandler, ReactNode, forwardRef, useId } from "react";

interface InputFilledProps {
  id?: string;
  cols?: number;
  leftElement?: ReactNode;
  name?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onSubmit?: FormEventHandler<HTMLInputElement>;
  placeholder?: string;
  rightElement?: ReactNode;
  rows?: number;
  type?: string;
  value?: string;
}

const InputFilled = forwardRef<HTMLInputElement, InputFilledProps>((props, ref) => {
  const {
    id,
    leftElement,
    name,
    onChange,
    onSubmit,
    placeholder = "Placeholder",
    rightElement,
    rows,
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
      <input
        ref={ref}
        id={id || formId}
        onChange={onChange}
        onSubmit={onSubmit}
        name={name}
        value={value}
        style={{ boxShadow: "none" }}
        type={type || "text"}
        autoComplete={"off"}
        className={`
          peer
          flex
          h-[56px]
          w-full
          rounded-t-[8px]
          border-x-0
          border-t-0
          border-b-2
          border-indigo-200
          bg-indigo-50
          px-[12px]
          pt-[26px]
          text-body-medium
          text-gray-900
          placeholder-transparent
          focus:border-indigo-500
          focus:outline-none
          dark:border-gray-700
          dark:bg-gray-800
          dark:text-white
          dark:focus:border-indigo-500
          ${leftElement ? "pl-[60px]" : ""}
        `}
        placeholder={placeholder}
        {...rest}
      />
      <label
        htmlFor={id || formId}
        className={`
          pointer-events-none
          absolute
          -top-[-6px]
          cursor-text
          text-sm
          text-gray-500
          transition-all
          peer-placeholder-shown:top-[23px]
          peer-placeholder-shown:text-body-medium
          peer-placeholder-shown:text-gray-500
          peer-focus:-top-[-6px]
          peer-focus:text-xs
          peer-focus:text-gray-500
          dark:peer-placeholder-shown:text-gray-500
          ${leftElement ? "left-[48px] px-[12px]" : "left-[12px]"}
        `}
      >
        {placeholder}
      </label>
      {rightElement && (
        <div
          className="
        absolute
        right-[8px]
        flex
        h-[56px] 
        w-[56px]
        items-center
        justify-end
        dark:text-white"
        >
          <div>{rightElement}</div>
        </div>
      )}
    </div>
  );
});

InputFilled.propTypes = {};

export { InputFilled };
