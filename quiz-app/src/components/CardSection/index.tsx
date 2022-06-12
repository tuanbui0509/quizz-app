import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillClockCircle, AiFillDatabase, AiFillBook } from 'react-icons/ai';
export default function CardSection() {
  return (
    <div className="cardSection">
      <div className="cardSection__thumb">
        <img src="https://storage.tracnghiem.vn/public/trac-nghiem-online-tieng-anh.jpg" alt="" />
      </div>
      <span className="cardSection__advance"></span>
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
      <div className="cardSection__body">
        <Link className='cardSection__body-title' to="/">Trắc nghiệm Sử THPT Quốc gia 2017 Đề 305</Link>
      </div>
      <div className="cardSection__footer d-flex align-items-center justify-content-between">
        <div className="cardSection_footer-item d-flex align-items-center justify-content-between">
          <AiFillClockCircle />
          <span>Không tính giờ</span>
        </div>
        <div className="cardSection_footer-item d-flex align-items-center justify-content-between">
          <AiFillDatabase />
          <span>10 Lượt thi</span>
        </div>
        <div className="cardSection_footer-item d-flex align-items-center justify-content-between">
          <AiFillBook />
          <span>40 Câu hỏi</span>
        </div>
      </div>
    </div>
  );
}
