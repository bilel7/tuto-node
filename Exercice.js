"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Exercice = (function () {
    function Exercice(year, code) {
        this._year = year;
        this._code = code;
    }
    Object.defineProperty(Exercice.prototype, "year", {
        get: function () {
            return this._year;
        },
        set: function (value) {
            this._year = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Exercice.prototype, "code", {
        get: function () {
            return this._code;
        },
        set: function (value) {
            this._code = value;
        },
        enumerable: true,
        configurable: true
    });
    return Exercice;
}());
exports.Exercice = Exercice;
