import React from 'react';
import './importIcons';
import './icon.scss';
import classes from '../helpers/classes';
import './icon.scss';
interface IconProps extends React.SVGAttributes<SVGElement> {
    //此处写React.SVGAttributes<SVGElement> 会有冲突报错
    //在index.tsx之前代码的情况下
    name: string;
}
// Icon:React.FunctionComponent<IconProps> 添加name属性到props
const Icon: React.FunctionComponent<IconProps> = ({className , name, ...restProps}) => {
    return (
        <svg className={classes('wui-icon', className)}
            {...restProps}
        >
            <use xlinkHref={`#${name}`} />
        </svg>
    )
}
export default Icon;