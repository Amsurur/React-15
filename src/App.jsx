import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import Sort from "./components/Sort";

const App = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([
    {
      id: 1,
      title: "Hello",
      desc: "Hello from the server bd",
      status: "false",
    },
    {
      id: 2,
      title: "Hello Addons",
      desc: "Hello from the server bd and add   some",
      status: "true",
    },
    {
      id: 3,
      title: "Buy Addons with",
      desc: "Hello from the server bd and add some",
      status: "false",
    },
  ]);
  const [sortData, setSortData] = useState(data);
  const [AddTitle, setAddTitle] = useState("");
  const [AddDesc, setAddDesc] = useState("");
  const [age, setAge] = useState("");
  const [search, setSearch] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleAddUser = () => {
    let user = {
      id: Date.now(),
      title: AddTitle,
      desc: AddDesc,
    };
    setData([...data, user]);
    handleClose();
  };

  const handleChange = (event) => {
    setAge(event.target.value);
    setSortData(
      data.filter((e) => {
        if (event.target.value === e.status) {
          return e;
        }
        if (event.target.value === "All") {
          return e;
        }
      })
    );
  };
  const Search = (event) => {
    setSearch(event.target.value);
    setSortData(
      data.filter((e) => {
        if (
          e.title
            .toLowerCase()
            .includes(event.target.value.toLowerCase().trim())
        ) {
          return e;
        }
      })
    );
  };
  return (
    <div>
      <Box sx={{ width: "10%", marginY: "10px" }}>
        <Sort handleChange={handleChange} age={age} />
        <Search search={search} Search={Search} />
      </Box>

      <Box sx={{ display: "flex" }}>
        <Button
          onClick={handleClickOpen}
          endIcon={<AddIcon />}
          variant="outlined"
        >
          Add
        </Button>
      </Box>
      {sortData.map((e, i) => {
        return (
          <Card key={i} sx={{ display: "flex" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  {e.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {e.desc}
                </Typography>
                <Typography>{e.status}</Typography>
              </CardContent>
            </Box>
          </Card>
        );
      })}

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
          <TextField
            value={AddTitle}
            onChange={(e) => setAddTitle(e.target.value)}
          />
          <TextField
            value={AddDesc}
            onChange={(e) => setAddDesc(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddUser} autoFocus>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default App;
