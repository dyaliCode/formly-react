---
id: preprocess
title: Preprocess
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info

You can easly make a form more reactive using preprocess. 🎉

:::

````mdx-code-block
<Tabs>
  <TabItem value="react" label="React">

  ```tsx
  import * as React from 'react';
  import { Formly, IField, IValue } from "formly-react";

  const Preprocess: React.FC = () => {
    // Fetch Users
    const fetchUsers = async (): Promise<any> => {
      const res = await fetch('https://jsonplaceholder.cypress.io/users?_limit=10');
      const data = await res.json();
      return data.map((item: any) => ({ value: item.id, title: item.name }));
    };

    // Fetch posts
    const fetchPosts = async (): Promise<any> => {
      const res = await fetch('https://jsonplaceholder.cypress.io/posts?_limit=10');
      const data = await res.json();
      return data.map((item: any) => ({ value: item.id, title: item.title }));
    };

    // * Unique form name.
    const form_name = "formly_preprocess";

    // * Fields.
    const list_fields: IField[] = [
      {
        type: 'select',
        name: 'category',
        attributes: {
          id: 'category',
          label: 'Category'
        },
        rules: ['required'],
        extra: {
          options: [
            {
              value: null,
              title: 'None'
            },
            {
              value: 1,
              title: 'Users'
            },
            {
              value: 2,
              title: 'Posts'
            }
          ]
        },
        prefix: {
          tag: "div",
          classes: ["form-group"]
        }
      },
      {
        type: 'select',
        name: 'items',
        attributes: {
          id: 'items',
          label: 'Items'
        },
        extra: {},
        // highlight-start
        preprocess: async (field: IField, fields: IField[], values: any) => {
          if (values.touched === 'category') {
            setLoading(true);
            field.extra.options = values.category == 1 ? await fetchUsers() : await fetchPosts();
            setLoading(false);
          }
          return field;
        },
        // highlight-end
        prefix: {
          tag: "div",
          classes: ["form-group"]
        }
      }
    ];

    // Hooks
    const [fields, setFields] = React.useState<IField[]>(list_fields);
    const [loading, setLoading] = React.useState<boolean>(false);

    React.useEffect(() => {
      setFields(list_fields);
    }, []);

    return (
      <>
        <strong>{loading ? 'loading...' : 'DONE!'}</strong>
        <Formly fields={fields} form_name={form_name} />
      </>
    );
  };

  export default Preprocess;
  ```

  </TabItem>

  <TabItem value="solid" label="Solid">

  ```tsx
  soon.
  ```

  </TabItem>

  <TabItem value="svelte" label="Svelte">

  ```tsx
  soon.
  ```

  </TabItem>
</Tabs>
````

## Result

- [Here](https://replit.com/@dyaliCode/Formly-React-Preprocess?v=1)
