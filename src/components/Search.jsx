import { TextField } from "@mui/material";

const Search = ({ search, Search }) => {
  return (
    <div>
      <TextField value={search} onChange={(e) => Search(e)} />
    </div>
  );
};

export default Search;
