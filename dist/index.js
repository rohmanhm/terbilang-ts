"use strict";
/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2018 - present MH Rohman Masyhar
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Terbilang {
    constructor() {
        this.words = [
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
        ];
    }
    Convert(number) {
        let word = '';
        /* 1 - 12 */
        if (number < 12) {
            word = this.words[number];
        }
        else if (number < 20) {
            /* 12 - 19 */
            word = this.words[number - 10] + ' Belas';
        }
        else if (number < 100) {
            /* 20 - 99 */
            const primary = number / 10;
            const start = parseInt(String(primary).substr(0, 1));
            const end = number % 10;
            word = this.words[start] + ' Puluh ' + this.words[end];
        }
        else if (number < 200) {
            /* 100 - 199 */
            word = 'Seratus ' + this.Convert(number - 100);
        }
        else if (number < 1000) {
            /* 200 - 999 */
            const primary = number / 100;
            const start = parseInt(String(primary).substr(0, 1));
            const end = number % 100;
            word = this.words[start] + ' Ratus ' + this.Convert(end);
        }
        else if (number < 2000) {
            /* 1,000 - 1,999 */
            word = 'Seribu ' + this.Convert(number - 1000);
        }
        else if (number < 10000) {
            /* 2,000 - 9,999 */
            const primary = number / 1000;
            const start = parseInt(String(primary).substr(0, 1));
            const end = number % 1000;
            word = this.words[start] + ' Ribu ' + this.Convert(end);
        }
        else if (number < 100000) {
            /* 10,000 - 99,999 */
            const primary = number / 100;
            const start = parseInt(String(primary).substr(0, 2));
            const end = number % 1000;
            word = this.Convert(start) + ' Ribu ' + this.Convert(end);
        }
        else if (number < 1000000) {
            /* 100,000 - 999,999 */
            const primary = number / 1000;
            const start = parseInt(String(primary).substr(0, 3));
            const end = number % 1000;
            word = this.Convert(start) + ' Ribu ' + this.Convert(end);
        }
        else if (number < 100000000) {
            /* 1,000,000 - 	99,999,999 */
            const primary = number / 1000000;
            const start = parseInt(String(primary).substr(0, 4));
            const end = number % 1000000;
            word = this.Convert(start) + ' Juta ' + this.Convert(end);
        }
        else if (number < 1000000000) {
            const primary = number / 1000000;
            const start = parseInt(String(primary).substr(0, 4));
            const end = number % 1000000;
            word = this.Convert(start) + ' Juta ' + this.Convert(end);
        }
        else if (number < 10000000000) {
            const primary = number / 1000000000;
            const start = parseInt(String(primary).substr(0, 1));
            const end = number % 1000000000;
            word = this.Convert(start) + ' Milyar ' + this.Convert(end);
        }
        else if (number < 100000000000) {
            const primary = number / 1000000000;
            const start = parseInt(String(primary).substr(0, 2));
            const end = number % 1000000000;
            word = this.Convert(start) + ' Milyar ' + this.Convert(end);
        }
        else if (number < 1000000000000) {
            const primary = number / 1000000000;
            const start = parseInt(String(primary).substr(0, 3));
            const end = number % 1000000000;
            word = this.Convert(start) + ' Milyar ' + this.Convert(end);
        }
        else if (number < 10000000000000) {
            const primary = number / 10000000000;
            const start = parseInt(String(primary).substr(0, 1));
            const end = number % 10000000000;
            word = this.Convert(start) + ' Triliun ' + this.Convert(end);
        }
        else if (number < 100000000000000) {
            const primary = number / 1000000000000;
            const start = parseInt(String(primary).substr(0, 2));
            const end = number % 1000000000000;
            word = this.Convert(start) + ' Triliun ' + this.Convert(end);
        }
        else if (number < 1000000000000000) {
            const primary = number / 1000000000000;
            const start = parseInt(String(primary).substr(0, 3));
            const end = number % 1000000000000;
            word = this.Convert(start) + ' Triliun ' + this.Convert(end);
        }
        else if (number < 10000000000000000) {
            const primary = number / 1000000000000000;
            const start = parseInt(String(primary).substr(0, 1));
            const end = number % 1000000000000000;
            word = this.Convert(start) + ' Kuadriliun ' + this.Convert(end);
        }
        const split = word.split(' ');
        const full = [];
        for (let i = 0; i < split.length; i++) {
            if (split[i] != '') {
                full.push(split[i]);
            }
        }
        return full.join(' ');
    }
}
function convertTerbilang(number) {
    const terbilang = new Terbilang();
    return terbilang.Convert(number);
}
exports.default = convertTerbilang;
//# sourceMappingURL=index.js.map