export const Students = ({ students, setCurrentStudent }) => {

  const getStatusText = (isActive) =>
    isActive ? 'Activo' : 'Inactivo';

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellidos</th>
          <th>Matricula</th>
          <th>Grado</th>
          <th>Grupo</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => {
          return (
            <tr onClick={() => setCurrentStudent(index)} key={student.id}>
              <td>{student.name}</td>
              <td>{student.lastName}</td>
              <td>{student.id}</td>
              <td>{student.grade}</td>
              <td>{student.group}</td>
              <td>{getStatusText(student.active)}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}