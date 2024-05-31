import React from "react";
import { useParams } from "react-router-dom";

const ContactById = () => {
  const { id } = useParams();
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
          {
              arr
        .filter((e) => e.id == id)
        .map((e) => {
          return (
            <div key={e.id}>
              <p>{e.name}</p>
              <p>{e.age}</p>
              <p>{e.about}</p>
            </div>
          );
        })}
    </div>
  );
};

export default ContactById;
