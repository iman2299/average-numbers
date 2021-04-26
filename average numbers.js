/*write a small web app that does the following:
    - defines an array of 20 number (positive, negative and zeros) and displayes their average.
    - you can define the array directly in the code and fill it with 20 numbers. (i.e. no need for user input)
    - the result should look like this: "The average is (average)".*/
 const numbers = [1, 80, -8, 4,90,20,7,-7,9,10,11,12,13,-30,15,16,-88,18,19,9];
    
function getAvg(numbers) {
    const total = numbers.reduce((acc, c) => acc + c, 0);
    return total / numbers.length;
  }
  
  const average = getAvg(numbers);
  alert("The average is " + (average));
