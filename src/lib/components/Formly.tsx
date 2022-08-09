import React, {
  FunctionComponent,
  useEffect,
  useState,
  memo,
  useRef,
} from "react";
import {
  isFieldDuplicated,
  IField,
  IForm,
  IFormProps,
  preprocess_and_validate_field,
  saveForm,
} from "../utils";
import Action from "./buttons/Action";
import Field from "./Field";

const Formly: FunctionComponent<IFormProps> = (props: IFormProps) => {
  const elForm: any = useRef();
  const [forms, setForms] = useState<IForm[]>([]);
  const [currentForm, setCurrentForm] = useState<IForm>({
    form_name: props.form_name,
    fields: props.fields,
    values: {},
    valid: true,
  });
  const [_fields, _setFields] = useState<IField[]>(props.fields);
  const [_values, _setValues] = useState<any>({});
  const [fieldDuplicated, setFieldDuplicated] = useState<boolean>(false);
  console.log("11", 11);

  // * Init formly.
  useEffect(() => {
    // ! Before all check if there is a duplicated field.
    const is_duplicated: boolean = isFieldDuplicated(props.fields);
    setFieldDuplicated(is_duplicated);

    async function init() {
      let values: any = currentForm.values ?? {};
      const fields_updated = await Promise.all(
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
      _setFields(fields_updated);
      // * Find dirty in the current form.
      const dirty = fields_updated.find((field: IField) => {
        if (field.validation) {
          return field.validation.dirty === true;
        }
        return false;
      });
      // * Set values.
      _setValues(values);
      // * Get form.
      const newForm = {
        ...currentForm,
        fields: fields_updated,
        values,
        valid: dirty ? false : true,
      };
      // * Set current form.
      setCurrentForm(newForm);
      // * Save forms.
      setForms(await saveForm(forms, newForm));
      // * Dispatch values.
      props.get_values && props.get_values(_values);
    }

    init();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.fields]);

  // * On change value field.
  const onChange = async (data: any): Promise<void> => {
    let values = currentForm.values;

    const _fields = await Promise.all(
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
    const dirty = _fields.find((field: IField) => {
      if (field.validation) {
        return field.validation.dirty === true;
      }
      return false;
    });

    // * Values.
    _setValues(values);

    // * Form.
    const newForm = {
      ...currentForm,
      fields: _fields,
      values: values,
      valid: dirty ? false : true,
    };
    setCurrentForm(newForm);

    // * Save forms.
    setForms(await saveForm(forms, newForm));

    // * Dispatch values.
    props.get_values && props.get_values(_values);
    if (props.onChange) {
      props.onChange({ values: currentForm.values, valid: newForm.valid });
    }
  };

  // * Submit form.
  const onSubmitHandler = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    if (props.onSubmit) {
      props.onSubmit({ values: currentForm.values, valid: currentForm.valid });
    }
  };

  // * Reset form.
  const onResetHandler = async (e: React.FormEvent): Promise<void> => {
    elForm.current.reset();
    let values: any = {};
    let __fields: any = await Promise.all(
      currentForm.fields.map(async (field: IField) => {
        field.value = null;
        values[field.name] = null;
        field = await preprocess_and_validate_field(currentForm, field, values);
        return field;
      })
    );

    const _currentForm = { ...currentForm, fields: __fields, values };

    _setFields(__fields);

    setCurrentForm(_currentForm);

    // Save forms.
    setForms(await saveForm(forms, _currentForm));

    // Dispatch values.
    props.get_values && props.get_values(_values);
  };

  return (
    <>
      {fieldDuplicated ? (
        <p>
          <code>
            <b>
              Error! Detect duplicate fields(name or id attributes), make sure
              you put unique name and id for each field.
            </b>
          </code>
        </p>
      ) : (
        <form
          className={props.classes ?? undefined}
          ref={elForm}
          onSubmit={onSubmitHandler}
          onReset={onResetHandler}
        >
          {currentForm.fields.map((field) => {
            return (
              <Field
                key={field.name}
                form_name={props.form_name}
                field={field}
                changeValue={onChange}
              />
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
