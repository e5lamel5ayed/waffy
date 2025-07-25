import { useState } from "react";
import { FaPlayCircle } from "react-icons/fa";
import securePayment from "/assets/secure-payment.png";
import seriousClients from "/assets/serious-clients.png";
import salesManagement from "/assets/sales-management.png";
import supportTeam from "/assets/support-team.png";
import sellerImage from "/assets/seller.png";
import buyerImage from "/assets/buyer.png";
import '../Sectiontwo/section_two.css';
import { Link } from "react-router-dom";

//-----------------
function SectionTwo() {
  const [activeTab, setActiveTab] = useState('seller');

  const sellerContent = [
    { img: securePayment, text: "وسائل دفع آمنة ومتعددة" },
    { img: seriousClients, text: "عملاء جادون، ومعدلات إرجاع أقل" },
    { img: salesManagement, text: "متابعة وإدارة مبيعاتك من مكان واحد" },
    { img: supportTeam, text: "فريق متخصص لخدمتك وضمان حقوق كافة الأطراف" }
  ];

  const buyerContent = [
    { img: securePayment, text: "وسائل دفع آمنة ومتعددة" },
    { img: seriousClients, text: "تأكد من حصولك على طلبك كما هو" },
    { img: salesManagement, text: "تابع جميع مشترياتك من مكان واحد" },
    { img: supportTeam, text: "فريق متخصص لخدمتك وضمان حقوق كافة الأطراف" }
  ];

  const videoUrl = "https://youtu.be/ES7V5n9Rczg";
  const activeImage = activeTab === 'seller' ? sellerImage : buyerImage;

  return (
    <div className="section-two">
      <h2 className="section-title">نحمي المعاملات ونحفظ <br />الحقوق بين الأفراد</h2>
      <div className="tabs-container">
        <button
          className={activeTab === 'buyer' ? 'active' : ''}
          onClick={() => setActiveTab('buyer')}
        >
          مشتري
        </button>
        <button
          className={activeTab === 'seller' ? 'active' : ''}
          onClick={() => setActiveTab('seller')}
        >
          بائع
        </button>
      </div>
      <div className="content-container">
        <div className="image-container">
          <img src={activeImage} alt="Preview" className="preview-image" />
          <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="play-icon">
            <FaPlayCircle size={60} color="white" />
          </a>
        </div>
        <div className="content">
          {activeTab === 'seller' ? (
            <div>
              <h1 style={{ color: '#404040' }} >أنت موثوق، مبيعاتك متزايدة</h1>
              <div className="features mt-5">
                <div className="text-end mb-4">

                  <p >مع وفّي تضمن ثقة عملائك وتعزز مصداقيتك</p>
                </div>
                {sellerContent.map((item, index) => (
                  <div className="feature-item" key={index}>
                    <img src={item.img} alt={item.text} />
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <h3>أموال محفوظة .. جودة مضمونة</h3>
              <p>مدفوعاتك محفوظة، حتى تستلم المنتج أو الخدمة</p>
              <div className="features">
                {buyerContent.map((item, index) => (
                  <div className="feature-item" key={index}>
                    <img src={item.img} alt={item.text} />
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="w-100">
        {activeTab === 'seller' ?
          (
            <Link to="/ticket" style={{ textDecoration: 'none' }}>
              <button className="btn-2" style={{ marginLeft: 'auto', marginRight: '180px', textDecoration: 'none' }}> بيع الآن</button>
            </Link>
          ) : (
            <Link to="/ticket" style={{ textDecoration: 'none' }}>
              <button className="btn-2" style={{ marginLeft: 'auto', marginRight: '180px' }}> اشتر الآن</button>
            </Link>
          )
        }
      </div>
    </div>
  );
}

export default SectionTwo;