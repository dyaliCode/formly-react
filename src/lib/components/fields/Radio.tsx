import React, {
  FormEventHandler,
  Fragment,
  FunctionComponent,
  memo,
  useEffect,
  useState
} from 'react'
import { IPropsField } from '../../utils'

const Radio: FunctionComponent<IPropsField> = ({
  form_name,
  field,
  changeValue
}: IPropsField) => {
  const [items, setItems] = useState<any[]>(field.extra.items ?? null)

  // * Init.
  useEffect(() => {
    const _items = field.extra.items.map((item: any) => {
      if (field.value === item.value) {
        item.checked = true
      } else {
        item.checked = false
      }
      return item
    })
    setItems(_items)
  }, [field, field.value, field.extra.items])

  // * On input.
  const onInput: FormEventHandler<HTMLInputElement> = async (
    event: React.FormEvent<HTMLInputElement>
  ): Promise<void> => {
    const value = event.currentTarget.value

    const data = {
      form_name,
      field_name: field.name,
      value
    }

    changeValue(data)
  }

  return (
    <Fragment>
      {items &&
        items.map((item: any) => (
          <Fragment key={item.title}>
            <input
              type={field.type}
              id={item.id}
              className={
                field.attributes.classes
                  ? field.attributes.classes.join(' ')
                  : ''
              }
              value={item.value}
              name={field.name}
              defaultChecked={item.value ? item.checked : false}
              onInput={onInput}
            />
            <span>{item.title}</span>
          </Fragment>
        ))}
    </Fragment>
  )
}
export default memo(Radio)
