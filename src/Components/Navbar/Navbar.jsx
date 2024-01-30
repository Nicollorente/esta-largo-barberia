import { Breadcrumb, BreadcrumbItem, BreadcrumbLink,Image} from "@chakra-ui/react";
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'
import icon from '../../assets/img/estaLargoImg.jpg'
import '../Navbar/Navbar.css'
const Navbar = () => {
  return (
    <>
  

      <Breadcrumb separator=' ' fontWeight="medium" fontSize="lg" className="nav font" >

      <BreadcrumbItem>
      <ChakraLink as={ReactRouterLink} to={'/'}>
      <Image
  borderRadius='full'
  boxSize='180px'
  src={icon}
  alt='Icon Img'
/>

</ChakraLink>  
    </BreadcrumbItem>

        <BreadcrumbItem fontSize={30} color="white">
          <ChakraLink as={ReactRouterLink} to={"/barberos"} > Barberos</ChakraLink>
        </BreadcrumbItem>

        <BreadcrumbItem fontSize={30} color="white">
          <ChakraLink as={ReactRouterLink} to={"/servicios"} > Servicios</ChakraLink>
        </BreadcrumbItem>

        <BreadcrumbItem  fontSize={30} color="white">
          <BreadcrumbLink  href="https://calendly.com/nicollorente2002">
            Reservar Turno
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem  fontSize={30} color="white">
          <ChakraLink as={ReactRouterLink} to={"/ubicacion"}> Ubicacion</ChakraLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </>
  );
};

export default Navbar;
