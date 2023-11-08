import { ComponentPropsWithoutRef, useState } from 'react'

import ShowPassword from '@/common/icons/eye.svg'
import ClosePassword from '@/common/icons/eye-off.svg'
import Search from '@/common/icons/search.svg'
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
    <div>
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
                className={`${s[variant]} ${errors[variant] && s.error}`}
                name={variant}
                type={showPassword ? 'text' : variant}
                {...rest}
              />
              {variant === 'password' && (
                <img
                  alt={''}
                  className={s.toggleEye}
                  onClick={togglePasswordHandler}
                  src={showPassword ? `${ClosePassword}` : `${ShowPassword}`}
                />
              )}
              {variant === 'search' && (
                <img
                  alt={''}
                  className={s.searchImg}
                  onClick={togglePasswordHandler}
                  src={Search}
                />
              )}
              {errors[variant] ? <div className={s.errorText}>{errors[variant]}</div> : null}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}
