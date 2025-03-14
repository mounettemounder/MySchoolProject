interface Person {
  name: string;
  age: number;
}

function greet(person: Person): void {
  console.log(`Hello, ${person.name}`);
}

greet({ name: 'Alice', age: 30 });
