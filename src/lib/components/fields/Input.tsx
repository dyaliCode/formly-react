import React, {
  FormEventHandler,
  FunctionComponent,
  memo,
  useEffect,
  useState,
} from "react";

import { isRequired, IPropsField } from "../../utils";

const Input: FunctionComponent<IPropsField> = ({
  form_name,
  field,
  changeValue,
}: IPropsField) => {
  const [value, setValue] = useState(field.value ?? "");

  // * Init.
  useEffect(() => {
    setValue(field.value ?? "");
  }, [field.value]);

  // * On input.
  const onInput: FormEventHandler<HTMLInputElement> = async (
    event: React.FormEvent<HTMLInputElement>
  ): Promise<void> => {
    const _value: string | number =
      field.attributes.type === "number"
        ? parseInt(event.currentTarget.value)
        : event.currentTarget.value;

    setValue(_value);

    const data = {
      form_name,
      field_name: field.name,
      value: _value,
    };

    changeValue(data);
  };

  return (
    <input
      type={field.attributes.type ? field.attributes.type : "text"}
      name={field.name}
      value={value}
      id={field.attributes.id ? field.attributes.id : field.name}
      className={
        field.attributes.classes
          ? field.attributes.classes.join(" ")
          : undefined
      }
      placeholder={field.attributes.placeholder}
      required={isRequired(field)}
      disabled={field.attributes.disabled}
      readOnly={field.attributes.readonly}
      min={field.attributes.min}
      max={field.attributes.max}
      step={field.attributes.step}
      autoComplete={field.attributes.autocomplete}
      onChange={onInput}
    />
  );
};

export default memo(Input);
