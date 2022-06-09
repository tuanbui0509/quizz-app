import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillClockCircle } from 'react-icons/ai';
export default function CardSection() {
  return (
    <div className="cardSection">
      <div className="cardSection__thumb">
        <img src="https://storage.tracnghiem.vn/public/trac-nghiem-online-tieng-anh.jpg" alt="" />
      </div>
      <span className="cardSection__advance"></span>
      <div className="cardSection__teacher">
        <Link to="/" className='cardSection__teacher__link'>
          <img src="https://storage.tracnghiem.vn/tracnghiem-dev/avatar.jpg" className='cardSection__teacher__avatar' alt="" />
          <span className='cardSection__teacher__name'>Bùi Ngọc Tuấn</span>
        </Link>
      </div>
      <div className="cardSection__body">
        <Link to="/">Trắc nghiệm Sử THPT Quốc gia 2017 Đề 305</Link>
      </div>
      <div className="cardSection_footer">
        <div className="cardSection_footer-item">
          <AiFillClockCircle />
          <span>Không tính giờ</span>
        </div>
      </div>
    </div>
  );
}
