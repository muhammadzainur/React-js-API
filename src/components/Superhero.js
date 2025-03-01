import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import antmanImage from '../assets/images/superhero/antman.jpg';
import avengerImage from '../assets/images/superhero/avenger.jpg';
import batmanImage from '../assets/images/superhero/batman.jpg';
import robinhoodImage from '../assets/images/superhero/robinhood.jpg';
import spidermanImage from '../assets/images/superhero/spiderman-cover.jpg';
import supermanImage from '../assets/images/superhero/superman.jpg';


const SuperHero = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className='text-white'>SUPERHERO MOVIES</h1>
        <br />
        <Row>
          <Col md={4} className='movieWrapper' id='superhero'>
            <Card className="text-white movieImage">
              <Image src={antmanImage} alt="Dune movie" className='images' />
              <div className='bg-dark'>
                <div className='p-2 m-1 text-white'>
                  <Card.Title className='text-center'>ANT MAN</Card.Title>
                  <Card.Text className='text-left'>
                    This is a wider card with natural lead-in
                    to additional content
                  </Card.Text>
                  <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className='movieWrapper'>
            <Card className="text-white movieImage">
              <Image src={avengerImage} alt="Dune movie" className='images' />
              <div className='bg-dark'>
                <div className='p-2 m-1 text-white'>
                  <Card.Title className='text-center'>AVENGER</Card.Title>
                  <Card.Text className='text-left'>
                    This is a wider card with natural lead-in
                    to additional content
                  </Card.Text>
                  <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className='movieWrapper'>
            <Card className="text-white movieImage">
              <Image src={batmanImage} alt="Dune movie" className='images' />
              <div className='bg-dark'>
                <div className='p-2 m-1 text-white'>
                  <Card.Title className='text-center'>BATMAN</Card.Title>
                  <Card.Text className='text-left'>
                    This is a wider card with natural lead-in
                    to additional content
                  </Card.Text>
                  <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className='movieWrapper'>
            <Card className="text-white movieImage">
              <Image src={robinhoodImage} alt="Dune movie" className='images' />
              <div className='bg-dark'>
                <div className='p-2 m-1 text-white'>
                  <Card.Title className='text-center'>ROBIN HOOD</Card.Title>
                  <Card.Text className='text-left'>
                    This is a wider card with natural lead-in
                    to additional content
                  </Card.Text>
                  <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className='movieWrapper'>
            <Card className="text-white movieImage">
              <Image src={spidermanImage} alt="Dune movie" className='images' />
              <div className='bg-dark'>
                <div className='p-2 m-1 text-white'>
                  <Card.Title className='text-center'>SPIDERMAN</Card.Title>
                  <Card.Text className='text-left'>
                    This is a wider card with natural lead-in
                    to additional content
                  </Card.Text>
                  <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className='movieWrapper'>
            <Card className="text-white movieImage">
              <Image src={supermanImage} alt="Dune movie" className='images' />
              <div className='bg-dark'>
                <div className='p-2 m-1 text-white'>
                  <Card.Title className='text-center'>SUPERMAN HERO</Card.Title>
                  <Card.Text className='text-left'>
                    This is a wider card with natural lead-in
                    to additional content
                  </Card.Text>
                  <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SuperHero