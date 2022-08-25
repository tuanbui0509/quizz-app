import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillClockCircle, AiFillDatabase, AiFillBook, AiFillTags } from 'react-icons/ai';
import { Tag } from 'antd';
export default function CardSection() {
  return (
    <div className="cardSection">
      <div className="cardSection__thumb">
        <img src="https://storage.tracnghiem.vn/public/trac-nghiem-online-tieng-anh.jpg" alt="" />
      </div>
      <span className="cardSection__advance"></span>

      <div className="cardSection__body">
        <Link className="cardSection__body-title" to="/">
          Trắc nghiệm Sử THPT Quốc gia 2017 Đề 305
        </Link>
      </div>
      <div>
        <AiFillTags className='cardSection__tag-icon'></AiFillTags>
        <Tag color="#2db7f5">#Geometry</Tag>
        <Tag color="#87d068">#Maths</Tag>
      </div>
      <div className="cardSection__teacher">
        <Link to="/" className="cardSection__teacher__link">
          <img
            src="https://storage.tracnghiem.vn/tracnghiem-dev/avatar.jpg"
            className="cardSection__teacher__avatar"
            alt=""
          />
          <span className="cardSection__teacher__name">Bùi Ngọc Tuấn</span>
        </Link>
      </div>
      <div className="cardSection__footer">
        <div className="cardSection__footer-item">
          <AiFillClockCircle />
          <span>Unlimited</span>
        </div>
        <div className="cardSection__footer-item">
          <AiFillDatabase />
          <span>10 Questions</span>
        </div>
        <div className="cardSection__footer-item">
          <AiFillBook />
          <span>Hard</span>
        </div>
      </div>
    </div>
  );
}
