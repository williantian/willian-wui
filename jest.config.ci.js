const base = require('./jest.config.js');
module.exports = Object.assign({}, base, {
    collectCoverage: true,  //是否收集测试覆盖率
    collectCoverageFrom: ["lib/**/*.{ts,tsx}", "!**/node_modules/**"],//定义测试范围：前面测后面不测
    coverageDirectory: 'coverage',  //生产报告放置目录
    coverageReporters: ['text', 'lcov'],  //生成控制台等报告 使用什么样的报告
    reporters: ["default" ,"jest-junit"],//使用的reporter 添加jest-junit分析报表
})