export const Label = ({ children, htmlFor }: { children: string; htmlFor: string }) => (
  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor={htmlFor}>
    {children}
  </label>
);

export const Input = ({
  type,
  name,
  id,
  placeholder,
  autocomplete,
}: {
  type: string;
  name: string;
  id: string;
  placeholder: string;
  autocomplete?: string;
}) => (
  <input
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
      block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    placeholder={placeholder}
    name={name}
    id={id}
    type={type}
    autoComplete={autocomplete}
  />
);

export const Button = ({ children }: { children: string }) => (
  <button
    className="text-white bg-blue-700 hover:bg-blue-800 
      focus:ring-4 focus:outline-none focus:ring-blue-300 
      font-medium rounded-lg text-sm w-full sm:w-auto px-5 
      py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    {children}
  </button>
);
