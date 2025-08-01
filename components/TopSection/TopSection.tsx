'use client';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import styles from './TopSection.module.css';
import { relative } from 'path';
export default function TopSection() {
  return (
    <section className={styles.topSectionBG}>
      <div className={styles.bottomLayer}></div>
      <div className={styles.content}>
        <p>30 يومًا</p>
        <p>كافية لتحقيق أهدافك</p>
        <p>منصة تدرب الرائدة في مجال التدريب في الخليج و الوطن العربي منذ أكثر من 10 سنوات في مجال التعلم عن بعد</p>
        <button className='d-flex align-items-center justify-content-center'>ابدأ التعلم الآن
          <img src="/images/arrow.png" alt="arrow" style={{ marginRight: '9px', width: '18px' }} />
        </button>
      </div>
      <div className="row align-items-end justify-content-between">
        <div className="col-md-4 text-end p-0 xsHide">
          <img
            src="/images/topSectionLady.png"
            alt="Hero"
            className="img-fluid"
            style={{ zIndex: 1, position: 'relative' }}
          />
        </div>

        <div className={`${styles.topSectionImg} col-md-8 col-12 text-start px-4`}>
          <img
            src="/images/topSectionBG.png"
            alt=""
            className="img-fluid"
          />
        </div>

      </div>
    </section>
  );
}