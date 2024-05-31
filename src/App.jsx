import { useState } from "react";
import FileBase64 from "react-file-base64";
const App = () => {
  const [image, setImage] = useState(null);
  const handleChange = (event) => {
    setImage(event.base64);
    console.log(event);
  };
  return (
    <div>
      <FileBase64 onDone={handleChange} />
      <div>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default App;
