import { Formly, IField, IValue } from "formly-react";

import React, { FC } from "react";

const Usage: FC = () => {
  // * Unique form name.
  const form_name = "formly_usage";

  // * Fields.
  const fields: IField[] = [
    {
      type: "input",
      name: "firstname",
      attributes: {
        id: "firstname",
        placeholder: "First name",
        autocomplete: "off",
        autocorrect: "off",
        classes: ["form-control"],
      },
      prefix: {
        tag: "div",
        classes: ["form-group"],
      },
      rules: ["required", "min:6"],
    },
    {
      type: "input",
      name: "lastname",
      attributes: {
        id: "lastname",
        placeholder: "Last name",
        autocomplete: "off",
        autocorrect: "off",
        classes: ["form-control"],
      },
      prefix: {
        tag: "div",
        classes: ["form-group"],
      },
      rules: ["required", "min:6"],
    },
  ];

  // * Handler on change.
  const onChange = (data: IValue) => {
    console.log("onChange", data);
  };

  // * Handler on submit.
  const onSubmit = (data: IValue) => {
    console.log("onSubmit", data);
  };

  return (
    <>
      <Formly
        fields={fields}
        form_name={form_name}
        // onChange={onChange}
        // onSubmit={onSubmit}
      />
      <h1>ok</h1>
    </>
  );
};

export default Usage;
