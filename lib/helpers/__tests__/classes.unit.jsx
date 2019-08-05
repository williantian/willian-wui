import classes, {scopedClassMaker} from '../classes';
describe('classes测试', () => {
    it('classes测试接受一个参数', () => {
        const result = classes('a');
        expect(result).toEqual('a')
    });
    it('classes测试接受两个参数', () => {
        const result = classes('a', 'b');
        expect(result).toEqual('a b')
    });
    it('classes测试接受undefined', () => {
        const result = classes(undefined);
        expect(result).toEqual('')
    });
    it('classes测试接受多个参数', () => {
        const result = classes('a', '中文', undefined, null, false);
        expect(result).toEqual('a 中文')
    });
    it('classes测试不接受参数', () => {
        const result = classes();
        expect(result).toEqual('')
    });
});
describe('scopedClassMaker',()=>{
    it('接受字符串或对象', () => {
        const sc = scopedClassMaker('wui-layout');
        expect(sc('')).toEqual('wui-layout');
        expect(sc('x')).toEqual('wui-layout-x');
        expect(sc({y: true, z: false})).toEqual('wui-layout-y');
        expect(sc({y: true, z: true})).toEqual('wui-layout-y wui-layout-z');
        expect(sc({y: true, z: true}, {extra: 'red'})).toEqual('wui-layout-y wui-layout-z red');
    });
});