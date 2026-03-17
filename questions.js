const questions = [

/* =========================
MCQ QUESTIONS
========================= */

{
type:"mcq",
question:"What is encapsulation in Java?",
options:[
"Wrapping data and methods together",
"Using loops",
"Creating objects",
"Using arrays"
],
answer:"Wrapping data and methods together",
hint:"Data + Methods"
},

{
type:"mcq",
question:"Which access modifier is used for data hiding?",
options:["private","public","protected","default"],
answer:"private",
hint:"Restricts direct access"
},

{
type:"mcq",
question:"How do we access private variables?",
options:[
"Using getter and setter methods",
"Direct access",
"Using loops",
"Using constructors only"
],
answer:"Using getter and setter methods",
hint:"Controlled access"
},

{
type:"mcq",
question:"Which method is used to get value?",
options:["getter","setter","constructor","main"],
answer:"getter",
hint:"Returns value"
},

{
type:"mcq",
question:"Which method is used to set value?",
options:["setter","getter","main","init"],
answer:"setter",
hint:"Assigns value"
},

{
type:"mcq",
question:"Encapsulation improves?",
options:[
"Data security",
"Loop speed",
"Compilation",
"Memory size"
],
answer:"Data security",
hint:"Protects data"
},

{
type:"mcq",
question:"What is naming convention for getter?",
options:[
"getVariableName()",
"setVariableName()",
"variable()",
"fetch()"
],
answer:"getVariableName()",
hint:"Example: getName()"
},

{
type:"mcq",
question:"What is naming convention for setter?",
options:[
"setVariableName()",
"getVariableName()",
"assign()",
"update()"
],
answer:"setVariableName()",
hint:"Example: setName()"
},

{
type:"mcq",
question:"Encapsulation is achieved using?",
options:[
"Private variables and public methods",
"Loops",
"Arrays",
"Operators"
],
answer:"Private variables and public methods",
hint:"Key concept"
},

{
type:"mcq",
question:"Which principle restricts direct access to data?",
options:[
"Encapsulation",
"Inheritance",
"Polymorphism",
"Abstraction"
],
answer:"Encapsulation",
hint:"Data hiding"
},

/* =========================
CODING QUESTIONS
========================= */

{
type:"code",
question:"Create a class with private variable and getter method",

required:["private","get","return","system.out.println"],

hint:"Create getter method",

solution:`class Student {
  private String name = "Ravi";

  public String getName(){
    return name;
  }

  public static void main(String[] args){
    Student s = new Student();
    System.out.println(s.getName());
  }
}`
},

{
type:"code",
question:"Create a class with private variable and setter method",

required:["private","set","this"],

hint:"Use this keyword",

solution:`class Student {
  private String name;

  public void setName(String name){
    this.name = name;
  }

  public static void main(String[] args){
    Student s = new Student();
    s.setName("Ravi");
  }
}`
},

{
type:"code",
question:"Create a class with private variable and both getter and setter",

required:["private","get","set","return"],

hint:"Combine getter & setter",

solution:`class Student {
  private String name;

  public void setName(String name){
    this.name = name;
  }

  public String getName(){
    return name;
  }

  public static void main(String[] args){
    Student s = new Student();
    s.setName("Ravi");
    System.out.println(s.getName());
  }
}`
},

{
type:"code",
question:"Create a class BankAccount with private balance and show deposit using setter",

required:["private","set","this","system.out.println"],

hint:"balance update",

solution:`class BankAccount {
  private int balance;

  public void setBalance(int amount){
    this.balance = amount;
  }

  public int getBalance(){
    return balance;
  }

  public static void main(String[] args){
    BankAccount b = new BankAccount();
    b.setBalance(1000);
    System.out.println(b.getBalance());
  }
}`
},

{
type:"code",
question:"Create a class Employee with private salary and display using getter",

required:["private","get","return","system.out.println"],

hint:"Getter method",

solution:`class Employee {
  private int salary = 5000;

  public int getSalary(){
    return salary;
  }

  public static void main(String[] args){
    Employee e = new Employee();
    System.out.println(e.getSalary());
  }
}`
},

{
type:"code",
question:"Create encapsulated class with validation in setter (salary > 0)",

required:["if","set","this","system.out.println"],

hint:"Use condition in setter",

solution:`class Employee {
  private int salary;

  public void setSalary(int salary){
    if(salary > 0){
      this.salary = salary;
    }
  }

  public int getSalary(){
    return salary;
  }

  public static void main(String[] args){
    Employee e = new Employee();
    e.setSalary(5000);
    System.out.println(e.getSalary());
  }
}`
}

]