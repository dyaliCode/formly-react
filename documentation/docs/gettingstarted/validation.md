---
id: validation
title: Validation
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

To validate a form 💯 you can use a core rules or customize your own.

## Core

```typescript
const fields = [{
  ...,
  rules: [
    'required',
    'min:number',
    'max:number',
    'between:number:number',
    'equal:number',
    'email',
    'url'
    'file'
  ]
}];
```

## Usage

````mdx-code-block
<Tabs>
  <TabItem value="react" label="React">

  ```tsx
  import * as React from 'react'
  import { Formly, IField, IValue } from "formly-react";

  const Usage = () => {
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
        },
        rules: ["required", "min:6"],
      },
      {
        type: "input",
        name: "lastname",
        attributes: {
          id: "lastname",
          placeholder: "Last name",
        },
        rules: ["required", "min:6", { name: "notEqual", fnc: notEqual }],
        messages: {
          required: "lastname is required",
          min: "lastname must be at least 3 characters",
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
          classes: ["mb-6"],
        },
        rules: ["required", { name: "onTapMessage", fnc: onTapMessage }],
        messages: {
          required: "lastname is required",
          onTapMessage: "Should tap 'hey i am reactjs'",
        },
      },
    ];

    // * custom rules
    async function notEqual(values: IValue): Promise<boolean> {
      if (values) {
        if (values.firstname === values.lastname) {
          return false;
        }
      }
      return true;
    }

    // *
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

  export default Usage;
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

- [Here](https://replit.com/join/fibuivhjgt-dyalicode)
  <!-- https://replit.com/join/fibuivhjgt-dyalicode -->