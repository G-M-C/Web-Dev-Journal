var firstName = prompt("First Name please :");
var lastName = prompt("Last Name please :");
var age = prompt("How old are you ?");
var height = prompt("Enter your height :");
var petname = prompt("What is your pet's name ?");
alert("Thank you for the Information");

var nameCond = null;
var ageCond = null;
var heightCond = null;
var petCond = null;

if(firstName[0]=== lastName[0])
{
  nameCond = true;
}
else {
  nameCond = false;
}

if(age>20 && age<30)
{
  ageCond = true;
}
else {
  ageCond = false;
}

if(height >= 170)
{
  heightCond = true;
}
else {
  heightCond = false;
}

if(petname[petname.length - 1] === "y")
{
  petCond = true;
}
else {
  petCond = false;
}

if(nameCond && ageCond && heightCond && petCond)
{
  console.log("Hi Spy !!");
}
else{
  console.log("Nothing for your eyes here");
}
