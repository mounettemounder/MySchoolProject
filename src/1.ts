// Create a function to generate a random number between 1 and 10
const randomNumber = (): number => {
    const min = 1;
    const max = 10;
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Use the function to generate a random number and print it to the console
console.log("Random number:", randomNumber());
