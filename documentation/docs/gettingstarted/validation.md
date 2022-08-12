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

## Custom

````mdx-code-block
<Tabs>
  <TabItem value="react" label="React">

  ```tsx
  // Properties rules and messages of field.
  rules: [
    { name: "notEqual", fnc: notEqual },
    { name: "onTapMessage", fnc: onTapMessage }
  ],
  messages: {
    notEqual: "lastname must not be equal firstname",
  },

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

- [Here](https://replit.com/@dyaliCode/Formly-React-Validation?v=1)
