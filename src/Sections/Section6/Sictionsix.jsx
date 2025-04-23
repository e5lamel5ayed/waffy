import React from "react";
import styles from "./Sectionsix.module.css";
import group from "/assets/Group.png";
import { Link } from "react-router-dom";

const SectionSix = () => {
  return (
    <div className='container pt-5'>
      <div className="row d-flex justify-content-between">

        <div className='col-md-6'>
          <img src={group} alt="وسيط موثوق" className="w-100" />
        </div>

        <div className='col-md-5 text-end d-flex flex-column justify-content-center'>
          <h2 className={styles.sectionTitle}>هــــل أنـــت وسيـــــط مــــوثـوق</h2>
          <p className={styles.sectionText}>
            فـــــــــــي أي مــــــــــــــــجــــــــــــــــــــال؟
            <br />
            انضــم إلينــا الآن، وضــاعــف أرباحـك، واضـمــــــــــــــــن
            عـمـــــولـتــــــك، مــــــــــع ضـــمـــــــان لأمـــوال
            الطرفـــين في المـــعـــامـــلات التي تـــديـــرهــــــــــــا
            بأمـــــــــان وسهـــــولــــــــة.
          </p>
          <Link to="/ticket">
          <button className={styles.joinButton}>انضم الآن</button>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default SectionSix;
