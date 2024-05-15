/* eslint-disable react/prop-types */
const Button = ({ text, click }) => {
  return <button onClick={() => click()}>{text || "Ehaaaa"}</button>;
};

export default Button;
