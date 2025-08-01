'use client';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import styles from './HelpSection.module.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function HelpSection() {
  return (
    <section className={`${styles.helpSection} my-5`} dir="rtl">
      <div className="container" >
        <div className="row align-items-center">
          <div className="col-md-6 text-center mt-4 mt-md-0">
                <img
                  src="/images/mobile.png"
                  alt="WhatsApp Help"
                  width={519}
                  height={560}
                  className={`img-fluid ${styles.mobileIcon}`}
                />
          </div>

          <div className="col-md-6 text-white d-flex flex-column">
                <h2 className="fw-bold mb-3">تحتاج مساعدة أو استفسار؟</h2>
                <p className="mb-4">قم بالتواصل معنا عبر WhatsApp</p>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className={`btn d-flex align-items-center text-white ${styles.helpBtn}`}>
                  <i className="bi bi-whatsapp ms-2"></i> تواصل معنا
                </a>
          </div>

        </div>
      </div>
    </section>
  );
};
