
import '../Barberos/Barberos.css'
import { SimpleGrid,Card,CardHeader,Heading,CardBody, Image, Text, Spacer } from '@chakra-ui/react'

const Barberos = () => {
  return (
    <div className="content">
<br />
<br />
<div className='cards'>

  <Card className='card' >
    <CardHeader >
      <h1 className='textCardTittle '  >Alejo</h1>
    </CardHeader>
    <CardBody>
    <Image  src='https://i.pinimg.com/564x/ce/27/0e/ce270e9b7f871a26ab2db8b310dbc25e.jpg' className='imgBarber'></Image>
    </CardBody>
  </Card>
  
  <Card className='card' >
    <CardHeader>
      <h1 className='textCardTittle'  >Nahuel</h1>
    </CardHeader>
    <CardBody>
    <Image src='https://i.pinimg.com/564x/d1/e9/86/d1e9862b3b0ec542f661b0020afa2720.jpg' className='imgBarber'></Image>
    </CardBody>
  </Card>
  <Card  className='card'>
    <CardHeader>
      <h1 className='textCardTittle'  >Matias</h1>
    </CardHeader>
    <CardBody>
    <Image src='https://i.pinimg.com/564x/f4/ed/6e/f4ed6e64449c752bf891341d93a2fc90.jpg' className='imgBarber'></Image>
    </CardBody>
  </Card>
</div>
    </div>
  )
}

export default Barberos