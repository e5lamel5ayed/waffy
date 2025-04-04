import React, { useEffect, useState } from "react";
import "./dealings.css";

const Dealings = () => {
  // دالة العدّاد التدريجي للأرقام
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const targetNumbers = [+40000, +14000, 13800, 4.4];

  useEffect(() => {
    const intervals = targetNumbers.map((num, index) => {
      return setInterval(() => {
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          if (newCounts[index] < num) {
            newCounts[index] += Math.ceil(num / 100); // زيادة تدريجية
          } else {
            clearInterval(intervals[index]); // إيقاف عند الوصول للقيمة المستهدفة
          }
          return newCounts;
        });
      }, 50); // سرعة العداد
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, []);
    
  return (
    <div className="container dealings-section py-5">
      {/* العنوان */}
      <div className="row">
        <div className="col-12 text-center mb-5 py-5">
          <h1 className="fw-bold dealings-title">تمم معاملاتك بأمان وسهولة!</h1>
        </div>
      </div>

      {/* البوكسات */}
      <div className="row mt-5  mb-5 gap-1">
        {[
          { text: "مستخدم", icon: "a-1-2.svg" },
          { text: "معاملة نشطة", icon: "checkmark-circle-2-1.svg" },
          { text: "معاملة ناجحة", icon: "Vector-1-1.svg" },
          { text: "تقييم المستخدمين", icon: "Vector-2.svg" },
        ].map((item, index) => (
          <div className="col-md-3 col-sm-6" key={index}>
            <div className="box  d-flex align-items-center">
               
             
              <img
                src={`/assets/img/${item.icon}`}
                alt={item.text}
                className="feature-icon "
                style={{ width: "50px", height: "50px" }}
              />
               <div class="px-3">
               <h1 className="fw-bold count fs-1">{counts[index].toLocaleString()}</h1>
              <p className="text-muted" style={{fontSize:'1.3rem'}}>{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dealings;
