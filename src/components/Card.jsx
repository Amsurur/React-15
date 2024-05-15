// eslint-disable-next-line react/prop-types
const Card = ({ text, avatar }) => {
  return (
    <div>
      <img src={avatar} alt="" />
      <p>{text}</p>
    </div>
  );
};

export default Card;
