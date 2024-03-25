import Student from "./students.js";
import Employee from "./employee.js";
import Customer from "./customers.js";
export default class ListPerson {
    constructor() {
        this.arr = [];
    }

    //Add
    addNew(person) {
        this.arr.push(person);
    }
    checkType(id) {
        const nowUser = this.arr.find((currentUser) => {
            return currentUser.idCode == id;
        });
        return nowUser;
    }
    delUser(id) {
        const nowUser = this.arr.find((currentUser) => {
            return currentUser.idCode == id;
        });
        this.arr.splice(nowUser, 1)
    }
    updateInfo(newPerson) {
        const index = this.arr.findIndex((currentUser) => {
            return currentUser.idCode == newPerson.idCode;
        });
        this.arr[index] = newPerson;
    }
    sortName(UpDown) {
        this.arr.sort((nameCurrent, nameAfter) => {
            const name1 = nameCurrent.name.toLowerCase();
            const name2 = nameAfter.name.toLowerCase()
            if (UpDown == 'up') {
                return name1.localeCompare(name2);
            }
            else if (UpDown == 'down') {
                return name2.localeCompare(name1);
            }

        })
        return this.arr;
    }
    searchPerson(key) {
        const filterArr = [];
        this.arr.forEach((currentUser) => {
            if (currentUser.type.toLowerCase().indexOf(key) != -1) {
                filterArr.push(currentUser);
            };
        });
        return filterArr;
    }
}