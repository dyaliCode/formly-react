import React, { useEffect } from "react";
import { Formly, type IField, type IValue } from "formly-react";

const classesField =
  "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white";

// // Fetch Users
// const fetchUsers = async (): Promise<any> => {
//   const res = await fetch("https://jsonplaceholder.cypress.io/users?_limit=10");
//   const data = await res.json();
//   return data.map((item: any) => ({ value: item.id, title: item.name }));
// };

// // Fetch posts
// const fetchPosts = async (): Promise<any> => {
//   const res = await fetch("https://jsonplaceholder.cypress.io/posts?_limit=10");
//   const data = await res.json();
//   return data.map((item: any) => ({ value: item.id, title: item.title }));
// };

const Test = () => {
  // * Unique form name.
  const form_name = "formly_preprocess";

  // * Fields.
  // const list_fields: IField[] = [
  //   {
  //     multiple: true,
  //     type: "select",
  //     name: "category",
  //     attributes: {
  //       id: "category",
  //       label: "Category",
  //       classes: [classesField],
  //     },
  //     rules: ["required"],
  //     extra: {
  //       options: [
  //         {
  //           value: null,
  //           title: "None",
  //         },
  //         {
  //           value: 1,
  //           title: "Users",
  //         },
  //         {
  //           value: 2,
  //           title: "Posts",
  //         },
  //       ],
  //     },
  //     prefix: {
  //       tag: "div",
  //       classes: ["form-group"],
  //     },
  //   },
  //   {
  //     type: "select",
  //     name: "items",
  //     attributes: {
  //       id: "items",
  //       label: "Items",
  //       classes: [classesField],
  //     },
  //     extra: {},
  //     preprocess: async (field: IField, fields: IField[], values: any) => {
  //       if (values.touched === "category_6") {
  //         setLoading(true);
  //         field.extra.options =
  //           values.category == 1 ? await fetchUsers() : await fetchPosts();
  //         setLoading(false);
  //       }
  //       return field;
  //     },
  //     prefix: {
  //       tag: "div",
  //       classes: ["form-group"],
  //     },
  //   },
  // ];
  const list_fields: IField[] = [
    {
      multiple: true,
      type: "input",
      name: "username",
      attributes: {
        id: "username",
        label: "Username",
        classes: [classesField],
      },
    },
  ];

  // Hooks
  const [fields, setFields] = React.useState<IField[]>(list_fields);
  const [loading, setLoading] = React.useState<boolean>(false);

  const onSubmit = (data: IValue) => {
    console.log("data", data);
  };

  return (
    <div className="w-1/2 mx-auto mt-10">
      <h1 className="text-6xl italic text-indigo-600 mb-10">Alter</h1>
      <strong>{loading ? "loading..." : "DONE!"}</strong>
      <Formly fields={fields} form_name={form_name} onSubmit={onSubmit} />
    </div>
  );
};

export default Test;
