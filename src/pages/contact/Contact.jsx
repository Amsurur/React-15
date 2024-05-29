import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  let arr = [
    {
      id: 1,
      name: "Khurshed1",
      age: 189,
      about: "http http:// Khurshed https http://",
    },
    {
      id: 2,
      name: "Khurshed2",
      age: 182,
      about: "http http:// Khurshed https http://",
    },
    {
      id: 3,
      name: "Khurshed3",
      age: 18,
      about: "http http:// Khurshed https http://",
    },
    {
      id: 4,
      name: "Khurshed4",
      age: 181,
      about: "http http:// Khurshed https http://",
    },
  ];
  return (
    <div>
      <div className="w-20 h-20 bg-blue-gray-400">
        {arr.map((e) => {
          return (
            <Link to={`user/${e.id}`} className="flex border gap-10" key={e.id}>
              <p>{e.name}</p>
              <p>{e.age}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
