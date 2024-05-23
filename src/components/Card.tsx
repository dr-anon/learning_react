function Card() {
  const card_items = ["Ghana", "Togo", "USA", "Togo", "USA"];

  return (
    <div className="container col-12 d-flex justify-content-center align-items-center mx-4 overflow-auto">
      {card_items.map((card_item) => (
        <div
          className="card col-3 d-flex justify-content-center align-items-center mx-4"
          key={card_item}
        >
          {card_item}
        </div>
      ))}
    </div>
  );
}

export default Card;
