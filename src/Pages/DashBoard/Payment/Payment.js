import React from "react";
import './Payment.css'
import payment from './../../../images/error/coming-soon-googly-eyes.png'
// import payment from './../../../images/undraw_Mobile_pay_re_sjb8.png'

const Payment = () => {
  return (
    <div className=" mt-5 py-5">
      <img className='img-fluid w-75' src={payment} alt="" />
    </div>
  );
};

export default Payment;
