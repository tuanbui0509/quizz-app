import CardSection from 'components/CardSection';
import React from 'react';
import { Button, Card, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';

export default function SectionSidler() {
  const listItem = () => {
    let result = [];
    for (let index = 0; index < 20; index++) {
      result.push(
        <Col lg="3" key={index} className="mb-4">
          <CardSection />
        </Col>
      );
    }
    return result;
  };
  return (
    <div className="section-slider container-fluid">
      <Container>
        <Row className="section-slider__top">
          <Col lg="6" sm="12">
            <div className="section-slider__heading">
              <h3 className="section-slider__primary">Những chủ đề nổi bật nhất</h3>
              <span>Bạn muốn làm chủ đề trắc nghiệm online nào?</span>
            </div>
          </Col>
          <Col lg="6" sm="12">
            <div className="section-slider__btn">
              <Button variant="outline-primary">Xem tất cả</Button>
            </div>
          </Col>
        </Row>
        <Row>{listItem()}</Row>
      </Container>
    </div>
  );
}
