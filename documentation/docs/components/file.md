---
id: file
title: File
sidebar_position: 7
---

```tsx
const fields: IField[] = [
  {
    // highlight-start
    type: "file", // required
    name: "name-file", // require
    // highlight-end
    attributes: {
      // highlight-next-line
      id: "id-field", // optional
      classes: ["form-control"], // optional
      label: "Image", // optional
    },
    rules: ["file"], // optional
    // highlight-start
    extra: {
      multiple: true, // optional
      showPreview: true, // optional
    },
    file: {
      // optional
      // need to add this attribute object if you need a file rule
      extensions: ["jpg", "gif", "png"],
      maxSize: 5, // 5 MB
    },
    // highlight-end
  },
];
```
