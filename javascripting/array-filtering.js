numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function evenNumbers (number) {
    return number % 2 === 0
}
filtered = numbers.filter(evenNumbers);

console.log(filtered); // Output: [2, 4, 6, 8, 10]
