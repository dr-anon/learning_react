function ListGroup() {
  const items = ["Ghana", "Togo", "USA"];
  const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  };
  return (
    <>
      <h1 className="p-2">List</h1>
      {getMessage}
      <ul className="list-group p-2">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
