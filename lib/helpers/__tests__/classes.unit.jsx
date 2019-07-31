import classes from '../classes'

describe('classes测试',()=>{
    it('classes测试接受一个参数',()=>{
        const result = classes('a')
        expect(result).toEqual('a')
    })
    it('classes测试接受两个参数',()=>{
        const result = classes('a','b')
        expect(result).toEqual('a b')
    })
    it('classes测试接受undefined',()=>{
        const result = classes(undefined)
        expect(result).toEqual('')
    })
    it('classes测试接受多个参数',()=>{
        const result = classes('a', '中文', undefined, null, false)
        expect(result).toEqual('a 中文')
    })
    it('classes测试不接受参数',()=>{
        const result = classes()
        expect(result).toEqual('')
    })
})