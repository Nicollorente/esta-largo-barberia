import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import {
  SimpleGrid,
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Image,
  Button,
  Divider,
  Center,
  Square,
  Spacer,
  Box,
  Link,
} from "@chakra-ui/react";
import BarbaIcon from "../../assets/img/barba.png";
import Navaja from "../../assets/img/maquinilla-de-afeitar.png";
import Color from "../../assets/img/cepillo-para-tinte-de-cabello.png";

function Home() {
  return (
    <div>
      <div className="imgHome">
        <img
          src=" https://imgs.search.brave.com/QEe-Bt0XnRVUAXCIxCPF_lhs97Veqm793cBCm-9W3bo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/ODU3NDc4NjA3MTUt/MmJhMzdlNzg4Yjcw/P2l4bGliPXJiLTQu/MC4zJml4aWQ9TTN3/eE1qQTNmREI4TUh4/elpXRnlZMmg4T0h4/OFltRnlZbVZ5ZkdW/dWZEQjhmREI4Zkh3/dyZ3PTEwMDAmcT04/MA"
          alt="barberia"
        />
      </div>

      <Divider />
      <div className="cards">
        <SimpleGrid templateColumns="repeat(auto-fill, minmax(300px, 1fr))">
          <Card>
            <CardHeader>
              {/* <Heading size='md' color='white' className='cardTittle'>CORTE</Heading>  */}
              <h3 className="cardTittle"> CORTE </h3>
            </CardHeader>
            <CardBody>
              <Image
                src=" https://imgs.search.brave.com/bIfWYyKGvXv2ogtSCuhCgQQ_fodpuJ112OD4DiAt_rs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/OTkzNTE0MzEyMDIt/MWUwZjAxMzc4OTlh/P2l4bGliPXJiLTQu/MC4zJml4aWQ9TW53/eE1qQTNmREI4TUh4/elpXRnlZMmg4TVRk/OGZHSmhjbUpsY2lV/eU1IQnZiR1Y4Wlc1/OE1IeDhNSHg4Jnc9/MTAwMCZxPTgw"
                alt="corte"
              />
            </CardBody>
            <CardFooter className="card-icon">
              <Link href="https://calendly.com/nicollorente2002/corte-de-pelo">
                <Button
                  size="lg"
                  colorScheme="teal"
                  bg="black"
                  className="font"
                >
                  Sacar Turno{" "}
                  <Image
                    borderRadius="full"
                    boxSize="50px"
                    src={Navaja}
                    alt="Corte"
                  />
                </Button>
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <h3 className="cardTittle">BARBA</h3>
            </CardHeader>
            <CardBody>
              <Image
                src="https://imgs.search.brave.com/rE2v7-dJooyR58ACaIoMnOEUnfW3BoWh1RZ_I6-KjIY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMjUy/MTk3OC9wZXhlbHMt/cGhvdG8tMjUyMTk3/OC5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA"
                alt="barba"
              />
            </CardBody>

            <CardFooter className="card-icon">
              <Link href="https://calendly.com/nicollorente2002/servicio-de-barba">
                <Button
                  size="lg"
                  colorScheme="teal"
                  bg="black"
                  className="font"
                >
                  Sacar Turno{" "}
                  <Image
                    borderRadius="full"
                    boxSize="50px"
                    src={BarbaIcon}
                    alt="Barba"
                  />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="cardTittle">COLOR</h3>
            </CardHeader>
            <CardBody>
              <Image
                src="https://imgs.search.brave.com/xAXCA1Sexoy9pPL54_Sp7OlK_OHesHbNo70Z6k69jdQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MDU0OTc3ODc4NjUt/ZTZkNDc2MmIzODZm/P2l4bGliPXJiLTQu/MC4zJml4aWQ9TTN3/eE1qQTNmREI4TUh4/elpXRnlZMmg4TVRK/OGZHSmhjbUpsY254/bGJud3dmSHd3Zkh4/OE1BPT0mdz0xMDAw/JnE9ODA"
                alt="color"
              />
            </CardBody>

            <CardFooter className="turnosIcon card-icon">
              <Link href="https://calendly.com/nicollorente2002/color">
                <Button
                  size="lg"
                  colorScheme="teal"
                  bg="black"
                  className="font"
                >
                  Sacar Turno <Image boxSize="40px" src={Color} alt="Color" />{" "}
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </SimpleGrid>
      </div>
    </div>
  );
}

export default Home;
