import React from 'react';
import Icon from './icon';

const IconExample: React.FunctionComponent = () => {
    return (
        <div className="wui-example-icon">
            <Icon name='alipay' />
            <Icon name='wechat' />
            <Icon name='qq' />
        </div>
    )
};
export default IconExample