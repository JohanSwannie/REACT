const Card-Searchbox-Card = ({ person }) => {
  const { name, username, email, imageUrl } = person;
  return (
    <div className="card-container">
      <img
        src={imageUrl}
        alt={`person ${name}`}
      />
      <h2>{name}</h2>
      <p>{username}</p>
      <p>{email}</p>
    </div>
  );
};

export default Card-Searchbox-Card;
