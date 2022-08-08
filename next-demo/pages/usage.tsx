import type { NextPage } from "next";
import { memo, useMemo, useState } from "react";
import { Formly, type IField } from "formly-react";

const classField =
  "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white";
const classButton =
  "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto md:w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";

const Usage: NextPage = () => {
  // * Declare form.
  const form_name = "formly_fetch_data";
  // const _fields: IField[] = [
  const _fieldsA: IField[] = [
    {
      type: "input",
      name: "firstname",
      // value: "a",
      attributes: {
        id: "firstname",
        // placeholder: "First name",
        // autocomplete: "off",
        autocorrect: "off",
        classes: [classField],
      },
      // prefix: {
      //   tag: "div",
      //   classes: ["mb-6"],
      // },
      rules: ["required"],
    },
    {
      type: "input",
      name: "lastname",
      // value: "b",
      attributes: {
        id: "lastname",
        // placeholder: "First name",
        // autocomplete: "off",
        autocorrect: "off",
        classes: [classField],
      },
      // prefix: {
      //   tag: "div",
      //   classes: ["mb-6"],
      // },
      rules: ["required"],
    },
  ];
  let _fieldsB: IField[] = [
    {
      type: "input",
      name: "firstname",
      // value: "c",
      attributes: {
        id: "firstname",
        placeholder: "First name",
        // autocomplete: "off",
        autocorrect: "off",
        classes: [classField],
      },
      // prefix: {
      //   tag: "div",
      //   classes: ["mb-6"],
      // },
      rules: ["required"],
    },
    {
      type: "input",
      name: "lastname",
      // value: "b",
      attributes: {
        id: "lastname",
        // placeholder: "First name",
        // autocomplete: "off",
        autocorrect: "off",
        classes: [classField],
      },
      // prefix: {
      //   tag: "div",
      //   classes: ["mb-6"],
      // },
      rules: ["required"],
    },
  ];

  // *
  const onSubmit = (data: any) => {
    console.log("onSubmit", data);
  };

  // * Hooks.
  const [fields, setFields] = useState<IField[]>(_fieldsA);
  const [state, setState] = useState<boolean>(true);

  const Form = useMemo(
    () => (
      <Formly
        fields={fields}
        form_name={form_name}
        onSubmit={onSubmit}
        btnSubmit={{
          // text: "Send",
          classes: classButton,
          prefix: {
            tag: "div",
            // classes: ["mt-6"],
          },
        }}
        btnReset={{
          // text: "Cancel",
          classes: classButton,
          prefix: {
            tag: "div",
            // classes: ["mt-6"],
          },
        }}
        buttonsAction={{
          tag: "div",
          classes: ["flex flex-row gap-2"],
        }}
      />
    ),
    [fields]
  );

  const FormB = useMemo(
    () => (
      <Formly
        fields={fields}
        form_name={"form_a"}
        onSubmit={onSubmit}
        btnSubmit={{
          // text: "Send",
          classes: classButton,
          prefix: {
            tag: "div",
            // classes: ["mt-6"],
          },
        }}
        btnReset={{
          // text: "Cancel",
          classes: classButton,
          prefix: {
            tag: "div",
            // classes: ["mt-6"],
          },
        }}
        buttonsAction={{
          tag: "div",
          classes: ["flex flex-row gap-2"],
        }}
      />
    ),
    [fields]
  );

  const onSetForm = () => {
    const __fields = fields.map((field: any) => {
      if (field.name === "firstname") {
        field = { ...field, attributes: { placeholder: "fieldUpdated" } };
      }
      return field;
    });
    console.log("__fields", __fields);
    setFields(__fields);
  };

  return (
    <div className="w-full mx-auto mt-10">
      <button
        type="button"
        onClick={() => setState(!state)}
        className="bg-pink-300 p-2.5 text-white rounded-lg text-sm w-full sm:w-auto md:w-full px-5 py-2.5 text-center"
      >
        toggle state {state ? "true" : "false"}
      </button>
      <button
        type="button"
        onClick={onSetForm}
        className="bg-pink-300 p-2.5 text-white rounded-lg text-sm w-full sm:w-auto md:w-full px-5 py-2.5 text-center"
      >
        setForm
      </button>
      <h1 className="text-6xl italic text-indigo-600 mb-10">Usage</h1>
      <div className="grid grid-cols-2 gap-8">
        <div className="p-8 drop-shadow-lg border border-transparent text-base font-medium rounded-lg text-indigo-700 bg-gray-800 hover:bg-gray-900 md:text-lg">
          {Form}
        </div>
        <div className="p-8 drop-shadow-lg border border-transparent text-base font-medium rounded-lg text-indigo-700 bg-gray-800 hover:bg-gray-900 md:text-lg">
          {FormB}
        </div>
      </div>
    </div>
  );
};

export default memo(Usage);
