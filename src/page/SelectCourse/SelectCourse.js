import React from "react";
import { useState } from "react";
import Popup from "../../components/Popup/Popup.js";
import toeicImage from '../../assets/toeic.jpg'; // Import the images statically
import {Link } from "react-router-dom";

const SelectCourse = () => {
    const [selectedId, setSelectedId] = useState(null);

    const handleClick = (id) => {
        setSelectedId(id);
    };
    const [showPopup, setShowPopup] = useState(false);

    const handleButtonClick = () => {
        if (selectedId !== null) {
            // return <AnotherComponent />;
        } else {
            setShowPopup(true);
        }
    };
    const myArray = [
        { image: toeicImage, text: "Luyện thi Toeic 2 kỹ năng" },
        { image: toeicImage, text: "Luyện thi Toeic 4 kỹ năng" },
        { image: toeicImage, text: "Luyện thi VNU-EPT" },
        { image: toeicImage, text: "Luyện thi IELTS" },
        { image: toeicImage, text: "Tiếng anh giao tiếp" },
        { image: toeicImage, text: "Tiếng anh cho người mất gốc" },
        { image: toeicImage, text: "Tiếng anh thiếu nhi" },
    ];
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",

                paddingLeft: "10px",
                paddingRight: "10px",
            }}
        >
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {myArray.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleClick(index)}
                        style={{
                            border:
                                selectedId === index ? "5px solid red" : "2px solid black",
                            borderRadius: "10px",
                            padding: "10px",
                            marginLeft: "10px",
                            marginTop: "10px",
                            cursor: "pointer",
                            flexBasis: "23%",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                width: "100%",
                            }}
                        >
                            <img
                                src={require('../../assets/toeic.jpg')}
                                alt="Ảnh khóa học"
                                style={{ width: "100%" }}
                            />
                            <p style={{ marginTop: "10px", fontSize: "18px" }}>{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Link to="/confirm-course">
            <button
                style={{
                    fontSize:"20px",
                    marginTop: "10px",
                    width: "150px",
                    height: "50px",
                    borderRadius: "10px"
                }}
                onClick={handleButtonClick}
            >
                Lựa chọn
            </button>
            </Link>
            {showPopup && (
                <Popup onClose={() => setShowPopup(false)}>
                    Hãy lựa chọn một khoá học trước khi chuyển tiếp
                </Popup>
            )}
        </div>
    );
};

export default SelectCourse;