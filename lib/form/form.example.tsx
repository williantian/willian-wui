import Form, {FormValue} from "./form";
import * as React from "react";
import {useState, Fragment} from "react";
import Validator from "./validator";
import Button from "../button/button";

const userNames = ['jack', 'joe', 'bob', 'jane'];
const checkUserName = (username: string, succeed: () => void, fail: () => void) => {
  setTimeout(() => {
    console.log('我现在知道用户名是否存在了');
    if (userNames.indexOf(username) >= 0) {
      fail()
    } else {
      succeed()
    }
  }, 3000)
};
const FormExample: React.FunctionComponent = () => {
  const [formData, setFormData] = useState<FormValue>({
    username: '',
    password: ''
  });
  const [fields] = useState([
    {name: 'username', label: '用户名', input: {type: 'text'}},
    //{name: 'username', label: 'shuru', input: ()=>{return <AntInput/>}},
    //只要接受value onChange 也可以完全引用别的组件
    {name: 'password', label: '密码', input: {type: 'password'}},
  ]);
  const [errors, setErrors] = useState({});
  const onSubmit = () => {
    const rules = [
      {key: 'username', required: true},
      {key: 'username', minLength: 8, maxLength: 16},
      {
        key: 'username', validator: {
          name: 'unique',
          validate(username: string) {
            return new Promise<void>((resolve, reject) => {
              checkUserName(username, () => {
                resolve()
              }, () => {
                reject()
              })
            })
          }
        }
      },
      {key: 'username', pattern: /^[A-Za-z0-9]+$/},
      {key: 'password', required: true},
      {key: 'password', minLength: 8, maxLength: 16},
    ];
    Validator(formData, rules,(errors)=>{
       setErrors(errors);
       console.log(errors);
    });
  };
  return (
    <div>
      <Form value={formData} fields={fields}
            buttons={
              <Fragment>
                <Button level='important' type='submit'>提交</Button>
                <Button>返回</Button>
              </Fragment>
            }
            errors={errors}
            onChange={(newData) => setFormData(newData)}
            onSubmit={onSubmit}
      />
    </div>
  )
};
export default FormExample;