import React, {
  FormEventHandler,
  Fragment,
  FunctionComponent,
  memo,
  useEffect,
  useState,
} from "react";
import { IPropsField } from "../../utils";

const Checkbox: FunctionComponent<IPropsField> = ({
  form_name,
  field,
  changeValue,
}: IPropsField) => {
  const [items, setItems] = useState<any[]>(field.extra.items ?? []);
  const [values, setValues] = useState<any[]>(field.value ?? []);

  // * Init.
  useEffect(() => {
    const _items = field.extra.items.map((item: any) => {
      if (field.value && field.value.includes(item.value)) {
        item.checked = true;
      } else {
        item.checked = false;
      }
      return item;
    });
    setItems(_items);
    setValues(field.value ?? []);
  }, [field.extra.items, field.value]);

  // * On input.
  const onInput: FormEventHandler<HTMLInputElement> = async (
    event: React.FormEvent<HTMLInputElement>
  ): Promise<void> => {
    const item_val = event.currentTarget.value;

    let _values: any[] = values;

    if (event.currentTarget.checked) {
      _values = [..._values, item_val];
    } else {
      _values = _values.filter((val: any) => {
        if (val !== item_val) {
          return val;
        }
      });
    }

    setValues(_values);

    const data = {
      form_name,
      field_name: field.name,
      value: _values,
    };

    changeValue(data);
  };

  return (
    <Fragment>
      {items &&
        items.map((item: any) => (
          <Fragment key={item.title}>
            <input
              type={field.type}
              id={field.attributes.id ? field.attributes.id : field.name}
              className={
                field.attributes.classes
                  ? field.attributes.classes.join(" ")
                  : undefined
              }
              value={item.value}
              name={item.name}
              defaultChecked={item.value ? item.checked : false}
              onInput={onInput}
            />
            <span>{item.title}</span>
          </Fragment>
        ))}
    </Fragment>
  );
};
export default memo(Checkbox);
