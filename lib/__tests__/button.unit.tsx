import * as renderer from 'react-test-renderer'
import * as React from 'react'
import Button from '../button'

describe('button', () => {
    it('是个div', () => {
        const json = renderer.create(<Button />).toJSON()
        //const json = renderer.create(React.createElement('div',null,'hi')).toJSON()
        //不引入Button就能正常运行         ????????  bug ????未解决
        //修改jest.config,js中为tsConfig: 'tsconfig.json' 问题解决
        expect(json).toMatchSnapshot()
    })
})