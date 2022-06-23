import React from "react";
import logo from "../../imgs/logoTienda.png";
import { CartWidget } from "../CartWidget/CartWidget";
import styles from "./Navbar.Styles";

export const Navbar = ({ name }) => {
  const categorys = [
    { name: "Pasteles", route: "#", id: 1 },
    { name: "Pedidos", route: "#", id: 2 },
    { name: "Quiene Somos", route: "#", id: 3 },
    { name: "Contacto", route: "#", id: 4 }
  ];

  return (
    <div style={styles.container}>
      <img style={styles.logo} src={logo} alt="logo" />
      <h1 style={styles.title}>Bienvenido {name}</h1>
      <div style={styles.links}>
        <nav>
          {categorys.map((element) => {
            return (
              <a style={styles.link} key={element.id} href={element.route}>
                {element.name}
              </a>
            );
          })}
        </nav>
        <CartWidget />
      </div>
    </div>
  );
};