import React, { useState } from "react";
import { MenuItem } from "@material-ui/core";
import { Select, FormControl, InputLabel, TextField } from "@material-ui/core";
import axios from "axios";

const Search = () => {
   const [searchText, setSearchText] = useState("");
   const [amount, setAmount] = useState(5);
   const [images, setImages] = useState([]);
   const apiUrl = "https://pixabay.com/api/";
   const apiKey = process.env.REACT_APP_API_KEY;

   const handleSearchChange = (e) => {
      setSearchText(e.target.value);
      console.log(amount);
      axios
         .get(
            `${apiUrl}/?key=${apiKey}&q=${searchText}&image_type=photo&per_page=${amount}`
         )
         .then((res) => console.log(res.data.hits))
         .catch((err) => console.log(err));
   };

   return (
      <div>
         <TextField
            name="searchText"
            value={searchText}
            onChange={handleSearchChange}
            label="Search for images"
            fullWidth={true}
            margin="normal"
         />
         <br />
         <FormControl className="">
            <InputLabel id="demo-simple-select-label">Amount</InputLabel>
            <Select
               value={amount}
               onChange={(e) => setAmount(e.target.value)}
               autoWidth={true}
            >
               <MenuItem value={5}>5</MenuItem>
               <MenuItem value={10}>10</MenuItem>
               <MenuItem value={15}>15</MenuItem>
               <MenuItem value={20}>20</MenuItem>
               <MenuItem value={30}>30</MenuItem>
               <MenuItem value={50}>50</MenuItem>
            </Select>
         </FormControl>
      </div>
   );
};

export default Search;
