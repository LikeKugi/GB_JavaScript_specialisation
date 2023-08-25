const createGreeting = (userName) => () => `Hello, ${userName}`;

const greeting = createGreeting('John');
console.log(greeting());
