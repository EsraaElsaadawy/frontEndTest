'use client';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import styles from './StatsSection.module.css';
import React from 'react';

export default function StatsSection() {
  return (
    <section className="py-5 text-center">
      <div className={`container ${styles.statsSectionBG}`}>
            <div className='d-flex flex-column align-items-center justify-content-center h-100'>
               <h2 className="fw-bold mb-3 text-center">
                <span style={{ color: '#FFFFFF', fontSize: '40px', display: 'block' }}>
                  أكثر من
                </span>
                <span style={{ color: '#BE1622', fontSize: '60px', display: 'block' }}>
                  300,000 متعلم
                </span>
                <span style={{ color: '#FFFFFF', fontSize: '40px', display: 'block' }}>
                  في الوطن العربي
                </span>
               </h2>
               <p className="mb-5" style={{color: '#FFFFFF99' , fontSize:'16px'}}>
               منصة تدرب الرائدة في مجال التدريب في الخليج والوطن العربي منذ أكثر من 10 سنوات في مجال التعلم من بعد
               </p>
      
              <div className="row gy-4 justify-content-center col-12">
                <div className="col-3">
            <div className="p-3">
              <h3 className="fw-bold fs-2" style={{ color: '#BE1622'}}>+4 آلاف</h3>
              <p className="mb-0 fs-5 text-white">ساعة تدريبية</p>
            </div>
                </div>
                 <div className="col-3">
            <div className="p-3">
              <h3 className="fw-bold fs-2" style={{ color: '#BE1622'}}>1100+</h3>
              <p className="mb-0 fs-5 text-white">دورة تدريبية</p>
            </div>
                </div>
                <div className="col-3">
            <div className="p-3">
              <h3 className="fw-bold fs-2" style={{ color: '#BE1622'}}>600+</h3>
              <p className="mb-0 fs-5 text-white">خبير ومدرب</p>
            </div>
                </div>
                <div className="col-3">
            <div className="p-3 shadow-sm">
              <h3 className="fw-bold fs-2" style={{ color: '#BE1622'}}>10+</h3>
              <p className="mb-0 fs-5 text-white">سنوات خبرة</p>
            </div>
                </div>
              </div>
            </div>
      </div>
    </section>
  );
}
