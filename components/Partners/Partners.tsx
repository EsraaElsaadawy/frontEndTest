'use client';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import styles from './Partners.module.css'; 

export default function Partners(){
  return (
    <section className={`text-white py-5 ${styles.partnersBg}`} dir="rtl">
      <div className="container p-0 mt-5">
            <div className='d-flex align-items-end justify-content-start'>
                <p className='m-0 ms-2 text-white fs-4' style={{lineHeight:'1.2'}}>for business</p>
                <img src="/images/tadarabLogo.png" alt="tadarabLogo" style={{width:'203px'}} />

            </div>
            <h1 className="fw-bold my-4 fs-1">اكتشف عالم تدرب للأعمال</h1>
           <p className={`fs-5 mb-4 ${styles.clampLines}`}>
            تحديات سوق العمل لا تنتهي! طور مهارات مُوظفيك لتتناسب مع اقتصاد اليوم، اختر الخطة التدريبية التي تناسب أهداف عملك وتواصل معنا الآن.
           </p>

            <button className={`btn px-4 py-2 ${styles.partnersBtn}`}>
               اعرف المزيد 
                <img src="/images/arrowRightWhite.png" alt="" />
            </button>

            <p className='m-0 mt-5 text-white fw-bold' style={{fontSize:'24px'}}>شركاء النجاح في تدرب للأعمال</p>

            <div className="d-flex flex-wrap gap-3 mt-3 justify-content-between align-items-center">
              <img src="/images/partnerLogo1.png" alt="شريك 1" />
              <img src="/images/partnerLogo2.png" alt="شريك 2" />
              <img src="/images/partnerLogo3.png" alt="شريك 3" />
              <img src="/images/partnerLogo4.png" alt="شريك 4" />
              <img src="/images/partnerLogo5.png" alt="شريك 5" />
              <img src="/images/partnerLogo6.png" alt="شريك 6" />
            </div>
      </div>
    </section>
  );
};
