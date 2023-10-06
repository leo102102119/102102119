module.exports = {  
  root: true,  
  transform: {  
    "^.+\\.jsx?$": "babel-jest"  
  },  
  moduleFileExtensions: [  
    "js",  
    "json",  
    "jsx"  
  ],  
  testMatch: [  
    "**/__tests__/**/*.js?(x)",  
    "**/?(*.)+(spec|test).js?(x)"  
  ],  
  testEnvironment: "jsdom",  
  setupFiles: [  
    "<rootDir>/setupTests.js"  
  ],  
  collectCoverageFrom: [  
    "src/**/*.{js,jsx}",  
    "!src/**/*.test.js"  
  ],  
  coverageThreshold: {  
    global: {  
      branches: 80,  
      functions: 80,  
      lines: 80,  
      statements: -10  
    }  
  }  
};