import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Herro() {
  const categories =
    [
      "كيف نحفظ الأموال",
      "المشتري",
      "البائع",
      "الأخبار",
      "الكل",
    ];
  const [activeCategory, setActiveCategory] = useState("الكل");

  return (
    <div className="Blog">
      <div className="Herro mt-5 py-3 d-flex flex-column justify-content-center align-items-center">
        <p className="text-dark">المدونة</p>
        <h1 className="fw-bold mb-4">مرحبا بك في مدونة وفي</h1>
        <p className="text-dark">الطريقة الأئمن للبيع والشراء بين الأفراد</p>

        {/* فلاتر التصنيفات */}
        <div className="container mt-5">
          <div className="row d-flex justify-content-center gap-3 text-muted fs-5 text-center g-0">
            {categories.map((category) => (
              <div key={category} className="col-auto">
                <a
                  href="#"
                  className={`d-block text-decoration-none px-2 ${activeCategory === category ? "text-black fw-bold text-decoration-underline" : "text-muted"}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveCategory(category);
                  }}
                >
                  {category}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herro;
