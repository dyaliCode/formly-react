import React from "react";
import type { IField, IForm } from "./types";

// *
export function inArray(arr: Array<any>, element: any): boolean {
  if (arr.indexOf(element) != -1) {
    return true;
  }
  return false;
}

// *
export function isRequired(field: IField): boolean {
  if (field.rules) {
    if (field.rules.length > 0) {
      return true;
    }
  }
  return false;
}

// *
export function isFieldDuplicated(fields: IField[]): boolean {
  let seen: any = {};
  return fields.some(function (currentObject: any) {
    if (
      seen.hasOwnProperty(currentObject.name) ||
      seen.hasOwnProperty(currentObject.attributes.id)
    ) {
      // Current name or id is already seen
      return true;
    }

    // Current name and id is being seen for the first time
    return (
      (seen[currentObject.name] = false),
      (seen[currentObject.attributes.id] = false)
    );
  });
}

export function clickOutside(node: any) {
  const handleClick = (event: any) => {
    if (node && !node.contains(event.target) && !event.defaultPrevented) {
      node.dispatchEvent(new CustomEvent("click_outside", node));
    }
  };

  document.addEventListener("click", handleClick, true);

  return {
    destroy() {
      document.removeEventListener("click", handleClick, true);
    },
  };
}

// *
export function createComponentWithPrefix(
  children: JSX.Element,
  props: { tag?: string; classes?: string[] }
) {
  return React.createElement(
    props.tag ?? "div",
    { className: props.classes?.join(" ") },
    children
  );
}

// *
export function duplicateField(
  form: IForm,
  index: number,
  field: IField
): IField[] {
  const formFields = form.fields;
  let cloneField: IField = { ...field };

  cloneField = {
    ...cloneField,
    multiple: false,
    duplicated: true,
    value: undefined,
    name: `${field.name}_${formFields.length + 1}`,
  };

  cloneField = {
    ...cloneField,
    attributes: {
      ...cloneField.attributes,
      label: `${field.attributes.label}_${formFields.length + 1}`,
    },
  };

  return formFields.reduce(function (s: IField[], a, i) {
    i === index + 1 ? s.push(cloneField, a) : s.push(a);
    return s;
  }, []);
}
