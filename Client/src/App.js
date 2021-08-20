import React from "react";
import Navbar from "./components/navbar/Navbar";
import Search from "./components/search/Search";
import { MuiThemeProvider, Container } from "@material-ui/core";

function App() {
   return (
      <MuiThemeProvider>
         <div>
            <Navbar />
            <Container maxWidth="lg">
               <Search />
            </Container>
         </div>
      </MuiThemeProvider>
   );
}

export default App;
