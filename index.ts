/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2018 - present MH Rohman Masyhar
 */

class Terbilang {
  private words = [
    '',
    'Satu',
    'Dua',
    'Tiga',
    'Empat',
    'Lima',
    'Enam',
    'Tujuh',
    'Delapan',
    'Sembilan',
    'Sepuluh',
    'Sebelas'
  ]
  public Convert (value: number) {
    let word = ''

    /* 1 - 12 */
    if (value < 12) {
      word = this.words[value]
    } else if (value < 20) {
      /* 12 - 19 */
      word = this.words[value - 10] + ' Belas'
    } else if (value < 100) {
      /* 20 - 99 */
      const primary = value / 10
      const start = parseInt(String(primary).substr(0, 1), 10)
      const end = value % 10
      word = this.words[start] + ' Puluh ' + this.words[end]
    } else if (value < 200) {
      /* 100 - 199 */
      word = 'Seratus ' + this.Convert(value - 100)
    } else if (value < 1000) {
      /* 200 - 999 */
      const primary = value / 100
      const start = parseInt(String(primary).substr(0, 1), 10)
      const end = value % 100
      word = this.words[start] + ' Ratus ' + this.Convert(end)
    } else if (value < 2000) {
      /* 1,000 - 1,999 */
      word = 'Seribu ' + this.Convert(value - 1000)
    } else if (value < 10000) {
      /* 2,000 - 9,999 */
      const primary = value / 1000
      const start = parseInt(String(primary).substr(0, 1), 10)
      const end = value % 1000
      word = this.words[start] + ' Ribu ' + this.Convert(end)
    } else if (value < 100000) {
      /* 10,000 - 99,999 */
      const primary = value / 100
      const start = parseInt(String(primary).substr(0, 2), 10)
      const end = value % 1000
      word = this.Convert(start) + ' Ribu ' + this.Convert(end)
    } else if (value < 1000000) {
      /* 100,000 - 999,999 */
      const primary = value / 1000
      const start = parseInt(String(primary).substr(0, 3), 10)
      const end = value % 1000
      word = this.Convert(start) + ' Ribu ' + this.Convert(end)
    } else if (value < 100000000) {
      /* 1,000,000 - 	99,999,999 */
      const primary = value / 1000000
      const start = parseInt(String(primary).substr(0, 4), 10)
      const end = value % 1000000
      word = this.Convert(start) + ' Juta ' + this.Convert(end)
    } else if (value < 1000000000) {
      const primary = value / 1000000
      const start = parseInt(String(primary).substr(0, 4), 10)
      const end = value % 1000000
      word = this.Convert(start) + ' Juta ' + this.Convert(end)
    } else if (value < 10000000000) {
      const primary = value / 1000000000
      const start = parseInt(String(primary).substr(0, 1), 10)
      const end = value % 1000000000
      word = this.Convert(start) + ' Milyar ' + this.Convert(end)
    } else if (value < 100000000000) {
      const primary = value / 1000000000
      const start = parseInt(String(primary).substr(0, 2), 10)
      const end = value % 1000000000
      word = this.Convert(start) + ' Milyar ' + this.Convert(end)
    } else if (value < 1000000000000) {
      const primary = value / 1000000000
      const start = parseInt(String(primary).substr(0, 3), 10)
      const end = value % 1000000000
      word = this.Convert(start) + ' Milyar ' + this.Convert(end)
    } else if (value < 10000000000000) {
      const primary = value / 10000000000
      const start = parseInt(String(primary).substr(0, 1), 10)
      const end = value % 10000000000
      word = this.Convert(start) + ' Triliun ' + this.Convert(end)
    } else if (value < 100000000000000) {
      const primary = value / 1000000000000
      const start = parseInt(String(primary).substr(0, 2), 10)
      const end = value % 1000000000000
      word = this.Convert(start) + ' Triliun ' + this.Convert(end)
    } else if (value < 1000000000000000) {
      const primary = value / 1000000000000
      const start = parseInt(String(primary).substr(0, 3), 10)
      const end = value % 1000000000000
      word = this.Convert(start) + ' Triliun ' + this.Convert(end)
    } else if (value < 10000000000000000) {
      const primary = value / 1000000000000000
      const start = parseInt(String(primary).substr(0, 1), 10)
      const end = value % 1000000000000000
      word = this.Convert(start) + ' Kuadriliun ' + this.Convert(end)
    }

    const split = word.split(' ')
    const full = []

    for (const wordSplit of split) {
      if (wordSplit !== '') {
        full.push(wordSplit)
      }
    }

    return full.join(' ')
  }
}

function convertTerbilang (value: number) {
  const terbilang = new Terbilang()

  return terbilang.Convert(value)
}

export default convertTerbilang
