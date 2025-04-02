// Define your TypeScript types here
type SchoolMember = {
  name: string;
  age: number;
};

class Teacher extends SchoolMember {
  // Implement methods specific to teachers
}

class Student extends SchoolMember {
  // Implement methods specific to students

  // Example of a method that returns an object with additional properties
  private extraInfo: { [key: string]: any };

  constructor(name: string, age: number) {
    super(name, age);
    this.extraInfo = { fullName: name + " " + (age > 18 ? 'is' : 'was') + ' an adult.' };
  }

  // Example of a method that can be used to display information about the student
  public getExtraInfo(): string {
    return JSON.stringify(this.extraInfo);
  }
}

// Create objects for teachers and students
const teacher: Teacher = { name: "John", age: 20 };
const student: Student = new Student("Alice", 17);

console.log(teacher.getExtraInfo());
