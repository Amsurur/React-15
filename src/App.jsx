import React from "react";
import Switcher from "./components/Switcher";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
const App = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <div className="dark:bg-[grey]">
      <Switcher />

      <div className="bg-blue-600 text-black dark:bg-gray-500 dark:text-white">
        <p className="">hello</p>
        <Card className="mt-6 w-96">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              UI/UX Review Check
            </Typography>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>Read More</Button>
          </CardFooter>
        </Card>
        <Button onClick={handleOpen} variant="gradient">
          Open Dialog
        </Button>
        <Dialog open={open} handler={handleOpen}>
          <DialogHeader>Its a simple dialog.</DialogHeader>
          <DialogBody>
            The key to more success is to have a lot of pillows. Put it this
            way, it took me twenty five years to get these plants, twenty five
            years of blood sweat and tears, and I&apos;m never giving up,
            I&apos;m just getting started. I&apos;m up to something. Fan luv.
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button variant="gradient" color="green" onClick={handleOpen}>
              <span>Confirm</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
    </div>
  );
};

export default App;
