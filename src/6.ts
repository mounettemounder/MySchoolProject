// MySchoolProject.ts

export class School {
  constructor(public name: string) {}

  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

export class Student {
  constructor(public name: string, public school: School) {}

  study() {
    console.log("I'm studying");
  }
}

export function main() {
  const mySchool = new School("MySchoolProject");
  const myStudent = new Student("John Doe", mySchool);

  myStudent.study();
  mySchool.greet();
}
