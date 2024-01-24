import React, { useState } from 'react';
import './UserForm.css'
import {Link } from "react-router-dom";

const UserForm = () => {
    const [formData, setFormData] = useState({
        full_name: '',
        phone: '',
        email: '',
        job: '',
        branch_id: '0',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleNextPage = (e) => {

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add your form submission logic here
        console.log('Form Data:', formData);
    };
    return (
        <div className="container">
            <form className="form-register" onSubmit={handleSubmit}>
                <div className="row align-items-center gy-3">
                    <div className='left-align'>
                        <label className >Đăng ký thông tin</label>
                    </div>
                    <div className="col-1">
                        <div className="row">
                            {/* Input fields */}
                            <div className="col">
                                <label className="form-label visually-hidden" htmlFor="form-reg-name">Họ và tên</label>
                                <input className="form-control" id="form-reg-name" name="full_name" type="text" placeholder="Họ và tên" required onChange={handleChange} />
                            </div>
                            <div className="col">
                                <label className="form-label visually-hidden " htmlFor="form-reg-phonenumber">Số điện thoại</label>
                                <input className="form-control phone-input" id="form-reg-phonenumber" name="phone" type="text" placeholder="Số điện thoại" required onChange={handleChange} />
                            </div>

                        </div>
                        <div className='row'>
                            <div className="col">
                                <label className="form-label visually-hidden" htmlFor="form-reg-Email">Email</label>
                                <input className="form-control email" id="form-reg-Email" name="email" type="email" placeholder="Email" required onChange={handleChange} />
                            </div>
                            <div className="col">
                                <label className="form-label visually-hidden" htmlFor="form-reg-work">Bạn hiện đang là?</label>
                                <select className="form-select form-select-default age-options" id="form-reg-work" name="job" required onChange={handleChange}>
                                    <option value="" selected disabled hidden>Lựa chọn</option>
                                    <option value="volvo">Học sinh cấp 2</option>
                                    <option value="saab">Học sinh cấp 3</option>
                                    <option value="mercedes">Sinh viên </option>
                                    <option value="audi">Người đi làm</option>      
                                </select>
                            </div>
                        </div>

                    </div>

                </div>
                <div>
                <Link to="/select-course"><button className='button' type="submit">
                    Tiếp tục
                </button>
                </Link>
                </div>
            </form>
        </div>
    );
};

export default UserForm;
