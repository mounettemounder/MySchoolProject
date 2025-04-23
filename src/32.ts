import { Student } from './student'; // Assuming a module called 'student' contains the student interface

export function createTeacher(): Teacher {
  return new Teacher(Student());
}
