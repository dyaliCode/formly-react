import React, {
  FormEventHandler,
  FunctionComponent,
  memo,
  useEffect,
  useState,
} from "react";

import { isRequired, IPropsField } from "../../utils";

const Select: FunctionComponent<IPropsField> = ({
  form_name,
  field,
  changeValue,
}: IPropsField) => {
  const [value, setValue] = useState(field.value ?? "");
  const [multiple, setMultiple] = useState<boolean>(false);

  // * Init.
  useEffect(() => {
    if (field.extra) {
      const _multiple = field.extra.multiple ? field.extra.multiple : false;
      setMultiple(_multiple);
    }

    setValue(field.value ?? "");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [field.value]);

  // * On input.
  const onInput: FormEventHandler<HTMLSelectElement> = async (
    event: React.FormEvent<HTMLSelectElement>
  ): Promise<void> => {
    let _value;
    if (multiple) {
      let values: any = [];
      const selectedOptions = event.currentTarget.selectedOptions;
      for (let i = 0; i < selectedOptions.length; i++) {
        const value_item: any = selectedOptions[i].value;
        values = [...values, ...value_item];
      }
      _value = values;
    } else {
      _value = event.currentTarget.value;
    }

    setValue(_value);

    const data = {
      form_name,
      field_name: field.name,
      value: _value,
    };

    changeValue(data);
  };

  return (
    <select
      name={field.name}
      value={value}
      id={field.attributes.id}
      className={
        field.attributes.classes ? field.attributes.classes.join(" ") : ""
      }
      required={isRequired(field)}
      disabled={field.attributes.disabled}
      multiple={multiple}
      onChange={onInput}
    >
      {(field.extra.options || []).map((option: any) => {
        return (
          <option key={option.value} value={option.value}>
            {option.title}
          </option>
        );
      })}
    </select>
  );
};

export default memo(Select);
