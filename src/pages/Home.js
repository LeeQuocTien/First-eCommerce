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
  Col,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';

import BreadCrumb from '../components/BreadCrumb';

const truncate = (str , max) => str.length < max ? str : `${str.substr(0, max)}...`;;

const getPaginatedProducts = (products, itemsLimit) => {
  const startIndex = 0;
  const endIndex = startIndex + itemsLimit ;
  return products.slice(startIndex,endIndex)
};

export default function({products, postCartItems}){

  const [itemsLimit, setItemsLimit] = useState(8);

  return (
    <Container fluid>
      <BreadCrumb 
      pages={[{tag: "span", name: "Home"}]} 
      />
      <h4>HOME</h4>
      <div>
        <div className='d-flex justify-content-end'>
          <a href='/products/'>See all &gt;&gt;</a>
        </div>
        <Row>
        {getPaginatedProducts(products, itemsLimit).map((product, idx) => (
            <Col md="6" lg="3" key={idx}>
              <Card className='product-list-item'>
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
                    {`$${product.price}`}
                  </CardSubtitle>
                  <CardText>
                    {truncate (product.description , 100)}
                  </CardText>
                  <Button onClick={() => postCartItems({product})}>
                    Add to Cart
                  </Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      
    </Container>
      

  );
}