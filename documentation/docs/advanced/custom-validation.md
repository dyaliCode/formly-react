---
id: custom-validation
title: Custom Validation
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Create your own rules.

````mdx-code-block
<Tabs>
  <TabItem value="react" label="React">

  ```tsx
  import * as React from 'react';
  import { Formly, IField, IValue } from "formly-react";

  const CustomValidation: React.FC = () => {
    // * Unique form name.
    const form_name = "formly_custom_validation";

    // * Fields.
    const fields: IField[] = [
      {
        type: "input",
        name: "firstname",
        attributes: {
          id: "firstname",
          placeholder: "First name",
        },
        prefix: {
          tag: 'div'
        },
        rules: ['required'],
        messages: {
          notEqual: "The first name field is required",
        },
      },
      {
        type: "input",
        name: "lastname",
        attributes: {
          id: "lastname",
          placeholder: "Last name",
        },
        prefix: {
          tag: 'div'
        },
        // highlight-next-line
        rules: [{ name: "notEqual", fnc: notEqual }],
        messages: {
          // highlight-next-line
          notEqual: "lastname must not be equal firstname",
        },
      },
      {
        type: "textarea",
        name: "message",
        attributes: {
          id: "message",
          placeholder: "Message",
        },
        prefix: {
          tag: "div",
        },
        // highlight-next-line
        rules: [{ name: "onTapMessage", fnc: onTapMessage }],
        messages: {
          // highlight-next-line
          onTapMessage: "Should tap 'hey i am reactjs'",
        },
      },
    ];

    // * custom rule.
    async function notEqual(values: IValue): Promise<boolean> {
      if (values) {
        if (values.firstname === values.lastname) {
          return false;
        }
      }
      return true;
    }

    // * custom rule.
    async function onTapMessage(values: IValue): Promise<boolean> {
      if (values) {
        if (values.message === "hey i am reactjs") {
          return true;
        }
      }
      return false;
    }

    return (
      <Formly fields={fields} form_name={form_name} />
    );
  };

  export default CustomValidation;
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

- [Here](https://replit.com/@dyaliCode/Formly-React-Custom-Validation?v=1)
