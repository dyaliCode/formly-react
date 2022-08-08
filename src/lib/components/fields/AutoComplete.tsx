import React, {
  FormEventHandler,
  FunctionComponent,
  memo,
  useEffect,
  useState,
} from "react";

import { isRequired, IPropsField, AutoCompleteItems } from "../../utils";
import { useOutsideClick } from "../../hooks/index";

// * Start Styles
const styleAutocompleteWrapper: any = {
  position: "relative",
  width: "100%",
};

const styleSelectedItems: any = {
  marginBottom: "10px",
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  alignContent: "flex-start",
  gap: "10px",
};

const styleItem: any = {
  // flex: auto,
  fontSize: "0.75rem",
  padding: "0.4rem",
  backgroundColor: "#ff3e00",
  color: "white",
  borderRadius: "5px",
};

const styleDeselect: any = {
  cursor: "pointer",
  borderRadius: "50%",
  width: "15px",
  height: "15px",
  padding: "2px 7px 3px 7px",
  marginLeft: "7px",
  fontSize: "0.6rem",
  backgroundColor: "red",
  border: "solid 1px rgba(255, 255, 255, 0.2)",
  color: "white",
};

// const styleDeselectHover: any = {
//   boxShadow: "0px 0px 4px 1px rgba(255, 255, 255, 0.8)",
// };

const listItems: any = {
  boxShadow: "0 2px 3px 0 rgba(249, 251, 253, 0.24)",
  marginBottom: "20px",
};

const styleUlLi: any = {
  listStyle: "none",
  padding: "0",
  margin: "0",
  color: "black",
  backgroundColor: "rgb(201, 201, 201)",
};

const styleLi: any = {
  // borderBottom: "1px dashed #999999",
  padding: "0.75rem",
  cursor: "pointer",
};
const styleLiHover: any = {
  backgroundColor: "#ff40009c",
  // borderBottom: "1px dashed #ff3e00",
  color: "white",
};

const styleDone: any = {
  backgroundColor: "#1f2d38",
  borderBottomColor: "transparent",
  color: "white",
  textAlign: "center",
};
// * End Styles

const AutoComplete: FunctionComponent<IPropsField> = ({
  form_name,
  field,
  changeValue,
}: IPropsField) => {
  const [value, setValue] = useState<string>("");
  const [items, setItems] = useState<AutoCompleteItems[]>([]);
  const [itemsFiltered, setItemsFiltered] = useState<AutoCompleteItems[]>([]);
  const [selectedItems, setSelectedItems] = useState<AutoCompleteItems[]>([]);
  const [showList, setShowList] = useState<boolean>(false);
  const [filterLength, setFilterLength] = useState<number>(
    field.extra?.filter_lenght ?? 0
  );
  const [hover, setHover] = useState<{ hover: boolean; indx: number }>({
    hover: false,
    indx: -1,
  });

  // * On mount / After update.
  useEffect(() => {
    setValue(field.value ? value : "");

    setSelectedItems(
      !field.value || field.value.length === 0 ? [] : field.value
    );

    if (field.extra) {
      if (field.extra.loadItemes) {
        setItems(field.extra.loadItemes);
      }
      if (field.extra.filter_length) {
        setFilterLength(field.extra.filter_length);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [field.extra, field.value]);

  // * On filter.
  const onFilter: FormEventHandler<HTMLInputElement> = async (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    const keyword = event.currentTarget.value;

    setValue(keyword);

    if (keyword.length >= filterLength) {
      const filtered = items.filter((item: any) => {
        return item.title.toLowerCase().includes(keyword.toLowerCase());
      });

      if (filtered.length) {
        setItemsFiltered(filtered);
        setShowList(true);
      } else {
        setItemsFiltered([]);
        setShowList(false);
      }
    } else {
      setShowList(false);
    }
  };

  // * On select.
  // const onSelectItem = (item: any) => (e: React.MouseEvent<HTMLLIElement>) => {
  const onSelectItem = (item: any) => () => {
    const _items = items.filter(
      (_item: AutoCompleteItems) => _item.value !== item.value
    );
    setItems(_items);

    const _itemsFiltered = itemsFiltered.filter(
      (_item: AutoCompleteItems) => _item.value !== item.value
    );
    setItemsFiltered(_itemsFiltered);

    const _selectedItems = [...selectedItems, item];
    setSelectedItems(_selectedItems);

    if (!_items.length) {
      setShowList(false);
    }

    const data = {
      form_name,
      field_name: field.name,
      value: _selectedItems,
    };

    changeValue(data);
  };

  // * On deselect.
  const onDeselectItem =
    // (item: any) => async (e: React.MouseEvent<HTMLSpanElement>) => {
    (item: any) => async () => {
      const _selectedItems = await selectedItems.filter(
        (_item) => _item.value !== item.value
      );
      setSelectedItems(_selectedItems);

      const _items = [...items, item];
      setItems(_items);

      const _itemsFiltered = [...itemsFiltered, item];
      setItemsFiltered(_itemsFiltered);

      const data = {
        form_name,
        field_name: field.name,
        value: _selectedItems,
      };

      changeValue(data);
    };

  // * On click outside.
  const onClickOutside = () => {
    setShowList(false);
  };

  // * Hide List items if click outside.
  const refListItems: any = useOutsideClick(onClickOutside);

  return (
    <div className="autocomplete-wrapper" style={styleAutocompleteWrapper}>
      <div className="selected-items" style={styleSelectedItems}>
        {selectedItems &&
          selectedItems.map((item: AutoCompleteItems, indx: number) => (
            <div key={indx} className="item" style={{ ...styleItem }}>
              <span>{item.title}</span>
              <span
                className="deselect"
                style={styleDeselect}
                onClick={onDeselectItem(item)}
              >
                x
              </span>
            </div>
          ))}
      </div>

      <input
        type={field.attributes.type ? field.attributes.type : "text"}
        name={field.name}
        value={value}
        id={field.attributes.id ? field.attributes.id : field.name}
        className={
          field.attributes.classes ? field.attributes.classes.join(" ") : ""
        }
        placeholder={field.attributes.placeholder}
        required={isRequired(field)}
        disabled={field.attributes.disabled}
        readOnly={field.attributes.readonly}
        min={field.attributes.min}
        max={field.attributes.max}
        step={field.attributes.step}
        autoCorrect={field.attributes.autocorrect}
        autoComplete={field.attributes.autocomplete}
        onInput={onFilter}
      />

      {itemsFiltered.length > 0 && showList && (
        <div ref={refListItems} className="list-items" style={listItems}>
          <ul style={styleUlLi}>
            {itemsFiltered.map((item: AutoCompleteItems, indx: number) => (
              <li
                onMouseEnter={() => {
                  setHover({ hover: true, indx });
                }}
                onMouseLeave={() => {
                  setHover({ hover: false, indx });
                }}
                style={{
                  ...styleUlLi,
                  ...styleLi,
                  ...(indx === hover.indx && hover.hover ? styleLiHover : null),
                }}
                key={indx}
                onClick={onSelectItem(item)}
              >
                {item.title}
              </li>
            ))}
            <li
              style={{ ...styleUlLi, ...styleLi, ...styleDone }}
              className="done"
              onClick={() => {
                setShowList(false);
                setValue("");
              }}
            >
              Close
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default memo(AutoComplete);
