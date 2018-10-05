# Terbilang.ts

[![Greenkeeper badge](https://badges.greenkeeper.io/rohmanhm/terbilang-ts.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.com/rohmanhm/terbilang-ts.svg?branch=master)](https://travis-ci.com/rohmanhm/terbilang-ts)

Simple Typescript/Javascript Number Converter which is converting number into indonesian words.

## Install

- via **npm**:
```bash
npm install terbilang-ts --save
```
- via **yarn**: 
```bash
yarn add terbilang-ts
```

## Usage

Typescript user

```typescript
import Terbilang from 'terbilang-ts'

console.log(Terbilang(1100000)) // Satu Juta Seratus Ribu
```

Javascript user

```javascript
import Terbilang from 'terbilang-ts' // Babel with es6
const Terbilang = require('terbilang-ts').default // with es5

console.log(Terbilang(1100000)) // Satu Juta Seratus Ribu
```

## API

```typescript
Terbilang(number) => string
```

* `number`: type `number`. example: `10000`

## License

[MIT](http://opensource.org/licenses/MIT)
Copyright (c) 2018 - MH Rohman Masyhar
