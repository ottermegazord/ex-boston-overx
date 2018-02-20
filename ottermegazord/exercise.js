var exercise = {};

exercise.salaries = null;
exercise.salary = null;

// load salary and data
exercise.load = function(salary, boston){
    exercise.salaries = boston.data;
    exercise.salary = salary;
};

// get salaries larger than given salary
exercise.findBiggerSalaries = function(){

    // ---------------------------------------------------
    //   YOUR CODE
    //
    //     Return a filtered list of salaries.
    //     Return salaries larger than exercise.salary
    //
    //     Example: salaries larger than 300K is 8
    // ---------------------------------------------------
    var threshSalary = Number(document.getElementById("salary").value);
    var salaryList = [];
    salaryList = exercise.salaries.filter(exercise.largerSalary);
    return salaryList;

    // var dataLength = exercise.salaries.length
    // var counter = 0;
    // var salaryList = [];
    // for (var i=0; i< dataLength; i++) {
    //     var currentSalary = Number(exercise.salaries[i][18]);
    //     if (currentSalary > threshSalary){
    //         salaryList.push(currentSalary);
    //         counter++;
    //     }
        // console.log(threshSalary);
       
    console.log(salaryList);
};

// filter function
exercise.largerSalary = function largerSalary(item){

    // ---------------------------------------------------
    //   YOUR CODE
    //
    //     Return a boolean (true/false) if item
    //     is larger than exercise.salary
    // ---------------------------------------------------
    if (item[18]> exercise.salary){
        return true;
    }
    else {
        return false;
    }


};