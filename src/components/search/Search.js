import React, { useState } from "react";
import { MenuItem } from "@material-ui/core";
import { Select, FormControl, InputLabel, TextField } from "@material-ui/core";

const Search = () => {
   const [searchText, setSearchText] = useState("");
   const [amount, setAmount] = useState("");

   return (
      <div>
         <TextField
            name="searchText"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
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
