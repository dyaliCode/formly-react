import React, { useEffect, useState, memo, useRef } from "react";
import {
  isFieldDuplicated,
  IField,
  IForm,
  IFormProps,
  preprocess_and_validate_field,
  saveForm,
  duplicateField,
} from "../utils";
import Action from "./buttons/Action";
import Field from "./Field";

const Formly = (props: IFormProps) => {
  const elForm: any = useRef();
  const [forms, setForms] = useState<IForm[]>([]);
  const [currentForm, setCurrentForm] = useState<IForm>({
    form_name: props.form_name,
    fields: props.fields,
    values: {},
    valid: true,
  });
  // const [fieldsState, setFieldsState] = useState<IField[]>(props.fields);
  const [valuesState, setValuesState] = useState<any>({});
  const [fieldDuplicated, setFieldDuplicated] = useState<boolean>(false);

  // * Init formly.
  useEffect(() => {
    // ! Before all check if there is a duplicated field.
    const is_duplicated: boolean = isFieldDuplicated(props.fields);
    setFieldDuplicated(is_duplicated);

    async function init() {
      let values: any = currentForm.values ?? {};
      // * Check and validate fields.
      const updatedFields = await Promise.all(
        props.fields.map(async (field: IField) => {
          values[`${field.name}`] = field.value ?? null;
          // * Preprocess and validate field.
          field = await preprocess_and_validate_field(
            currentForm,
            field,
            values
          );
          return field;
        })
      );
      // setFieldsState(updatedFields);

      // * Find dirty in the current form.
      const dirty = updatedFields.find((field: IField) => {
        if (field.validation) {
          return field.validation.dirty === true;
        }
        return false;
      });

      // * Set values.
      setValuesState(values);

      // * Get form.
      const newForm = {
        ...currentForm,
        fields: updatedFields,
        values,
        valid: dirty ? false : true,
      };

      // * Set current form.
      setCurrentForm(newForm);

      // * Save forms.
      setForms(await saveForm(forms, newForm));

      // * Dispatch values.
      props.getValues && props.getValues(valuesState);
    }

    init();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.fields]);

  // * On change value field.
  const onChange = async (data: any): Promise<void> => {
    let values = currentForm.values;

    // * check and validate fields.
    const listFields = await Promise.all(
      currentForm.fields.map(async (field: IField) => {
        if (field.name === data.field_name) {
          values["touched"] = field.name;
          field.value = data.value;
          values[`${field.name}`] = data.value;
        }
        // * Preprocess and validate field.
        field = await preprocess_and_validate_field(currentForm, field, values);
        return field;
      })
    );

    // * Find dirty in the current form.
    const dirty = listFields.find((field: IField) => {
      if (field.validation) {
        return field.validation.dirty === true;
      }
      return false;
    });

    // * Values.
    setValuesState(values);

    // * Form.
    const newForm = {
      ...currentForm,
      fields: listFields,
      values: values,
      valid: dirty ? false : true,
    };
    setCurrentForm(newForm);

    // * Save forms.
    setForms(await saveForm(forms, newForm));

    // * Dispatch values.
    props.getValues && props.getValues(valuesState);
    if (props.onChange) {
      props.onChange({
        form_name: props.form_name,
        values: currentForm.values,
        valid: newForm.valid,
      });
    }
  };

  // * Submit form.
  const onSubmitHandler = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    if (props.onSubmit) {
      props.onSubmit({
        form_name: props.form_name,
        values: currentForm.values,
        valid: currentForm.valid,
      });
    }
  };

  // * Reset form.
  const onResetHandler = async (e: React.FormEvent): Promise<void> => {
    elForm.current.reset();
    let values: any = {};
    let listFields: any = await Promise.all(
      currentForm.fields.map(async (field: IField) => {
        field.value = null;
        values[field.name] = null;
        field = await preprocess_and_validate_field(currentForm, field, values);
        return field;
      })
    );

    const _currentForm = { ...currentForm, fields: listFields, values };

    // setFieldsState(listFields);

    setCurrentForm(_currentForm);

    // Save forms.
    setForms(await saveForm(forms, _currentForm));

    // Dispatch values.
    props.getValues && props.getValues(valuesState);
  };

  // * duplicate field.
  const duplicFieldHandler = (selectedField: IField, index: number): void => {
    const fields_form: IField[] = duplicateField(
      currentForm,
      selectedField,
      index
    );
    setCurrentForm({ ...currentForm, fields: fields_form });
  };

  // * Remove field.
  const removeFieldHandler = (selectedField: IField): void => {
    let values: any = {};
    const fields_form: IField[] = currentForm.fields.filter((field: IField) => {
      if (field.name !== selectedField.name) {
        values[field.name] = field.value;
        return true;
      }
    });
    setCurrentForm({ ...currentForm, fields: fields_form, values });
  };

  return (
    <>
      {fieldDuplicated ? (
        <p>
          <code>
            <b>
              Error!s Detect duplicate fields(name or id attributes), make sure
              you put unique name and id for each field.
            </b>
          </code>
        </p>
      ) : (
        <form
          className={props.classes ? props.classes.join(" ") : undefined}
          ref={elForm}
          onSubmit={onSubmitHandler}
          onReset={onResetHandler}
        >
          {currentForm.fields.map((field: IField, index: number) => {
            return (
              <React.Fragment key={index}>
                <Field
                  form_name={props.form_name}
                  field={field}
                  changeValue={onChange}
                />
                {field.multiple && (
                  <button
                    key={field.name}
                    style={{
                      padding: "6px",
                      margin: "6px",
                      backgroundColor: "skyblue",
                    }}
                    type="button"
                    onClick={() => duplicFieldHandler(field, index)}
                  >
                    +
                  </button>
                )}
                {field.duplicated && (
                  <button
                    style={{
                      padding: "6px",
                      margin: "6px",
                      backgroundColor: "skyblue",
                    }}
                    type="button"
                    onClick={() => removeFieldHandler(field)}
                  >
                    -
                  </button>
                )}
              </React.Fragment>
            );
          })}
          <Action
            prefix={props.buttonsAction}
            btnSubmit={props.btnSubmit}
            btnReset={props.btnReset}
          />
        </form>
      )}
    </>
  );
};

export default memo(Formly);
