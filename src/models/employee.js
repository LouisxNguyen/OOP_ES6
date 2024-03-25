import Person from './person.js'
export default class Employee extends Person {
    constructor(_name, _address, _idCode, _email, _type, _ngayLam, _luong1Ngay){
        super(_name, _address, _idCode, _email, _type);
        this.ngayLam = _ngayLam;
        this.luong1Ngay = _luong1Ngay;
        this.tongLuong = 0;
    }
    tinhLuong() {
        return this.tongLuong = Number(this.luong1Ngay)*Number(this.ngayLam);
    }
}

