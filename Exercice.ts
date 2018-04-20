export class Exercice {

    private _year: number;
    private _code: string;


    constructor(year: number, code: string) {
        this._year = year;
        this._code = code;
    }


    get year(): number {
        return this._year;
    }

    set year(value: number) {
        this._year = value;
    }

    get code(): string {
        return this._code;
    }

    set code(value: string) {
        this._code = value;
    }
}