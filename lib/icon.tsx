import React from 'react';

interface IconProps {
    name: string 
}
// Icon:React.FunctionComponent<IconProps> 添加name属性到props
const Icon:React.FunctionComponent<IconProps> = (props)=>{
    return (
        <span>{props.name}</span>
    )
}
export default Icon ;