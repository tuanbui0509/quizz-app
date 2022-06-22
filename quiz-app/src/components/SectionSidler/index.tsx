import { Col, Menu, MenuProps, Row, Select } from 'antd';
import CardSection from 'components/CardSection';
const { Option } = Select;
export default function SectionSidler() {
  const listItem = () => {
    let result = [];
    for (let index = 0; index < 20; index++) {
      result.push(
        <Col key={index} xs={{ span: 23, offset: 1 }} lg={{ span: 7, offset: 1 }} className="mb-2">
          <CardSection />
        </Col>
      );
    }
    return result;
  };
  const handleMenuClick: MenuProps['onClick'] = (e) => {
    console.log('click', e);
  };

  return (
    <div className="section-slider container-fluid">
      <>
        <Row className="section-slider__top">
          <Col>
            <div className="section-slider__heading">
              <span>20 results</span>
            </div>
          </Col>
          <Col>
            <span>Sort by: </span>
            <Select defaultValue="latest">
              <Option value="latest">Latest</Option>
              <Option value="top-rated">Top rated</Option>
            </Select>
          </Col>
        </Row>
        <Row>{listItem()}</Row>
      </>
    </div>
  );
}
