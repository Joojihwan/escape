import React from "react";
import './Register.css';
import Footer from '../components/ui/Footer';

function Register () {
    return (
        <div className="register">
            <div className="register_button_area">
                <button>등록</button>
            </div>
            <div className="register_content">
                <div className="title"><label>title</label><input/></div>
                <div className="category"><label>category</label><input/></div>
                <div className="picture"><label>picture</label></div>
                <div className="price"><label>price</label><input/></div>
                <div className="flavor"><label>flavor</label></div>
            </div>
            <Footer />
        </div>
    );
}

export default Register;