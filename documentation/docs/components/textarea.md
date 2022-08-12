---
id: textarea
title: Textarea
sidebar_position: 2
---

```tsx
const fields: IField[] = [
  {
    // highlight-start
    type: "textarea", // required
    name: "nameTextarea", // required
    // highlight-end
    value: "", // optional
    attributes: {
      // highlight-next-line
      id: "idTextarea", // required
      classes: ["class-field"], // optional
      label: "Label field textarea", // optional
      placeholder: "Placeholder field tel", // optional
      disabled: false, // optional
      readonly: false, // optional
      rows: 14, // optional
      cols: 8, // optional
    },
    // optional
    prefix: {
      tag: "div", // optional
      classes: ["class-wrapper"], // optional
    },
  },
];
```
