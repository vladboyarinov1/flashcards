import * as Yup from 'yup'

export const validate = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Password should be at least 6 characters')
    .max(20, 'Password should not exceed 20 characters')
    .required('Required'),
})
