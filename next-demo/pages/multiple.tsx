import { useMemo, useState } from "react";
import { Formly, IField, IValue } from "formly-react";

const classForm = "mb-8 p-6 bg-slate-400 rounded-lg";
const classField =
  "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white";
const classButton =
  "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto md:w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";

export default function Form() {
  // Hooks.
  const [values, setValues] = useState<IValue>();

  // Fields.
  const fieldsA: IField[] = [
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
      rules: ["required"],
    },
    {
      type: "input",
      name: "lastname",
      attributes: {
        id: "lastname",
        placeholder: "Last name",
        autocomplete: "off",
        autocorrect: "off",
        classes: [classField],
      },
      prefix: {
        tag: "div",
        classes: ["mb-6"],
      },
      rules: ["required"],
    },
  ];

  const fieldsB: IField[] = [
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
      rules: ["required"],
    },
    {
      type: "input",
      name: "lastname",
      attributes: {
        id: "lastname",
        placeholder: "Last names",
        autocomplete: "off",
        autocorrect: "off",
        classes: [classField],
      },
      prefix: {
        tag: "div",
        classes: ["mb-6"],
      },
      rules: ["required"],
    },
  ];

  // Handlers.
  const onSubmit = (data: IValue) => {
    setValues(data);
  };

  const onChange = (data: IValue) => {
    console.log(data);
    // setValues({ ...values, ...data });
  };

  // Forms
  const FormA = useMemo(
    () => (
      <Formly
        fields={fieldsA}
        form_name="myformA"
        onSubmit={onSubmit}
        onChange={onChange}
        btnSubmit={{
          classes: classButton,
        }}
        btnReset={{
          classes: classButton,
        }}
        buttonsAction={{
          tag: "div",
          classes: ["flex flex-row gap-2"],
        }}
        classes={classForm}
      />
    ),
    []
  );

  const FormB = useMemo(
    () => (
      <Formly
        fields={fieldsB}
        form_name="myformB"
        onSubmit={onSubmit}
        onChange={onChange}
        btnSubmit={{
          classes: classButton,
        }}
        btnReset={{
          classes: classButton,
        }}
        buttonsAction={{
          tag: "div",
          classes: ["flex flex-row gap-2"],
        }}
        classes={classForm}
      />
    ),
    []
  );

  return (
    <div className="mx-auto w-1/2">
      <pre>
        <code>{JSON.stringify(values, null, 2)}</code>
      </pre>
      <h2>Form A</h2>
      {FormA}
      <hr />
      <h2>Form B</h2>
      {FormB}
    </div>
  );
}
