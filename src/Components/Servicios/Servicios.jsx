import { Card,Text,Image,CardFooter,Button } from "@chakra-ui/react";
import Carousel from 'react-bootstrap/Carousel';
import './Servicios.css'
import IconIg from '../../assets/img/instagram.png'
import { Link } from '@chakra-ui/react'



function servicios() {
  return (
<div className="content">  

<br />
<Text className="textTittle2" fontSize='27px' flex='center' >TE MOSTRAMOS UN POCO LOS SERVICIOS QUE OFRECEN NUESTROS MEJORES BARBEROS!</Text>
<br />
<br />

  <div className="service" > 
  <div className="card">
    <Card maxW='lg' bg='black ' >
    <Text className="textTittle"> SERVICIOS DE NUESTRO BARBER ALEJO</Text>
    <Carousel fade >
      <Carousel.Item>
      <Image src="https://i.pinimg.com/564x/80/2b/b3/802bb354086834aff8ed257229556d55.jpg" className="imgService" />
      </Carousel.Item>
      <Carousel.Item>
      <Image src="https://i.pinimg.com/564x/7a/33/93/7a339375afdad1a59534d5c2d86602ff.jpg"   className="imgService"  />
      </Carousel.Item>
      <Carousel.Item>
      <Image src="https://i.pinimg.com/564x/e9/bd/e4/e9bde4fb1f716682aa584e1c5973daec.jpg"  className="imgService" />
  
      </Carousel.Item>
    </Carousel>
  
    <CardFooter
      justify='space-between'
      flexWrap='nowrap'
    >
    
   
   
      <Link href='https://calendly.com/nicollorente2002/corte-de-pelo '> 
      <Button  className="btn-neon" variant='ghost' colorScheme="white" >
        <span id="span1"></span>
        <span id="span2"></span>
        <span id="span3"></span>
        <span id="span4"></span>
        Reservar Turno con Alejo
    </Button>
    </Link>




    </CardFooter>
  <Link href="https://www.instagram.com/ale_ezekiel/" > 
    <Button  className="button-ig" size='lg'  colorScheme='pink' bg='black'  > <Image src={IconIg} boxSize='30px'/> </Button>
    </Link>
  </Card>
  </div>

<div  className="card">
  <Card maxW='lg' bg='black ' >
    <Text className="textTittle" > SERVICIOS DE NUESTRO BARBER NAHUEL </Text>
    <Carousel fade >
      <Carousel.Item>
      <Image src="https://i.pinimg.com/564x/cd/f9/69/cdf96955d2a7c74bf8d128791a3804f0.jpg" className="imgService"  />
      </Carousel.Item>
      <Carousel.Item>
      <Image src="https://i.pinimg.com/564x/ad/bb/c8/adbbc88cb3429f3cda38a566262006fd.jpg"  className="imgService" />
      </Carousel.Item>
      <Carousel.Item>
      <Image src="https://i.pinimg.com/564x/3d/00/8e/3d008e1edc38ba51743df80dd8f469c7.jpg" className="imgService" />
  
      </Carousel.Item>
    </Carousel>
  
    <CardFooter
      justify='space-between'
      flexWrap='nowrap'
    >
    
   
      <Link href='https://calendly.com/nicollorente2002/corte-de-pelo ' >
   <Button className="btn-neon" variant='ghost' colorScheme="white" >
        <span id="span1"></span>
        <span id="span2"></span>
        <span id="span3"></span>
        <span id="span4"></span>
        Reservar Turno con Nahuel
    </Button>
    </Link>

    </CardFooter>
    <Link href="https://www.instagram.com/nahu.barberia/">
    <Button className="button-ig"    size='lg' colorScheme='pink' bg='black' > <Image src={IconIg} boxSize='30px'/> </Button>
    </Link>
  </Card>
  </div>


<div  className="card">
  <Card maxW='lg' bg='black ' >
    <Text className="textTittle" colorScheme="white"> SERVICIOS DE NUESTRO BARBER MATIAS </Text>
    <Carousel fade >
      <Carousel.Item> 
      <Image src="https://i.pinimg.com/564x/b2/70/d7/b270d7ed9e79ef1f2b45ffa2216b3754.jpg"  className="imgService"  />
      </Carousel.Item>
      <Carousel.Item>
      <Image src="https://i.pinimg.com/564x/e2/39/5d/e2395d188aff27638e6170f738e432ea.jpg "  className="imgService"  />
      </Carousel.Item>
      <Carousel.Item>
      <Image src="https://i.pinimg.com/564x/10/6b/5d/106b5d0d4fb6dfe7880a122de563aeca.jpg" className="imgService" />
  
      </Carousel.Item>
    </Carousel>
  
    <CardFooter
      justify='space-between'
      flexWrap='nowrap'
    >
      
    
<Link href='https://calendly.com/nicollorente2002/corte-de-pelo' >
<Button className="btn-neon" variant='ghost' colorScheme="white"  >
        <span id="span1"></span>
        <span id="span2"></span>
        <span id="span3"></span>
        <span id="span4"></span>
      Reservar Turno con Matias
    </Button>
    </Link>

    </CardFooter>
  <Link href= "https://www.instagram.com/matyy_barber/">
    <Button className="button-ig"   size='lg' colorScheme='pink' bg='black'  ><Image src={IconIg}  boxSize='30px'/> </Button>
    </Link>
  </Card>
  </div>


  </div >


 

  </div>
  );
}


export default servicios;