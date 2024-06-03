import axios from "axios";
import { Field, Form, Formik } from "formik";
import { useEffect } from "react";
import { useState } from "react";
import FileBase64 from "react-file-base64";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  Name: Yup.string()
    .min(5, "Too Short!")
    .max(12, "Too Long!")
    .required("Required Name"),
  Description: Yup.string()
    .min(10, "Too Short!")
    .max(20, "Too Long!")
    .required("Required Description"),
});
const Home = () => {
  const Api = "http://65.108.148.136:8080/ToDo";
  const ImageApi = "http://65.108.148.136:8080/images";
  const [data, setData] = useState([]);
  const [img, setImage] = useState(null);
  const [base64, setBase64] = useState(null);
  const getTodo = async () => {
    try {
      const { data } = await axios.get(`${Api}/get-to-dos`);
      setData(data.data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleChangeImg = (event) => {
    setImage(event.file);
    setBase64(event.base64);
  };
  const addTodo = async (values, { resetForm }) => {
    console.log(values);
    let formData = new FormData();
    for (let name in values) {
      formData.append(name, values[name]);
    }
    formData.append("Images", img);
    try {
      const { data } = await axios.post(
        `${Api}/add-to-do`,
        formData,
        "Content-Type: multipart/form-data"
      );
      getTodo();
      resetForm();
      setImage(null);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getTodo();
  }, []);
  return (
    <div>
      <div className="m-10">
        {data.map((e) => {
          return (
            <div
              className="flex w-[500px] gap-10 justify-between items-center p-2 border rounded-lg"
              key={e.id}
            >
              <p>Name:{e.name}</p>
              <p>Description:{e.description}</p>
              <div className="flex gap-1 w-[100%]">
                {e.images.map((e) => {
                  return (
                    <img
                      className="w-[100%]"
                      key={e.id}
                      src={`${ImageApi}/${e.imageName}`}
                      alt=""
                    />
                  );
                })}
              </div>
              <Link to={`/todo/${e.id}`}>
                <button>About</button>
              </Link>
            </div>
          );
        })}
      </div>
      <Formik
        initialValues={{
          Name: "",
          Description: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={addTodo}
      >
        {({ errors, touched }) => (
          <Form className="grid gap-1 border border-green-300">
            <label htmlFor="">Name</label>
            <Field name="Name" id="Name" placeholder="name" />
            {errors.Name && touched.Name ? <div>{errors.Name}</div> : null}
            <label htmlFor="">Description</label>
            <Field name="Description" id="Description" placeholder="desc" />
            {errors.Description && touched.Description ? (
              <div>{errors.Description}</div>
            ) : null}

            <label htmlFor="">Image</label>
            <FileBase64 onDone={handleChangeImg} />
            <button type="submit">add</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Home;
