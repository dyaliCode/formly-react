import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Formly, type IField } from "react-formly-light";

const classField =
  "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
const classButtonSubmit =
  "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto md:w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";
const classButtonReset =
  "text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto md:w-full px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800";

const Alter: NextPage = () => {
  // * Declare form.
  const form_name = "formly_fetch_data";
  const _fields: IField[] = [
    {
      type: "input",
      name: "firstname",
      attributes: {
        id: "firstname",
        placeholder: "First name",
        autocomplete: "off",
        autocorrect: "off",
        classes: [classField],
      },
      prefix: {
        tag: "div",
        classes: ["mb-6"],
      },
      messages: {
        required: "Firstname is required",
        min: "Firstname must be at least 3 characters",
        max: "Firstname must be less than 10 characters",
      },
    },
  ];

  // * Hooks.
  const [fields, setFields] = useState<IField[]>(_fields);

  useEffect(() => {
    setFields(_fields);
  }, []);

  return (
    <div className="w-1/2 mx-auto mt-10">
      <h1 className="text-6xl italic text-indigo-600 mb-10">Alter</h1>
      <div className="p-8 drop-shadow-lg border border-transparent text-base font-medium rounded-lg text-indigo-700 bg-gray-800 hover:bg-gray-900 md:text-lg">
        <Formly
          fields={fields}
          form_name={form_name}
          btnSubmit={{
            text: "Send",
            classes: classButtonSubmit,
            prefix: {
              tag: "div",
              classes: ["p-4 bg-pink-500"],
            },
          }}
          btnReset={{
            // text: "Cancel",
            classes: classButtonReset,
            prefix: {
              tag: "div",
              classes: ["p-4 bg-sky-500"],
            },
          }}
          buttonsAction={{
            tag: "div",
            classes: ["flex flex-row justify-center gap-2 p-10 bg-indigo-200"],
          }}
        />
      </div>
    </div>
  );
};

export default Alter;
