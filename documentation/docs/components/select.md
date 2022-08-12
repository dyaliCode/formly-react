---
id: select
title: Select
sidebar_position: 3
---

```tsx
const fields: IField[] = [
  {
    // highlight-start
    type: "select", // required
    name: "nameSelect", // required
    // highlight-end
    attributes: {
      // highlight-next-line
      id: "idSelect", // required
      classes: ["class-field"], // optional
      label: "Label A", // optional
      disabled: false, // optional
    },
    // highlight-start
    // required
    extra: {
      options: [
        {
          value: 1,
          title: "option 1",
        },
        {
          value: 2,
          title: "option 2",
        },
      ],
    },
    // highlight-end
    // optional
    prefix: {
      tag: "div", // optional
      classes: ["class-wrapper"], // optional
    },
  },
];
```
