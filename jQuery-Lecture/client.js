function Employee(name, salary){
  this.name = name;
  this.salary = salary;
}

var scott = new Employee("Scott", 10000);
var chris = new Employee("Chris", 100000);
var taylor = new Employee("Taylor", 5000);
var christy = new Employee("Christy", 150000);

var employeeArray = [scott, chris, taylor, christy];

var salaryTotal = 0;

$(document).ready(function(){
  $(".container").on("click", "button", function(){
    //Logic Stuff
    var personData = $(this).parent().data();
    salaryTotal -= personData.salary;

    //View Stuff
    $(this).parent().remove();
    updateTotals();
  });

  for(var i = 0; i < employeeArray.length; i++){
    createProfile(employeeArray[i].name, employeeArray[i].salary);
  }
  $(".container").append("<p class='total'></p>");
  updateTotals();
});

function createProfile(name, salary){
  $(".container").append("<div class='profile'>" +
                            "<span>" + name + "</span>" +
                            "<span> $" + salary + "</span>" +
                            "<button>Delete</button>" +
                         "</div>");
  var element = $(".container").children().last();
  element.data("salary", salary);
  element.data("name", name);
  salaryTotal += salary;
}

function updateTotals(){
  $(".total").text("Total Salary: " + salaryTotal);
}
