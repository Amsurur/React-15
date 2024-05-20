import { useState } from "react";
const App = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Nurmuhammad",
      age: 17,
    },
    {
      id: 2,
      name: "Khurshed",
      age: 11 + 6,
    },
    {
      id: 3,
      name: "Ziyo",
      age: 16,
    },
    {
      id: 4,
      name: "Parviz",
      age: 18,
    },
  ]);
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  function names(params) {
    setName(params.target.value);
  }
  const AddData = () => {
    let NewUser = {
      id: Date.now(),
      name: name,
      age: age,
    };
    setData([...data, NewUser]);
    setName("");
    setAge("");
  };
  return (
    <div>
      <div>
        <input value={name} onChange={(e) => names(e)} type="text" />
        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          type="text"
        />
        <button onClick={() => AddData()}>add +</button>
      </div>
      {data.map((e, i) => {
        return (
          <div className="flex gap-5" key={i}>
            <h1>{e.name}</h1>
            <p>{e.age}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
