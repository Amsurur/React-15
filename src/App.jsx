import Button from "./components/Button";
import Card from "./components/Card";
import avatar from "./img/DastKatiQalama.png";
const App = () => {
  const Student = [
    { id: 1, name: "Khurshed" },
    { id: 2, name: "Nurmuhammad" },
    { id: 3, name: "Parviz" },
    { id: 4, name: "Ziyo" },
  ];

  console.log(1);

  return (
    <div className="flex justify-evenly text-center gap-5 p-2">
      {Student.map((student, i) => {
        return (
          <div key={i}>
            <p>{student.id}</p>
            <p>{student.name}</p>
          </div>
        );
      })}
      <Button text={"rerer"} />
      <Card text="Khurshed" avatar={avatar} />
    </div>
  );
};

export default App;
