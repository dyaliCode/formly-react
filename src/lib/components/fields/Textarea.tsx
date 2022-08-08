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
  const onInput: FormEventHandler<HTMLTextAreaElement> = async (
    event: React.FormEvent<HTMLTextAreaElement>
  ): Promise<void> => {
    const _value: string = event.currentTarget.value;

    setValue(_value);

    const data = {
      form_name,
      field_name: field.name,
      value: _value,
    };

    changeValue(data);
  };

  return (
    <textarea
      name={field.name}
      className={
        field.attributes.classes ? field.attributes.classes.join(" ") : ""
      }
      value={value}
      placeholder={field.attributes.placeholder}
      required={isRequired(field)}
      disabled={field.attributes.disabled}
      readOnly={field.attributes.readonly}
      rows={field.attributes.rows}
      cols={field.attributes.cols}
      onInput={onInput}
    />
  );
};

export default memo(Input);
