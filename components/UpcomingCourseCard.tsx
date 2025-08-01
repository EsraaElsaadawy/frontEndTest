'use client';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import Image from 'next/image';
import styles from './UpcomingCourseCard.module.css';

export default function UpcomingCourseCard() {
  return (
    <section className={`${styles.cardSection} py-5`} dir="rtl">
      <div className="p-0 ms-0 marginInlineStart">
            <h2 className="text-light fw-bold m-0">دورات و ورش <span className="text-danger">تدريبية قادمة</span></h2>
            <div className={`row align-items-center justify-content-between mt-5`}>
                <div className="col-md-6 text-white">
                     <span className={`${styles.badge}`}>قريباً</span>
         
         
                       <div className="position-relative">
                            <h2 className={`fw-bold my-3 ${styles.UpcomingCourseTitle}`}>نصائح هامة للشباب<br />قبل الزواج</h2>

                            <div className={styles.underLine}></div>
                        </div>

                     <p className={`text-white fw-bold my-3 ${styles.UpcomingCourseName}`}>سالم عبدالله</p>
                </div>
                <div className="col-md-6 text-center mb-4 mb-md-0">
                  <img
                    src="/images/comingCourses.png" 
                    alt="المحاضر"
                    width={673}
                    height={500}
                    className="img-fluid"
                  />
                </div>
            </div>
      </div>
    </section>
  );
};


