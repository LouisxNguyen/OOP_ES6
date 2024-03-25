import Person from './person.js'
export default class Student extends Person {
    constructor(_name, _address, _idCode, _email, _type, _toan, _ly, _hoa){
        super(_name, _address, _idCode, _email, _type);
        this.toan = _toan;
        this.ly = _ly;
        this.hoa = _hoa;
        this.dtb = 0;
    }
    tinhDTB() {
        return this.dtb = (Number(this.toan) + Number(this.ly) +  Number(this.hoa))/3;
    }
}