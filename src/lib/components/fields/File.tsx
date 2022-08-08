import React, {
  FormEventHandler,
  Fragment,
  FunctionComponent,
  memo,
  useEffect,
  useRef,
  useState
} from 'react'

import { isRequired, IPropsField } from '../../utils'

const FieldFile: FunctionComponent<IPropsField> = ({
  form_name,
  field,
  changeValue
}: IPropsField) => {
  const inputFile = useRef<HTMLInputElement>(null)
  const [isMultiple] = useState<boolean>(field.extra.multiple ?? false)
  const [files, setFiles] = useState<any[]>([])

  // * Init.
  useEffect(() => {
    if (!field.value || !field.value.length) {
      setFiles([])
    }
  }, [field.value])

  // * On input.
  const onInput: FormEventHandler<HTMLInputElement> = async (
    event: React.FormEvent<HTMLInputElement>
  ): Promise<void> => {
    let _files: FileList | any[] =
      (event.target as HTMLInputElement).files || []
    _files = Array.from(_files)

    setFiles(_files)

    if (_files.length > 0) {
      const data = {
        form_name,
        field_name: field.name,
        value: _files
      }

      changeValue(data)
    }
  }

  // * On delete file.
  const deleteFile = (e: any, file: File) => {
    e.preventDefault()
    let newValue: any
    const _files: File[] = files.filter((i) => i.name != file.name)
    if (files.length === 0) {
      if (inputFile && inputFile.current) {
        inputFile.current.value = ''
      }
      newValue = null
    } else {
      newValue = _files
    }

    setFiles(newValue)

    const data = {
      form_name,
      field_name: field.name,
      value: newValue
    }

    changeValue(data)
  }

  return (
    <Fragment>
      <input
        type='file'
        name={field.name}
        id={field.attributes.id}
        className={
          field.attributes.classes ? field.attributes.classes.join(' ') : ''
        }
        multiple={isMultiple}
        onChange={onInput}
        ref={inputFile}
        required={isRequired(field)}
      />
      {files.length > 0 && field.extra.showPreview
        ? files.map((file: File, indx: number) => (
            <div key={indx} className='file'>
              <div className='img'>
                <img src={window.URL.createObjectURL(file)} alt={file.name} />
              </div>
              <div className='infos'>
                <ul>
                  <li>Name: {file.name}</li>
                  <li>Size: {file.size}</li>
                  <li>Type: {file.type}</li>
                  <li>
                    <button
                      type='button'
                      onClick={(e) => deleteFile(e, file)}
                      className='btn'
                    >
                      Remove
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ))
        : ''}
    </Fragment>
  )
}

export default memo(FieldFile)
