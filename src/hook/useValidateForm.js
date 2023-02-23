import { useState } from 'react';

// Custom hook for form validation
function useValidateForm(initialState, validate, callBack) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  }

  function handleBlur() {
    const validationErrors = validate(values);
    setErrors(validationErrors);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (validationErrors === undefined ||  Object.keys(validationErrors).length === 0) callBack();
  }

  return {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  };
}

export default useValidateForm;
