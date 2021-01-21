import {ValidationError} from 'yup';

interface ValidationErrorsInterface {
  [key: string]: string;
}

function getValidationErrors(error: ValidationError) {
  const validationError: ValidationErrorsInterface = {};

  error.inner.forEach(err => {
    err.path && (validationError[err.path] = err.message);
  });

  return validationError;
}

export default getValidationErrors;
