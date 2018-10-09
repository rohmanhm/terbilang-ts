import test, { Macro } from 'ava'
import terbilang from './index'

const convertMacro: Macro = (t, input, expected) => {
  t.is(terbilang(input), expected)
}
convertMacro.title = (providedTitle, input, expected) => {
  return `Read ${input} as ${expected}`.trim()
}

test(convertMacro, '10', 'Sepuluh')
test(convertMacro, 'notanumber', '')
test(convertMacro, -1, 'Satu')
test(convertMacro, -1000, 'Seribu')
test(convertMacro, 1, 'Satu')
test(convertMacro, 1000, 'Seribu')
test(convertMacro, 11000, 'Sebelas Ribu')
test(convertMacro, 21329, 'Dua Puluh Satu Ribu Tiga Ratus Dua Puluh Sembilan')
test(convertMacro, 100000, 'Seratus Ribu')
test(convertMacro, 1000000, 'Satu Juta')
test(convertMacro, 1000000000, 'Satu Milyar')
