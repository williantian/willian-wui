import * as React from "react";
import {ReactFragment} from "react";
import Input from "../input/input";
import classes from "../helpers/classes";
import './form.scss';

export interface FormValue {
  [K: string]: any;
}
interface Props {
  value: FormValue;
  fields: Array<{ name: string, label: string, input: { type: string } }>;
  buttons: ReactFragment;
  onSubmit: React.FormEventHandler;
  onChange: (value: FormValue) => void;
  errors: { [K: string]: string[] };
  errorDisplayMode?: 'first' | 'all',
}
const Form: React.FunctionComponent<Props> = (props) => {
  const formData = props.value;
  const onSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    props.onSubmit(e)
  };
  const onInputChange = (name: string, value: string) => {
    const newFormValue = {...formData, [name]: value};
    props.onChange(newFormValue)
  };
  return (
    <form onSubmit={onSubmit}>
      <table className="wui-form-table">
        <tbody>
        {props.fields.map(f =>
          <tr className={classes('wui-form-tr')} key={f.name}>
            <td className="wui-form-td">
              <span className="wui-form-label">{f.label}</span>
            </td>
            <td className="wui-form-td">
              <Input type={f.input.type} value={formData[f.name]}
                     onChange={(e) => onInputChange(f.name, e.target.value)}
              />
              <div className="wui-form-error">{
                props.errors[f.name] ? //判空
                  (props.errorDisplayMode === 'first' ?
                    props.errors[f.name][0] : props.errors[f.name].join('，')) :
                  <span>&ensp;</span>
              }</div>
            </td>
          </tr>)}
        <tr className="wui-form-tr">
          <td className="wui-form-td"/>
          <td className="wui-form-td">
            {props.buttons}
          </td>
        </tr>
        </tbody>
      </table>
    </form>
  )
};
Form.defaultProps = {
  errorDisplayMode: 'first',
};
export default Form;