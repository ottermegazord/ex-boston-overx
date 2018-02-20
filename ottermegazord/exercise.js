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
    var counter = 0;
    var i;
    for (i=0; i<=exercise.salaries.length; i++) {
        var currentSalary = Number(exercise.salaries[i][18]);
        if (currentSalary > threshSalary){
            counter++;
        }
        // console.log(threshSalary);
       
    }
    console.log(counter);
};

// filter function
exercise.largerSalary = function largerSalary(item){

    // ---------------------------------------------------
    //   YOUR CODE
    //
    //     Return a boolean (true/false) if item
    //     is larger than exercise.salary
    // ---------------------------------------------------

};