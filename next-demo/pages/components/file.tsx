import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Formly, type IField } from "react-formly-light";

const classField =
  "block mb-2 p-2 w-full text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400";
const classButton =
  "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto md:w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5";

const FieldFile: NextPage = () => {
  // * Declare form.
  const form_name = "form_field_file";
  const _fields: IField[] = [
    {
      type: "file",
      name: "name-file",
      attributes: {
        id: "id-field",
        classes: [classField],
        label: "Image",
      },
      extra: {
        multiple: true,
        showPreview: true,
      },
      rules: ["file"],
      file: {
        extensions: ["gif"],
        maxSize: 5,
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
      <h1 className="text-6xl italic text-indigo-600 mb-10">Field File</h1>
      <div className="p-8 drop-shadow-lg border border-transparent text-base font-medium rounded-lg text-indigo-700 bg-gray-800 hover:bg-gray-900 md:text-lg">
        <Formly
          fields={fields}
          form_name={form_name}
          btnSubmit={{
            classes: classButton,
          }}
          btnReset={{
            classes: classButton,
          }}
        />
      </div>
    </div>
  );
};

export default FieldFile;
