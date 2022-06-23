import React from "react";
import { Navbar } from "./componentes/Navbar/Navbar";
import './App.css';
import { ItemListContainer } from "./Containers/ItemList/ItemListContainer";
import { ItemListContainer2 } from "./Containers/ItemList/ItemListContainer";


const App = () => {

  //Datos a pasar a Navbar
  const name = "Carlos Martin";

  return (
    <div style={styles}>
      <Navbar name={name} />
      <ItemListContainer greeting={"Pasteleria Karly Cream"}/>
      <ItemListContainer2 greeting2={"Que le ofrecemos? "}/>
    </div>
  );
};

export default App;

const styles = {
  display: 'flex',
  flexDirection: 'column'
}