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
  const [age, setAge] = useState("");
  const [editName, setEditName] = useState("");
  const [editAge, setEditAge] = useState();
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(null);

  function names(params) {
    setName(params.target.value);
  }
  const AddData = () => {
    let NewUser = {
      id: Date.now(),
      name: name,
      age: age,
    };
    if (name.trim().length == 0 && age.trim().length == 0) {
      alert(" u r bot");
    } else {
      setData([...data, NewUser]);
      setName("");
      setAge("");
    }
  };
  const RemoveData = (id) => {
    setData(
      data.filter((e) => {
        return e.id !== id;
      })
    );
  };
  const editUser = (el) => {
    setOpen(true);
    setEditName(el.name);
    setEditAge(el.age);
    setIdx(el.id);
  };
  const editData = () => {
    let newUser = {
      id: idx,
      name: editName,
      age: editAge,
    };
    setData(
      data.map((e) => {
        if (e.id === idx) {
          e = newUser;
        }
        return e;
      })
    );
    setOpen(false);
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
      {data.map((el, i) => {
        return (
          <div className="flex gap-5" key={i}>
            <h1>{el.name}</h1>
            <p>{el.age}</p>
            <button onClick={() => RemoveData(el.id)}>delete</button>
            <button onClick={() => editUser(el)}>edit</button>
          </div>
        );
      })}
      {open ? (
        <div className="flex">
          <input
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            className="border"
            type="text"
          />
          <input
            value={editAge}
            onChange={(e) => setEditAge(e.target.value)}
            className="border"
            type="text"
          />
          <button onClick={() => editData()}>save</button>
        </div>
      ) : null}
    </div>
  );
};

export default App;
