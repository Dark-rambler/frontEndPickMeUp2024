import { ErrorMessage } from  '@hookform/error-message'
import { Input, InputProps, TextareaAutosize } from '@mui/material'
import React from 'react'
import { Control, Controller, RegisterOptions } from 'react-hook-form'

type TLabelProps = {
  label?: string
  children: React.ReactNode
  required?: boolean
  labelColor?: string
}

const Label = ({
  label,
  children,
  required,
  labelColor = 'text-white'
}: TLabelProps) => {
  if (!label) {
    return <>{children}</>
  }
  return (
    <label className="mt-2 w-full">
      <p className={`mb-2  font-bold ${labelColor}`}>
        {label} <small className='text-red-500'>{required ? '*' : ''}</small>
      </p>
      {children}
    </label>
  )
}

type TInputProps = InputProps & {
  name: string
  control?: Control<any>
  type?: 'text' | 'number' | 'date' | 'textArea' | 'email' | 'password'
  valueAs?: 'number' | 'date' | 'string'
  placeholder?: string
  label?: string
  size?: 'sm' | 'md' | 'lg'
  onChange?: () => void
  value?: any
  disabled?: boolean
  rules?:
    | Omit<
        RegisterOptions<any, string>,
        'valueAsNumber' | 'valueAsDat' | 'setValueAs' | 'disabled'
      >
    | undefined
  customeClassName?: string
  labelColor?: string
  defaultValue?: string
}

const InputComponent: React.FC<TInputProps> = ({
  control,
  required = true,
  type = 'text',
  name,
  label = '',
  placeholder = '',
  value,
  rules,
  customeClassName,
  disabled = false,
  defaultValue,
  ...props
}) => {
  if (control) {
    return (
      <Controller
        name={name}
        control={control}
        defaultValue={
          type === 'date' ? new Date().toISOString().split('T')[0] : defaultValue
        }
        rules={rules}
        render={({ field, formState: { errors } }) => (
          <div className="w-full ">
            {type !== 'textArea' ? (
              <>
                <Input
                  {...field}
                  defaultValue={defaultValue}
                  type={type}
                  placeholder={placeholder}
                  value= { field.value || ''}
                  {...props}
                />
                <ErrorMessage
                  errors={errors}
                  name={name}
                  render={({ message }) => (
                    <p className="ml-2 text-sm font-semibold text-red-500">
                      {message || 'Este campo es obligatorio'}
                    </p>
                  )}
                />
              </>
            ) : (
              <>
                <TextareaAutosize
                  {...field}
                  placeholder={placeholder}
                  className={`w-full appearance-none rounded-md bg-gray-100/30 text-black placeholder-gray-700 outline-none transition-all focus:bg-teal-50 focus:shadow-xl disabled:bg-gray-300 disabled:text-gray-600 ${customeClassName}`}
                />
                <ErrorMessage
                  errors={errors}
                  name={name}
                  render={({ message }) => (
                    <p className="ml-2 text-sm font-semibold text-red-500">
                      {message || 'Este campo es obligatorio'}
                    </p>
                  )}
                />
              </>
            )}
          </div>
        )}
      />
    )
  }
  return (
    <Label required={required} label={label}>
      {type !== 'textArea' ? (
        <Input
          disabled={disabled}
          type={type}
          value={value}
          placeholder={placeholder}
          {...props}
        />
      ) : (
        <TextareaAutosize
          placeholder={placeholder}
          className={`w-full appearance-none rounded-md bg-white/40 text-gray placeholder-gray-700 outline-none transition-all focus:bg-teal-50 focus:shadow-xl disabled:bg-gray-300 disabled:text-gray-600 ${customeClassName}` }
          value={value}
        />
      )}
    </Label>
  )
}

export default InputComponent
