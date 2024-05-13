import "./App.css";
import image from "./img/images.png";
import phone from "./img/phone.png";
import burger from "./img/burger.svg";
const App = () => {
  return (
    <div>
      <nav className="navbar">
        <img className="image" src={image} alt="" />
        <ul>
          <li>Наша продукция</li>
          <li>Услуги</li>
          <li>Контакты</li>
          <li>
            <img src={phone} alt="" />
            +7 (812) 904-02-55
          </li>
          <li>Заказать звонок</li>
          <li>
            {" "}
            <img src={burger} alt="" />
            <span>Меню</span>
          </li>
        </ul>
      </nav>
      <div></div>
    </div>
  );
};

export default App;
