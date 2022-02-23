import React, {createContext } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Container } from "@mui/material";

export const SectionContext = createContext()

function Home() {

  const currentLocation = useLocation();
  let sectionPath;

  if (currentLocation.pathname === "/") {
    sectionPath = "home";
  } else {
    sectionPath = currentLocation.pathname.replace("/", "");
  }

  return (
    <SectionContext.Provider value={sectionPath}>
      <Container>       
        <Header/>
        <Outlet />
        <Footer />   
      </Container>
    </SectionContext.Provider>
  );
}

export default Home;
