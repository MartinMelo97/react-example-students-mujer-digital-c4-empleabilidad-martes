import { useState } from "react"

const defaultUserData = {
  name: '',
  lastName: '',
  id: '',
  grade: '',
  group: '',
  active: true
};

export const StudentForm = ({ setStudents }) => {
  const [student, setStudent] = useState(defaultUserData);

  const handleChange = (event) => {
    setStudent((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value
      }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setStudents((prevState) => {
      return [...prevState, student];
    })
  }

  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: '20px 0'
      }}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name">Nombre(s)</label>
      <input type="text" id="name" name="name" onChange={handleChange} value={student.name}/>

      <label htmlFor="lastName">Apellidos</label>
      <input type="text" id="lastName" name="lastName" onChange={handleChange} value={student.lastName}/>

      <label htmlFor="id">Matricula</label>
      <input type="text" id="id" name="id" onChange={handleChange} value={student.id}/>

      <label htmlFor="grade">Grado</label>
      <input type="text" id="grade" name="grade" onChange={handleChange} value={student.grade}/>

      <label htmlFor="group">Grupo</label>
      <input type="text" id="group" name="group" onChange={handleChange} value={student.group}/>
      <br />
      <input type="submit" value="Agregar" />
    </form>
  )
}
