---
id: alter
title: Alter
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::tip

Update attributes form, Change textes & classes for buttons submit and reset

:::

````mdx-code-block
<Tabs>
  <TabItem value="react" label="React">

  ```tsx
  <Formly
    ...
    btnSubmit={{
      text: "Save",
      classes: ['class-btn-submit'],
      prefix: {
        tag: "div",
        classes: ["class-wrapper-btn-submit"],
      },
    }}
    btnReset={{
      text: "Cancel",
      classes: ['class-btn-reset'],
      prefix: {
        tag: "div",
        classes: ["class-wrapper-btn-reset"],
      },
    }}
    buttonsAction={{
      tag: "div",
      classes: ["class-wrapper-btn-actions"],
    }}
    classes={["class-form-a", "class-form-b"]}
  />;
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

- [Here](https://replit.com/@dyaliCode/Formly-React-Alter?v=1)
