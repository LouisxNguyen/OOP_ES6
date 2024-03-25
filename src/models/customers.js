import Person from './person.js'
export default class Customer extends Person {
    constructor(_name, _address, _idCode, _email, _type, _company, _receipt, _evaluation){
        super(_name, _address, _idCode, _email, _type);
        this.company = _company;
        this.receipt = _receipt;
        this.evaluation = _evaluation;
    }
    
}