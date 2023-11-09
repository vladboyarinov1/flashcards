import { ComponentPropsWithoutRef, useState } from 'react'

import { Eye, EyeOff, Search } from '@/common/icons'
import { clsx } from 'clsx'
import { Field, Form, Formik } from 'formik'

import s from './textField.module.scss'

import { validate } from './validate'

type InputProps = {
  initialValue?: string
  label: string
  variant: 'default' | 'email' | 'password' | 'search'
} & ComponentPropsWithoutRef<any>

export const TextField = (
  props: InputProps & Omit<ComponentPropsWithoutRef<'input'>, keyof InputProps>
) => {
  const { initialValue, label, variant, ...rest } = props
  const [showPassword, setShowPassword] = useState(false)
  const togglePasswordHandler = () => {
    setShowPassword(!showPassword)
  }

  return (
    <Formik
      initialValues={{
        [variant]: initialValue ?? '',
      }}
      onSubmit={values => {
        // same shape as initial values
      }}
      validationSchema={validate}
    >
      {({ errors }) => (
        <Form className={s.wrapper}>
          <label>{label}</label>
          <div className={s.inputWrapper}>
            <Field
              className={clsx(
                s[variant],
                { [s.error]: errors[variant] },
                { [s.searchClass]: variant === 'search' }
              )}
              name={variant}
              type={showPassword ? 'text' : variant}
              {...rest}
            />
            {variant === 'password' &&
              (showPassword ? (
                <EyeOff className={s.toggleEye} onClick={togglePasswordHandler} />
              ) : (
                <Eye className={s.toggleEye} onClick={togglePasswordHandler} />
              ))}

            {variant === 'search' && <Search className={s.searchImg} color={'red'} />}
            {errors[variant] ? <div className={s.errorText}>{errors[variant]}</div> : null}
          </div>
        </Form>
      )}
    </Formik>
  )
}
