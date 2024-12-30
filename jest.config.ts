import { loadEnvConfig } from '@next/env'
import { pathsToModuleNameMapper } from 'ts-jest'

import { compilerOptions } from './tsconfig.json'

export default () => {
  loadEnvConfig(process.cwd())

  return {
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
    moduleNameMapper: {
      ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
      '\\.css$': 'identity-obj-proxy'
    },
    preset: 'ts-jest',
    resetMocks: true,
    roots: ['<rootDir>/src'],
    testMatch: ['<rootDir>/src/**/*.test.{js,jsx,ts,tsx}'],
    transform: {
      '^.+\\.(js|jsx|ts|tsx)?$': ['babel-jest', { presets: ['next/babel'] }]
    }
  }
}
