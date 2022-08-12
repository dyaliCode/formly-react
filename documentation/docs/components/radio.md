---
id: radio
title: Radio
sidebar_position: 5
---

```tsx
const fields: IField[] = [
  {
    // highlight-start
    type: "radio", // required
    name: "nameRadioA", // required
    // highlight-start
    attributes: {
      // highlight-next-line
      id: "idRadioA", // required
      classes: ["class-radio"], // optional
      label: "Radio A:",
    },
    // highlight-start
    // required
    extra: {
      items: [
        {
          id: "radio1",
          value: 1,
          title: "radio 1",
        },
        {
          id: "radio2",
          value: 2,
          title: "radio 2",
        },
      ],
      aligne: "inline", // optional
    },
    // highlight-end
    // optional
    prefix: {
      tag: "div", // optional
      classes: ["class-wrapper"], // optional
    },
  },
  {
    // highlight-start
    type: "radio", // required
    name: "nameRadioB", // required
    // highlight-end
    attributes: {
      // highlight-next-line
      id: "idRadioB", // required
      classes: ["class-radio"], // optional
      label: "Radio B: ",
    },
    // highlight-start
    // required
    extra: {
      items: [
        {
          id: "radio3",
          value: 3,
          title: "radio 3",
        },
        {
          id: "radio4",
          value: 4,
          title: "radio 4",
        },
      ],
      aligne: "default", // optional
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
