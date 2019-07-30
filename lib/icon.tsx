import React from 'react';
import './importIcons';
import './icon.scss';

interface IconProps {
    name: string 
}
// Icon:React.FunctionComponent<IconProps> 添加name属性到props
const Icon:React.FunctionComponent<IconProps> = (props)=>{
    return (
        <svg className = 'icon'>
            <use xlinkHref={`#${props.name}`}></use>
        </svg>
    )
}
export default Icon ;