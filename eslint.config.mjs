import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import jestDom from 'eslint-plugin-jest-dom'
import pluginQuery from '@tanstack/eslint-plugin-query'
import sonarjs from 'eslint-plugin-sonarjs'
import testingLibrary from 'eslint-plugin-testing-library'

import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { fixupPluginRules } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})

const eslintConfig = [
  eslintPluginPrettierRecommended,
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'plugin:prettier/recommended'),
  ...pluginQuery.configs['flat/recommended'],
  {
    plugins: {
      'jest-dom': fixupPluginRules(jestDom),
      'sonarjs': fixupPluginRules(sonarjs),
      'testing-library': fixupPluginRules(testingLibrary)
    }
  }
]

export default eslintConfig
