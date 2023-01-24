import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ShareIcons from '../../components/shareIcons/ShareIcons';



const Aboutus = () => {
  return (
    <Container>
      <ShareIcons />
      <Row className="justify-content-center">
        <Col xs={15} md={12}>
          <h1 className="text-center font-weight-bold">About Us</h1>
          <p className="text-center text-black">
            Amrit Dawani, an Indore-based fashion designer, specializes in couture for women’s and men’s wear. He started his label ‘The Q by Amrit Dawani’ in 2013. His design style can be described as a mix of contemporary silhouettes and finely detailed embroideries.
            Amrit Dawani identifies as an artist, a couturier, and a designer who recreates the magic of hand-crafted techniques through concepts, structures, and images. His idea of fashion transcends products bringing new ideas to life, creating tools of confident self-expression, and an intellectual commitment to good taste.
            He takes cues from his mother’s style statements to design his masterpieces. His brand combines the sophisticated elegance of handmade techniques with a Modern Indian grace that makes space for boundless creativity.
          </p>
          {/* <Link to="/allproducts">
            <button style={{
                border: '3px solid black',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'transparent',
                color: 'black',
                padding: '10px 20px',
                cursor: 'pointer'
            }}>
                Click me
            </button>
        </Link> */}
        </Col>
      </Row>
    </Container>
  );
};

export default Aboutus;
