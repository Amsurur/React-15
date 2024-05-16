// eslint-disable-next-line react/prop-types
const Card = ({ name, bg }) => {
  return (
    <div style={{ backgroundColor: bg }}>
      <p>{name}</p>
    </div>
  );
};

export default Card;
