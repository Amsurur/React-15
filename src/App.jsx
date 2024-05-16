import Button from "./components/Button";
import Card from "./components/Card";
import avatar from "./img/DastKatiQalama.png";
const App = () => {
  const Student = [
    { id: 1, name: "Khurshed", bg: "red", imageBg: "black", image: avatar },
    { id: 2, name: "Nurmuhammad", bg: "purple" },
    { id: 3, name: "Parviz", bg: "green" },
    { id: 4, name: "Ziyo", bg: "blue" },
  ];

  console.log(1);

  return (
    <div className="flex justify-evenly text-center gap-5 p-2">
      {Student.map((student, i) => {
        return <Card key={i} name={student.name} bg={student.bg} />;
      })}
    </div>
  );
};

export default App;
