"use strict";
/**
 * Copyright 2018 MH Rohman Masyhar
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Terbilang = /** @class */ (function () {
    function Terbilang() {
        this.words = ['', 'Satu', 'Dua', 'Tiga', 'Empat', 'Lima', 'Enam', 'Tujuh', 'Delapan', 'Sembilan', 'Sepuluh', 'Sebelas'];
    }
    Terbilang.prototype.Convert = function (number) {
        var word = '';
        /* 1 - 12 */
        if (number < 12) {
            word = this.words[number];
        }
        /* 12 - 19 */
        else if (number < 20) {
            word = this.words[number - 10] + ' Belas';
        }
        /* 20 - 99 */
        else if (number < 100) {
            var primary = number / 10;
            var start = parseInt(String(primary).substr(0, 1));
            var end = number % 10;
            word = this.words[start] + ' Puluh ' + this.words[end];
        }
        /* 100 - 199 */
        else if (number < 200) {
            word = 'Seratus ' + this.Convert(number - 100);
        }
        /* 200 - 999 */
        else if (number < 1000) {
            var primary = number / 100;
            var start = parseInt(String(primary).substr(0, 1));
            var end = number % 100;
            word = this.words[start] + ' Ratus ' + this.Convert(end);
        }
        /* 1,000 - 1,999 */
        else if (number < 2000) {
            word = 'Seribu ' + this.Convert(number - 1000);
        }
        /* 2,000 - 9,999 */
        else if (number < 10000) {
            var primary = number / 1000;
            var start = parseInt(String(primary).substr(0, 1));
            var end = number % 1000;
            word = this.words[start] + ' Ribu ' + this.Convert(end);
        }
        /* 10,000 - 99,999 */
        else if (number < 100000) {
            var primary = number / 100;
            var start = parseInt(String(primary).substr(0, 2));
            var end = number % 1000;
            word = this.Convert(start) + ' Ribu ' + this.Convert(end);
        }
        /* 100,000 - 999,999 */
        else if (number < 1000000) {
            var primary = number / 1000;
            var start = parseInt(String(primary).substr(0, 3));
            var end = number % 1000;
            word = this.Convert(start) + ' Ribu ' + this.Convert(end);
        }
        /* 1,000,000 - 	99,999,999 */
        else if (number < 100000000) {
            var primary = number / 1000000;
            var start = parseInt(String(primary).substr(0, 4));
            var end = number % 1000000;
            word = this.Convert(start) + ' Juta ' + this.Convert(end);
        }
        else if (number < 1000000000) {
            var primary = number / 1000000;
            var start = parseInt(String(primary).substr(0, 4));
            var end = number % 1000000;
            word = this.Convert(start) + ' Juta ' + this.Convert(end);
        }
        else if (number < 10000000000) {
            var primary = number / 1000000000;
            var start = parseInt(String(primary).substr(0, 1));
            var end = number % 1000000000;
            word = this.Convert(start) + ' Milyar ' + this.Convert(end);
        }
        else if (number < 100000000000) {
            var primary = number / 1000000000;
            var start = parseInt(String(primary).substr(0, 2));
            var end = number % 1000000000;
            word = this.Convert(start) + ' Milyar ' + this.Convert(end);
        }
        else if (number < 1000000000000) {
            var primary = number / 1000000000;
            var start = parseInt(String(primary).substr(0, 3));
            var end = number % 1000000000;
            word = this.Convert(start) + ' Milyar ' + this.Convert(end);
        }
        else if (number < 10000000000000) {
            var primary = number / 10000000000;
            var start = parseInt(String(primary).substr(0, 1));
            var end = number % 10000000000;
            word = this.Convert(start) + ' Triliun ' + this.Convert(end);
        }
        else if (number < 100000000000000) {
            var primary = number / 1000000000000;
            var start = parseInt(String(primary).substr(0, 2));
            var end = number % 1000000000000;
            word = this.Convert(start) + ' Triliun ' + this.Convert(end);
        }
        else if (number < 1000000000000000) {
            var primary = number / 1000000000000;
            var start = parseInt(String(primary).substr(0, 3));
            var end = number % 1000000000000;
            word = this.Convert(start) + ' Triliun ' + this.Convert(end);
        }
        else if (number < 10000000000000000) {
            var primary = number / 1000000000000000;
            var start = parseInt(String(primary).substr(0, 1));
            var end = number % 1000000000000000;
            word = this.Convert(start) + ' Kuadriliun ' + this.Convert(end);
        }
        var split = word.split(' ');
        var full = [];
        for (var i = 0; i < split.length; i++) {
            if (split[i] != '') {
                full.push(split[i]);
            }
        }
        return full.join(' ');
    };
    return Terbilang;
}());
exports.default = Terbilang;
