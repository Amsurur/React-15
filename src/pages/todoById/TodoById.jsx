import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
const TodoById = () => {
  const Api = "http://65.108.148.136:8080/ToDo";
  const ImageApi = "http://65.108.148.136:8080/images";
  const [data, setData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [addId, setAddId] = useState(null);
  const [images, setImages] = useState(null);
  const { id } = useParams();
  const getById = async () => {
    try {
      const { data } = await axios.get(`${Api}/get-to-do-by-id?id=${id}`);
      setData(data.data);
    } catch (error) {
      console.error(error);
    }
  };
  const DeleteImage = async () => {
    try {
      const { data } = await axios.delete(
        `${Api}/delete-to-do-image?imageId=${deleteId}`
      );
      getById(id);
    } catch (error) {
      console.error(error);
    }
  };
  const AddImage = async () => {
    let formData = new FormData();
    formData.append("ToDoId", addId);
    formData.append("Images", images);
    try {
      const { data } = await axios.post(
        `${Api}/add-to-do-images`,
        formData,
        "Content-Type : multipart/form-data"
      );
      getById(id);
      handleClose2();
    } catch (error) {
      console.error(error);
    }
  };
  console.log(data);
  useEffect(() => {
    getById();
  }, [id]);

  const handleClickOpen = (id) => {
    setDeleteId(id);
    setOpen(true);
  };
  const handleClickOpen2 = (id) => {
    setAddId(id);
    setOpen2(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };

  return (
    <div>
      <div>
        <p>Name: {data.name}</p>
        <p>Description: {data.description}</p>

        <div className="flex gap-1">
          {data?.images?.map((image) => {
            return (
              <div onClick={() => handleClickOpen(image.id)} key={image.id}>
                <img
                  width={200}
                  src={`${ImageApi}/${image.imageName}`}
                  alt=""
                />
              </div>
            );
          })}
        </div>
        <button onClick={() => handleClickOpen2(id)}>addImage</button>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={() => DeleteImage()} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={open2}
        onClose={handleClose2}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <input type="file" onChange={(e) => setImages(e.target.files[0])} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose2}>Disagree</Button>
          <Button onClick={() => AddImage()} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TodoById;
