function Person({ person }) {
  return (
    <div>
      <h1>Person : </h1>
      <table>
        <tr>
          <td>Name: </td>
          <td>{person.name}</td>
        </tr>
        <tr>
          <td>Age:</td>
          <td>{person.age}</td>
        </tr>
      </table>
    </div>
  );
}

export default Person;
