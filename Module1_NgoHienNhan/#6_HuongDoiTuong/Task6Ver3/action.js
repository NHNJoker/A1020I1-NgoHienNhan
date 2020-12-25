let check = true;
let listCustomer = [];
let listEmployees = [];
let checkBirth = new RegExp(/^[0-9]{2}\/(([0][1-9])|([1][0-2]))\/(([1][9][3-9)][0-9])|([2][0][0-2][0-1]))$/);
let checkID = new RegExp(/^[0-9]{9}$/);
let checkEmail = new RegExp(/^([a-z-A-Z-0-9])+[@][a-z]{5}[.][a-z]{3}$/);
let countNv = 0;
let countCus = 0;

class Employee {
    constructor(name, id, birth, email, office) {
        this.name = name;
        this.idCard = id;
        this.dayOfBirth = birth;
        this.email = email;
        this.office = office;
    }

    setName(name) {
        this.name = name
    }

    getName() {
        return this.name;
    }

    setIdCard(id) {
        this.idCard = id;
    }

    getIdCard() {
        return this.idCard;
    }

    setDayOfBirth(birth) {
        this.dayOfBirth = birth;
    }

    getDayOfBirth() {
        return this.dayOfBirth;
    }

    setEmail(email) {
        this.email = email
    }

    getEmail() {
        return this.email;
    }

    setOffice(office) {
        this.office = office;
    }

    getOffice(office) {
        return this.office;
    }

    setSalary() {
        let salary = 0;
        if (this.office === 'Manager') {
            salary = 500;
        } else {
            if (this.office === 'Sale') {
                salary = 300;
            } else {
                salary = 200;
            }
        }
        return salary;
    }
}
function submit() {
    let nameEdit = "";
    let name = document.getElementById('name').value;
    name = name.trim().toLowerCase();
    for (let i = 0; i < name.length; i++) {
        if (name.charAt(i) === " " && name.charAt(i + 1) === " ") {
            continue;
        }
        if (i === 0 || name.charAt(i - 1) === " ") {
            nameEdit += name.charAt(i).toUpperCase();
            continue
        }
        nameEdit += name.charAt(i);
    }
    name = nameEdit;
    if (name === '') {
        document.getElementById('name').style.borderColor = "red";
        check = false;
    } else {
        document.getElementById('name').style.borderColor = "blue";
    }
    let id = document.getElementById('id').value;
    let testID = checkID.test(id);
    if (!testID) {
        check = false;
        document.getElementById('id').style.borderColor = "red";
    } else {
        document.getElementById('id').style.borderColor = "blue";
    }

    let birth = document.getElementById('date').value;
    let testBirth = checkBirth.test(birth);
    if (!testBirth) {
        document.getElementById('date').style.borderColor = "red";
        check = false;
    } else {
        document.getElementById('date').style.borderColor = "blue";
    }
    let email = document.getElementById('email').value;
    let testEmail = checkEmail.test(email);
    if (!testEmail) {
        document.getElementById('email').style.borderColor = "red";
        check = false;
    } else {
        document.getElementById('email').style.borderColor = "blue";
    }
    let office;
    office = document.getElementById('office').value;
    if (check === true) {
        let objEmployee = new Employee(name, id, birth, email, office);
        listEmployees.push(objEmployee);
        alert('Thêm mới thành công.');
        document.getElementById('name').value='';
        document.getElementById('id').value='';
        document.getElementById('date').value='';
        document.getElementById('email').value='';
        console.log(listEmployees);
    }
    check = true;
}