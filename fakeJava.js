// Java copy-cat
class Employee{
    constructor(name, surname, sex){
        this.name = name;
        this.surname = surname;
        this.sex = sex;
    }

    sayHello(){
        console.log(`Hi from ${this.name}`);
    }
}
let emp = new Employee("Ciccio", "Pasticcio", "Male");
console.log(emp.surname);
emp.sayHello();

class Manager extends Employee{
    constructor(name, surname, sex, yearsOfExperience, bonusSalary){
        super(name, surname, sex);
        this.yearsOfExperience = yearsOfExperience;
        this.bonusSalary = bonusSalary;
    }

    fire(){
        console.log(this.yearsOfExperience);
        console.log(this.name);
        console.log("You're fired! Bye bye");
    }
}
let manager = new Manager("Ciccio", "Pasticcio", "Male", 10, 1000);
manager.fire();
manager.sayHello();
let div = document.getElementById("myDiv");
div.innerHTML = "<div id = 'subDiv'> <p> 'Ciao Mondo' </p> </div>";
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let div2 = document.querySelector("#myDiv"); 
let divs = document.querySelectorAll(".myDiv"); //JQuery copy-cat

//callback, it will be called later on
function loadDocument(){
    let ajax = new XMLHttpRequest(); //Async javascript and XML
    ajax.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            fromJsonToTable(this.responseText);
            // document.querySelector('#data').innerHTML = this.responseText;
        }
    };
    ajax.open("GET", "data.json");
    ajax.send();
}

function fromJsonToTable(data){
    data = JSON.parse(data);
    var table = document.createElement("table"), row;
    table.setAttribute("id", "mytable");
    var tableHeader = document.createElement("thead");
    var orderArrayHeader = ["Name", "Lastname", "Sex", "Role", "Senior Position", "Age"];
    table.appendChild(tableHeader);
    for(var i=0; i<orderArrayHeader.length; i++){
        tableHeader.appendChild(document.createElement("th"))
        .appendChild(document.createTextNode(orderArrayHeader[i]));
    }

    document.getElementById("myDiv").appendChild(table);
    for (let key in data) {
        val = Object.values(data[key]);
        row = table.insertRow();
        for (k in val){
            cell = row.insertCell();
            cell.innerHTML = val[k];
        }
    }
    var divContainer = document.getElementById("data");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);

}


// loadDocument();


