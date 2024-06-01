import axios from "axios";
import { forwardRef, useEffect, useState } from "react";
import FileBase64 from "react-file-base64";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Button, TextField } from "@mui/material";
import toast from "react-hot-toast";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const App = () => {
  const Api = "http://65.108.148.136:8080/ToDo";
  const ImageApi = "http://65.108.148.136:8080/images";
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [name2, setName2] = useState("");
  const [desc2, setDesc2] = useState("");
  const [image, setimage] = useState("");
  const [Image, setImage] = useState("");
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [idx, setIdx] = useState(null);
  const [search, setSearch] = useState("");
  // get-to-dos?ToDoName=KHurshed
  const getTodos = async () => {
    try {
      const response = await axios.get(
        search.trim().length <= 0
          ? `${Api}/get-to-dos`
          : `${Api}/get-to-dos?ToDoName=${search}`
      );
      console.log(response);
      setData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  const addTodo = async () => {
    let formData = new FormData();
    formData.append("Images", Image);
    formData.append("Name", name);
    formData.append("Description", desc);
    try {
      const { data } = await axios.post(
        `${Api}/add-to-do`,
        formData,
        "Content-Type: multipart/form-data"
      );
      if (data.statusCode === 200) {
        getTodos();
        handleClose();
        toast.success("Success");
        setName("");
        setDesc("");
        setImage(null);
        setimage(null);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const editTodo = async () => {
    let todo = {
      name: name2,
      description: desc2,
      id: idx,
    };
    try {
      const { data } = await axios.put(`${Api}/update-to-do`, todo);
      if (data.statusCode === 200) {
        getTodos();
        handleClose2();
        toast.success(`Updated todo`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickOpen2 = (e) => {
    setDesc2(e.description);
    setName2(e.name);
    setIdx(e.id);
    setOpen2(true);
  };

  const handleChangeImage = (event) => {
    setimage(event.base64);
    setImage(event.file);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  const handleSubmit = () => {
    addTodo();
  };
  const handleSubmit2 = () => {
    editTodo();
  };
  useEffect(() => {
    getTodos();
  }, [search]);
  return (
    <div>
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          Add todo
        </Button>
        <TextField value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      {data.map((e) => {
        return (
          <div className="flex gap-5 border p-2 my-2" key={e.id}>
            <p>{e.name}</p>
            <p>{e.description}</p>
            <div className="w-10 flex items-center gap-3 mx-40">
              {e.images.map((e) => {
                return (
                  <img key={e.id} src={`${ImageApi}/${e.imageName}`} alt="" />
                );
              })}
            </div>
            <Button onClick={() => handleClickOpen2(e)}>Edit</Button>
          </div>
        );
      })}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <TextField
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              value={desc}
              placeholder="description"
              onChange={(e) => setDesc(e.target.value)}
            />
            <FileBase64 onDone={handleChangeImage} />
            <img src={image} alt="" />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleSubmit}>Agree</Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={open2}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose2}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <TextField
              placeholder="name"
              value={name2}
              onChange={(e) => setName2(e.target.value)}
            />
            <TextField
              value={desc2}
              placeholder="description"
              onChange={(e) => setDesc2(e.target.value)}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose2}>Disagree</Button>
          <Button onClick={handleSubmit2}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default App;
