import {
  ComponentClass,
  FunctionComponent,
  memo,
  useEffect,
  useState,
} from "react";
import { IField, IPropsField } from "../utils/types";

// * Field component.
import Input from "./fields/Input";
import Select from "./fields/Select";
import File from "./fields/File";
import Textarea from "./fields/Textarea";
import Checkbox from "./fields/Checkbox";
import Radio from "./fields/Radio";
import Message from "./Message";
import AutoComplete from "./fields/AutoComplete";
import { createComponentWithPrefix } from "../utils";

// * List field types.
const components: any = {
  input: Input,
  select: Select,
  file: File,
  textarea: Textarea,
  checkbox: Checkbox,
  radio: Radio,
  autocomplete: AutoComplete,
};

const Field: FunctionComponent<IPropsField> = ({
  form_name,
  field,
  changeValue,
}: IPropsField) => {
  const [_field, _setField] = useState<IField>(field);
  const FieldComponent: ComponentClass<any, any> = components[field.type];

  // * Init.
  useEffect(() => {
    _setField(field);
  }, [field]);

  const onChange = (data: any) => {
    changeValue(data);
  };

  // * Render element field.
  const renderFieldComponent = () => {
    return (
      <>
        {_field.attributes.label && (
          <label htmlFor={_field.attributes.id}>
            {_field.attributes.label}
          </label>
        )}
        <FieldComponent
          key={_field.name}
          form_name={form_name}
          field={_field}
          changeValue={onChange}
        />
        {/* Errors */}
        {renderErrors()}
      </>
    );
  };

  // * Render errors list.
  const renderErrors = () => {
    if (_field.validation) {
      if (_field.validation.errors.length) {
        return _field.validation.errors.map((error: string, indx: number) => (
          <Message
            key={indx}
            error={error}
            messages={_field.messages ? _field.messages : []}
          />
        ));
      }
    }
  };

  return (
    <>
      {_field.prefix?.tag
        ? createComponentWithPrefix(renderFieldComponent(), _field.prefix)
        : renderFieldComponent()}
    </>
  );
};

export default memo(Field);
