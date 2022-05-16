import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';

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

const getPaginatedProducts = (products, currentPage, itemsLimit) => {
  const startIndex = currentPage * itemsLimit - itemsLimit;
  const endIndex = startIndex + itemsLimit ;
  return products.slice(startIndex,endIndex)
};

export default function({products, fetchProducts}){

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsLimit, setItemsLimit] = useState(11);
  const [pagesLimit, setPagesLimit] = useState(5);

  useEffect(() => {
    fetchProducts()
  },[fetchProducts])

  return (
    <Container>
      <h2> Products </h2>
      <Row>
      {getPaginatedProducts(products, currentPage, itemsLimit).map((product, idx) => (
          <Col md="6" lg="4" key={idx}>
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
        <Col className="class-col">
          <div className='show-button'>
            {itemsLimit < products.length && 
            <Button onClick={(() => setItemsLimit(itemsLimit + 10))}>
              SHOW MORE
            </Button>
            }
            {itemsLimit >= products.length && 
            <Button variant="secondary" disabled>
              NO MORE PRODUCT
            </Button>}
          </div>
          <div className='page-total'>
            Show 1 - {itemsLimit - 1} of {products.length}
          </div>
        </Col>
      </Row>
      
    </Container>
      

  );
}