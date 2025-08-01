'use client';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import styles from './Subscribe.module.css';

export default function Subscribe() {
  return (
    <div  className={`container px-0 my-5 ${styles.subscribeBG}`}>
      <div className={styles.subscribeContent}>
        <p className='mb-3'>ابدأ رحلة التعلم مع</p>
        <div className='d-flex align-items-center justify-content-center mb-4'>
            <img src="/images/tadarabLogoWhite.png" alt="" />
            <img src="/images/NoLimits.png" alt="" className='me-3' />
        </div>
        <p className="mb-4 fs-5 fw-normal">
           تعلم مع أكثر من 1000 دورة تدريبية في مختلف المجالات<br />
           باشتراك واحد فقط
        </p>
        <p className="mb-4 fs-4 fw-normal mt-4">اشتراكات بتبدأ من 10.000 د.ك شهرياً</p>
        <button className={styles.subscribeBtn}>أشترك الآن</button>
      </div>
    </div>
  );
}
