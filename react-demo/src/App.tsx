import { useEffect, useState } from "react";
import "./App.css";

import { Formly, IField } from "react-formly-light";

// Fetch Users
const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.cypress.io/users?_limit=10");
  const data = await res.json();
  return data.map((item: any) => ({ value: item.id, title: item.name }));
};

// Fetch posts
const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.cypress.io/posts?_limit=10");
  const data = await res.json();
  return data.map((item: any) => ({ value: item.id, title: item.title }));
};

function App() {
  const form_name = "formly_fetch_data";
  const fields: IField[] = [
    {
      type: "select",
      name: "category",
      attributes: {
        classes: ["p-2 rounded-md text-slate-500"],
        id: "category",
        label: "Category",
      },
      rules: ["required"],
      extra: {
        options: [
          {
            value: null,
            title: "None",
          },
          {
            value: 1,
            title: "Users",
          },
          {
            value: 2,
            title: "Posts",
          },
        ],
      },
    },
    // {
    //   type: "select",
    //   name: "items",
    //   attributes: {
    //     classes: ["p-2 rounded-md text-slate-500"],
    //     id: "items",
    //     label: "Items",
    //   },
    //   extra: {},
    //   preprocess: async (field: IField, fields: IField[], values: any) => {
    //     if (values.touched === "category") {
    //       setLaoding(true);
    //       field.extra.options =
    //         values.category == 1 ? await fetchUsers() : await fetchPosts();
    //       field.value = field.extra.options[0].value;
    //       setLaoding(false);
    //     }
    //     return field;
    //   },
    // },
  ];

  const [_fields, _setFields] = useState<IField[]>(fields);
  const [loading, setLaoding] = useState<boolean>(false);

  useEffect(() => {
    _setFields(fields);
  }, []);

  const onSubmit = (data: any) => {
    console.log("data", data);
  };

  const onChange = (data: any) => {
    console.log("onChange", data);
  };

  return (
    <div className="w-full h-screen bg-gray-900 text-slate-50">
      {loading ? "Loading..." : "Done"}
      <Formly
        fields={_fields}
        form_name={form_name}
        onSubmit={onSubmit}
        onChange={onChange}
        classes={
          "p-10 bg-slate-800 border-2 border-slate-700 max-w-screen-xl w-1/2 m-auto p-4 flex flex-col space-y-2 rounded-lg"
        }
        btnSubmit={{
          text: "Send",
          classes: "bg-blue-500 text-white font-bold py-2 px-4 rounded-full",
        }}
        btnReset={{
          text: "Cancel",
          classes: "bg-red-500 text-white font-bold py-2 px-4 rounded-full",
        }}
      />
    </div>
  );
}

export default App;
