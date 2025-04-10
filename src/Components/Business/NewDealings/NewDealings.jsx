import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { InputTextarea } from 'primereact/inputtextarea';
import Nav from '../../Nav';
import '../Login/login.css';

export default function NewDealings() {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [details, setDetails] = useState('');

  const handleSend = () => {
    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Details:", details);
    setVisible(false);
  };

  return (
    <>
      <Nav />
      <div dir="rtl" style={{ backgroundColor: '#f0fbff', minHeight: '100vh', padding: '2rem' }}>
        <div className="row">
          <div className="col-md-4">
            {/* بطاقة المستخدم */}
            <Card className="mb-3 shadow-sm p-3 bg-white">
              <div className="d-flex align-items-center">
                <img src="/assets/client5.png" alt="User" className="rounded-circle me-3" style={{ width: '70px', height: '70px' }} />
                <div>
                  <div className="fw-bold">AbulMohsen Ali</div>
                  <div className="text-muted">+966555447496</div>
                </div>
              </div>
            </Card>

            {/* زر بدء معاملة */}
            <div>

              <button
                className="btn btn-primary"
                onClick={() => setVisible(true)}
              >
                <span className="ms-2">+</span> بدء معاملة جديدة
              </button>
            </div>

              {/* الفورم الأساسي */}
              <Card className="shadow-sm p-3 bg-white">
                <div className="d-flex justify-content-center gap-3 mb-4">
                  <img src="/assets/client5.png" className="rounded-circle shadow" alt="User" style={{ width: '70px', height: '70px' }} />
                  <img src="/assets/client5.png" className="rounded-circle shadow" alt="User" style={{ width: '70px', height: '70px' }} />
                </div>

                <div className="mb-3">
                  <InputText
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="الاسم"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <InputText
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="رقم الجوال"
                    className="form-control"
                  />
                </div>

                <div className="text-center fw-bold my-4">
                  <h6>توثيق الهوية من خلال أبشر، أطرافاً موثوقين لتجنب الاحتيال</h6>
                </div>

                <div className="text-center fs-4">
                  <span className="mx-3">&lt;</span>
                  <span className="mx-3">&gt;</span>
                </div>
              </Card>

              {/* الفوتر */}
              <div className="text-center text-muted small mt-3">
                <a href="#">سياسة الخصوصية</a> | <a href="#">شروط الاستخدام</a>
                <br />
                جميع الحقوق محفوظة © وفّق 2022
              </div>
            </div>

            <div className="col-md-8">
              
            </div>
          </div>

          {/* Dialog */}
          <Dialog header="معاملة جديدة" visible={visible} onHide={() => setVisible(false)} style={{ width: '30vw' }} breakpoints={{ '960px': '75vw' }}>
            <div>
              <div className="mb-3">
                <label htmlFor="details" className="form-label fw-bold">تفاصيل المعاملة</label>
                <InputTextarea
                  id="details"
                  rows={5}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="form-control"
                />
              </div>
              <button className="btn btn-success w-100" onClick={handleSend}>
                <i className="pi pi-check me-2"></i>
                إرسال
              </button>
            </div>
          </Dialog>
        </div>
      </>
      );
}
