import 'bootstrap/dist/css/bootstrap.min.css';

import {
  CardGroup,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Container,
  Row,
  Col
} from 'reactstrap';

const truncate = (str , max) => str.length < max ? str : `${str.substr(0, max)}...`;;

export default function({products}){

 
  return (
    <Container>
      <h2> Products </h2>
      <Row>
        {products.map((product, index) => (
          <Col md="6" lg="4" key={index}>
            <Card>
              <CardImg
                alt="Card image cap"
                src={product.imagineUrl}
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  {product.name}
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  {product.price}
                </CardSubtitle>
                <CardText>
                  {truncate (product.description , 100)}
                </CardText>
                <Button>
                  Add to Cart
                </Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
      
    </Container>
      

  );
}