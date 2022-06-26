import { Col, Menu, MenuProps, Pagination, Row, Select } from 'antd';
import CardSection from 'components/CardSection';
const { Option } = Select;
export default function ListExam() {
  const listItem = () => {
    let result = [];
    for (let index = 0; index < 20; index++) {
      result.push(
        <Col
          key={index}
          xs={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
          // xl={{ span: 7, offset: 1 }}
          className="gutter-row mb-2"
          span={8}
        >
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
    <div className="list-exam container-fluid">
      <>
        <Row className="list-exam__top">
          <Col>
            <div className="list-exam__heading">
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
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>{listItem()}</Row>
        <Pagination style={{ textAlign: 'center' }} defaultCurrent={1} total={50} />
      </>
    </div>
  );
}
