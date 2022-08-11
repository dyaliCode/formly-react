---
id: multiple
title: Multiple
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


### Create multiple forms in one component.

:::danger

Form name should be unique.

:::

````mdx-code-block
<Tabs>
  <TabItem value="react" label="React">

  ```tsx
  import * as React from 'react';
  import { Formly, IField, IValue } from "formly-react";

  const MultipleForms: React.FC = () => {
    // * Form A.
    const form_name_A = "formly_A";
    const fields_A: IField[] = [
      {
        type: "input",
        name: "firstname",
        attributes: {
          id: "firstname",
          placeholder: "First name",
       },
      },
    ];

    // * Form B.
    const form_name_B = "formly_B";
    const fields_B: IField[] = [
      {
        type: "input",
        name: "lasttname",
        attributes: {
          id: "lastname",
          placeholder: "Last name",
       },
      },
    ];

    return (
      <>
        <h2>Form A</h2>
        <Formly fields={fields_A} form_name={form_name_A} />
 
        <h2>Form B</h2>
        <Formly fields={fields_B} form_name={form_name_B} />
      </>
    ); 
  };

  export default MultipleForms; 
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

- [Here](https://replit.com/@dyaliCode/Formly-React-Multiple?v=1)

