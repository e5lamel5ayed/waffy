import React from "react";
import styles from "./Sectionsix.module.css"; 
import group from "../../assets/Group.png";

const SectionSix = () => {
  return (
    <div className={styles.sectionSix}>
           
           <div className={styles.sectionLeft}>
        <img src={group} alt="وسيط موثوق" className={styles.sectionImage} />
      </div>
      
      <div className={styles.sectionRight}>
        <h2 className={styles.sectionTitle}>هــــل أنـــت وسيـــــط مــــوثـوق</h2>
        <p className={styles.sectionText}>
          فـــــــــــي أي مــــــــــــــــجــــــــــــــــــــال؟
          <br />
          انضــم إلينــا الآن، وضــاعــف أرباحـك، واضـمــــــــــــــــن
          عـمـــــولـتــــــك، مــــــــــع ضـــمـــــــان لأمـــوال
          الطرفـــين في المـــعـــامـــلات التي تـــديـــرهــــــــــــا
          بأمـــــــــان وسهـــــولــــــــة.
        </p>
        <button className={styles.joinButton}>انضم الآن</button>
      </div>

    </div>
  );
};

export default SectionSix;
