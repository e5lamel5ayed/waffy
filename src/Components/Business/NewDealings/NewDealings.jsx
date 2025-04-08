import React from 'react';
import { Container, Card, Button, Form, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//------------------------------------------------------

function NewDealings() {
  return (
    <div dir="rtl" style={{ backgroundColor: '#f0fbff', height: '100vh', display: 'flex',  padding: '2rem' }}>
    <div style={{  }}>
<div className="col-md-12">
<div className="col-md-11">
      {/* بطاقة المستخدم */}
      <Card className="p-1 shadow mb-2">
        <div className="d-flex align-items-center mb-2">
          <img src="/assets/client5.png" alt="User" className="rounded-circle me-2 ms-3" style={{width:"70px", hight:"70px"}} />
          <div>
            <div className="fw-bold">AbulMohsen Ali</div>
            <div className="text-muted">+966555447496</div>
          </div>
        </div>
     
      </Card>

      <button  className=" w-100 py-2 border rounded mb-3 fs-6 fw-bold" style={{backgroundColor:"#1a7efb",color:"white"}}>
      <span className="ms-2 rounded-pill p-1" >+</span>   بدء معاملة جديدة 
        </button>

      {/* بطاقة الفورم */}
      <Card className="p-3 shadow">
        <Row className="align-items-center pb-4">
          <Row className="align-items-center justify-content-center gap-5 mb-3">
            <img src="/assets/client5.png" className="img-fluid rounded-circle shadow" alt="ID Icon" style={{width:"70px", hight:"70px",}} />
            <img src="/assets/client5.png" className="img-fluid rounded-circle shadow" alt="ID Icon" style={{width:"70px", hight:"70px",}} />
          </Row>
         
        </Row>
        <Form.Group className="mb-2 py-1">
          <Form.Control className=" py-2" type="text" placeholder="الاسم" />
        </Form.Group>
        <Form.Group className="mb-3 py-1">
          <Form.Control className=" py-2" type="text" placeholder="رقم الجوال" />
        </Form.Group>

        {/* التنبيه */}
        <div className="fw-bold text-center  my-3">
         <h6> توثيق الهوية من خلال أبشر، أطرافاً موثوقين لتجنب الاحتيال</h6>
        </div>

        {/* الأسهم */}
        <div className="d-flex justify-content-center">
          <span className="mx-2">&lt;</span>
          <span className="mx-2">&gt;</span>
        </div>
      </Card>

      {/* الفوتر */}
      <div className="text-center text-muted small mt-3">
        <linl> سياسة الخصوصية   |   شروط الاستخدام </linl>
        <br />
        جميع الحقوق محفوظة © وفّق 2022
      </div>
      </div>
      <div className="col-md-7"></div>
      </div>


     
    </div>

    
  </div>

  );
}

export default NewDealings;
