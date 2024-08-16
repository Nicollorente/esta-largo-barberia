import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Image,
} from "@chakra-ui/react";
import { Link, Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import icon from "../../assets/img/estaLargoImg.jpg";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import Inicio from "../../assets/img/inicio.png";
import "../Navbar/Navbar.css";
import Barberos from "../../assets/img/barberos.png";
import Servicios from "../../assets/img/services.png";
import Reservar from "../../assets/img/reservar-turno.png";
import Ubicacion from "../../assets/img/ubicacion.png";
import Logo from "../../assets/img/estaLargoImg.jpg"
const Navbar = () => {
  return (
    <div className="container">

<nav className="nav">
  <div className="content-logo">
<img  src={Logo} alt="Logo de Esta largo! Barbería" />
</div>
<ul className="menu-items">
  <li><Link to={"/"}>Inicio</Link></li>
  <li><Link to={"/barberos"}>Barberos</Link></li>
  <li><Link to={"/servicios"}>Servicios</Link></li>
  <li><Link to={"/reservar"}>Reservar Turno</Link></li>
  <li><Link to={"ubicacion"}> Ubicación</Link> </li>
</ul>
</nav>


      {/* HAMBURGER MENU  */}

      <nav className="nav-burger">
      <Menu className="menu">
        <MenuButton
          className="hamburger-icon"
          boxSize={"50px"}
          as={IconButton }
          aria-label="Options"
          icon={<HamburgerIcon boxSize={"30px"}/>}
          variant="outline"
        />
        <MenuList className="content">
          <MenuItem className="content-hamburger">
            <Image src={Inicio} boxSize="30px" />
            <Link to={"/"} className="text">Inicio</Link>
          </MenuItem>

          <MenuItem className="content-hamburger">
            <Image src={Barberos} boxSize="30px" />
            <Link to={"/barberos"} className="text">Barberos</Link>
          </MenuItem>

          <MenuItem className="content-hamburger">
            <Image src={Servicios} boxSize="30px" />
            <Link to={"/servicios"} className="text">Servicios</Link>
          </MenuItem>

          <MenuItem className="content-hamburger">
            <Image src={Reservar} boxSize="30px" />
            <a className="text" href="https://calendly.com/nicollorente2002" target="_blank" rel="noopener noreferrer">Reservar Turno </a>
          </MenuItem>


          <MenuItem className="content-hamburger">
            
              <Image src={Ubicacion} boxSize="30px" />
            
            <Link to={"/ubicacion"} className="text">Ubicación</Link>
          </MenuItem>
        </MenuList>
      </Menu>
      </nav>
    </div>
  );
};

export default Navbar;
