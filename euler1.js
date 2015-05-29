
var findSums = function(max, num1, num2) {
    var number = 0;
    var sum = 0;

    while (number < max) {
        if (number % num1 === 0 || number % num2 === 0) {
            sum += number;
        }

        number++;
    }
    
    return sum;
};

var finalSum = findSums(10, 3, 5);

console.log(finalSum);