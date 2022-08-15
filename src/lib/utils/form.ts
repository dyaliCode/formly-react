import type { IField, IForm } from "./types";
import { validate } from "./validation";

export async function saveForm(
  forms: IForm[],
  newForm: IForm
): Promise<IForm[]> {
  const form = forms.find(
    (form: IForm) => form.form_name === newForm.form_name
  );
  let _forms: IForm[] = [];

  if (!form) {
    _forms = [...forms, newForm];
  } else {
    _forms = forms.map((form: IForm) =>
      form.form_name === newForm.form_name ? newForm : form
    );
  }
  return _forms;
}

export async function preprocessField(
  field: IField,
  fields: IField[],
  values: any
): Promise<IField> {
  const fnc = field.preprocess;
  field = await fnc?.call(null, field, fields, values);
  return field;
}

export async function preprocess_and_validate_field(
  form: IForm,
  field: IField,
  values: any
): Promise<IField> {
  // 1.preprocess
  if (field.preprocess) {
    field = await preprocessField(field, form.fields, values);
    values[`${field.name}`] = field.value ?? null;
  }

  // 2.validation
  if (field.rules) {
    field = await validate(field, values);
  }

  return field;
}

// *
export function duplicateField(
  form: IForm,
  field: IField,
  index: number
): IField[] {
  const formFields = form.fields;
  let cloneField: IField = { ...field };

  cloneField = {
    ...cloneField,
    duplicated: true,
    multiple: false,
    value: undefined,
    name: `${field.name}_${formFields.length + 1}`,
  };

  cloneField = {
    ...cloneField,
    attributes: {
      ...cloneField.attributes,
      label: `${field.attributes.label} ${formFields.length + 1}`,
    },
  };

  return formFields.reduce(function (s: IField[], a, i) {
    i === index ? s.push(cloneField, a) : s.push(a);
    return s;
  }, []);
}
