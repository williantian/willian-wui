import {FormValue} from "./form";

interface FormRule {
  key: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  validator?: {
    name: string,
    validate: (value: string) => Promise<void>
  };
}
type FormRules = Array<FormRule>

function isEmpty(value: any) {
  return value === undefined || value === null || value === '';
}

const Validator = (formValue: FormValue, rules: FormRules,callback:(errors:any)=>void): void => {
  let errors: any = {};
  const addError = (key: string, message: string | Promise<any>) => {
    if (errors[key] === undefined) {
      errors[key] = [];
    }
    errors[key].push(message)
  };
  rules.map(rule => {
    const value = formValue[rule.key];
    if (rule.validator) {
      //说明是自定义校验器
      const promise = rule.validator.validate(value);
      addError(rule.key, promise)
    }
    if (rule.required) {
      if (isEmpty(value)) {
        addError(rule.key, '必填')
      }
    }
    if (rule.minLength) {
      if (!isEmpty(value) && value!.length < rule.minLength) {
        addError(rule.key, '太短')
      }
    }
    if (rule.maxLength) {
      if (!isEmpty(value) && value!.length > rule.maxLength) {
        addError(rule.key, '太长')
      }
    }
    if (rule.pattern && !isEmpty(value)) {
      if (!(rule.pattern.test(value))) {
        addError(rule.key, '格式不对')
      }
    }
  });
  Promise.all(flat(Object.values(errors))).then(() => {
    callback(errors)
  }, () => {
    callback(errors)
  });
};
export default Validator;

function flat(array: Array<any>) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] instanceof Array) {
      result.push(...array[i])
    } else {
      result.push(array[i])
    }
  }
  return result;
}