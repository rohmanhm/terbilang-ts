# Terbilang.ts
Simple Typescript/Javascript Number Converter which is converting number into indonesian words.

## Install

via NPM
```bash
npm install terbilang-ts
```

## Usage
For Typescript user
```typescript
import Terbilang from 'terbilang-ts'

const terbilang = new Terbilang
console.log(terbilang.Convert(1100000)) // Satu Juta Seratus Ribu
```

For Javascript user
```javascript
import Terbilang from 'terbilang-ts' // Babel with es6
const Terbilang = require('terbilang-ts').default // with es5

const terbilang = new Terbilang
console.log(terbilang.Convert(1100000))
```

## License
[MIT](http://opensource.org/licenses/MIT)
Copyright (c) 2018 - MH Rohman Masyhar
