// https://jestjs.io/docs/en/configuration.html

module.exports = {
    verbose: true,//显示所有的错误
    clearMocks: false,
    collectCoverage: false,  //是否收集测试覆盖率
    reporters: ["default"],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    moduleDirectories: ['node_modules'],
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.json',
            // tsConfig: 'tsconfig.test.json', 若写做这样会一直报引入方式不当错误
        },
    },
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/test/__mocks__/file-mock.js",
        "\\.(css|less|sass|scss)$": "<rootDir>/test/__mocks__/object-mock.js",
    },
    testMatch: ['<rootDir>/**/__tests__/**/*.unit.(js|jsx|ts|tsx)'],
    //所有测试文件在哪里 和规定格式
    transform: {
        "^.+unit\\.(js|jsx)$": "babel-jest",
        //转译 如果是js/jsx就用babel-jest
        '^.+\\.(ts|tsx)$': 'ts-jest',
        //如果是ts/tsx就用ts-jest
    },
    setupFilesAfterEnv: ["<rootDir>test/setupTests.js"]
}