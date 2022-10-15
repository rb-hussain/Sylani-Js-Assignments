// EXCERCISE ONE

class PersonAccount {
    constructor(firstname,lastname,income,discriptionproperties,expense,totalincome,totalExpense,discriptionproperties2,addIncome,addExpense,accountBalance) {
      this.firstname= firstname;
      this.lastname = lastname;
      this.incomes(income,discriptionproperties);
      this.expenses(expense,discriptionproperties2);
      this.totalincome = totalincome;
      this.totalExpense = totalExpense;
      this.addIncome = addIncome;
      this.addExpense = addExpense;
      this.accountBalance = accountBalance;
    }

    incomes(income,discriptionproperties){
        this.income = income;
        this.discriptionproperties = discriptionproperties;
    }
    expenses(expense,discriptionproperties2){
        this.expense = expense;
        this.discriptionproperties2 = discriptionproperties2;
    }



}
// const test = new PersonAccount();
// console.log(test);

//EXCERCISE NO 2


class Automobile{
    constructor(name,modal,color,doorStyle,noOfdoors){
        this.name = name;
        this.modal=modal;
        this.color= color;        
        this.doors(noOfdoors,doorStyle);
    }
    doors(noOfdoors,doorStyle){
        this.noOfdoors = noOfdoors;
        this.doorStyle = doorStyle;
    }
}
//const test2 = new Automobile();

class Car extends Automobile{
    constructor(name,modal,color,doorStyle,noOfdoors,fuelAvg,year){
        super(name,modal,color,doorStyle,noOfdoors);
        this.fuelAvg = fuelAvg;
        this.year=year;    
    }
}

class Truck extends Automobile{
    constructor(name,modal,color,doorStyle,noOfdoors,noOfWheels,fuelType){
        super(name,modal,color,doorStyle,noOfdoors);
        this.noOfWheels = noOfWheels;
        this.fuelType=fuelType;    
    }
}