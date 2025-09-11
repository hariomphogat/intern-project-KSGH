import * as yup from 'yup';
const schema = yup.object().shape({
  firstName: yup.string().required('First Name is required').min(2, 'At least 2 characters'),
  lastName: yup.string().required('Last Name is required').min(2, 'At least 2 characters'),
  email: yup.string().email('Must be a valid email').required('Email is required'),
  mobile: yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, 'Must be at least 10 digits')
    .max(15, 'Must be at most 15 digits')
    .required('Mobile Number is required'),
  message: yup.string().required('Message is required').min(10, 'At least 10 characters'),
});
export default schema;