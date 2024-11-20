import { useState } from 'react';
import { Students } from './students';
import { StudentDetail } from './student';
import { StudentForm } from './student-form';

const initialStudents = [
  {
    name: 'Martin',
    lastName: 'Melo Godínez',
    id: 'A18001098',
    grade: '5°',
    group: 'A',
    active: true
  },
  {
    name: 'Danna',
    lastName: 'Rodriguez Rojas',
    id: '20248189',
    grade: '3°',
    group: '1',
    active: true
  },
  {
    name: 'Patricia',
    lastName: 'Perez',
    id: 'A18001099',
    grade: '4°',
    group: 'B',
    active: true
  },
  {
    name: 'Brenda',
    lastName: 'Valdivia Villalva',
    id: '14680203',
    grade: '8',
    group: 'A',
    active: false
  }
];

export const StudentContainer = () => {
  const [students, setStudents] = useState(initialStudents);
  const [currentStudent, setCurrentStudent] = useState(null);

  return (
    <>
      <h1>Estudiantes Primaria #123 Peso Pluma</h1>
      <Students
        students={students}
        setCurrentStudent={setCurrentStudent}
      />
      <StudentForm setStudents={setStudents} />
      {currentStudent ? <StudentDetail
        student={students[currentStudent]}
      /> : null}
    </>

  )
}