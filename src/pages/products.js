import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";

class Product extends Component {
  constructor(props) {
    super();
    this.state = {
      products: [
        {
          id: "b6d7f951-701c-40ab-a6e1-b754ddc7a2e1",
          name: "Coffee - 10oz Cup 92961",
          description:
            "interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel",
          image: "http://dummyimage.com/126x101.png/5fa2dd/ffffff"
        },
        {
          id: "61bdc63a-3d22-49f9-858f-7ce4eac905e3",
          name: "Cleaner - Lime Away",
          description:
            "nulla nunc purus phasellus in felis donec semper sapien a libero",
          image: "http://dummyimage.com/150x105.png/cc0000/ffffff"
        },
        {
          id: "aad93569-1d18-4abc-8ebe-bfe1a740d238",
          name: "Schnappes - Peach, Walkers",
          description:
            "nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede",
          image: "http://dummyimage.com/244x113.png/dddddd/000000"
        },
        {
          id: "69f42a1e-0af9-476b-a8fe-a3c18ae484a1",
          name: "Rice - Brown",
          description:
            "commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit",
          image: "http://dummyimage.com/201x110.png/dddddd/000000"
        },
        {
          id: "36bce70a-ddf9-4000-97cc-62f2509a883c",
          name: "Lettuce - Lambs Mash",
          description:
            "vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit",
          image: "http://dummyimage.com/217x185.png/ff4444/ffffff"
        },
        {
          id: "c3065f58-0c31-4c72-95e2-0f86326ec017",
          name: "Meldea Green Tea Liquor",
          description:
            "vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec",
          image: "http://dummyimage.com/109x177.png/cc0000/ffffff"
        },
        {
          id: "9659ef1f-38e6-4256-ae7a-6ddd822318b1",
          name: "Potato - Sweet",
          description:
            "tincidunt eget tempus vel pede morbi porttitor lorem id ligula",
          image: "http://dummyimage.com/190x149.png/5fa2dd/ffffff"
        },
        {
          id: "3a935226-3392-4c22-9847-b83e45a1873c",
          name: "Lamb - Ground",
          description:
            "elementum ligula vehicula consequat morbi a ipsum integer a nibh in",
          image: "http://dummyimage.com/182x162.png/dddddd/000000"
        },
        {
          id: "04cebcb3-5bd1-4e13-8d43-b87fb783e063",
          name: "Parsley - Fresh",
          description:
            "mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt",
          image: "http://dummyimage.com/238x163.png/dddddd/000000"
        },
        {
          id: "f6d812e7-b469-465d-b401-c73bef041437",
          name: "Dried Figs",
          description:
            "congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci",
          image: "http://dummyimage.com/175x121.png/dddddd/000000"
        }
      ]
    };
  }
  render() {
    const { products } = this.state;
    return (
      <Container>
        <h2>Product</h2>
        <Row>
          {products.map((product) => (
            <Col sm="4">
              <Card>
                <CardImg
                  top
                  width="100%"
                  src={product.image}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>{product.name}</CardTitle>
                  <CardText>{product.description}</CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
export default Product;
