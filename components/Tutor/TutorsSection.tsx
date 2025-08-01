'use client';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './TutorsSection.module.css';

// تعريف نوع البيانات للمدرب
interface Tutor {
  id: number;
  name: string;
  title: string;
  avatar_url: string;
  deeplink_url: string;
}

const TutorsSection: React.FC = () => {
  const [tutors, setTutors] = useState<Tutor[]>([]);

  // جلب البيانات من الـ API
  useEffect(() => {
    fetch('https://staging-api.tadarab.com/api/v1/public/tutors?&page=1&per_page=12')
      .then((response) => response.json())
      .then((data) => {
        const fetchedTutors = data.data.map((tutor: any) => ({
          id: tutor.id,
          name: tutor.name_ar, // استخدام الاسم العربي
          title: tutor.title,
          avatar_url: tutor.avatar_url || '/images/default-avatar.jpg', // صورة افتراضية لو لم تكن موجودة
          deeplink_url: tutor.deeplink_url,
        }));
        setTutors(fetchedTutors);
      })
      .catch((error) => console.error('Error fetching tutors:', error));
  }, []);

  return (
    <section className={`${styles.tutorsSection} py-5`} dir="rtl">
      <div className="p-0 ms-0 marginInlineStart" >
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="text-light fw-bold m-0 mb-3">
            نخبة من مدربي <span className="text-danger">الوطن العربي</span>
          </h2>

          <div className="d-flex justify-content-between align-items-center">
            <p className="text-light fw-bold fs-4 m-0">المزيد</p>
            <img src="/images/arrowRightWhite.png" alt="" />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-4 text-center">
            <div className={`${styles.mainTutor}`}>
              <img
                src={tutors[0]?.avatar_url}
                alt={tutors[0]?.name}
                className="img-fluid"
              />
              <div className={styles.tutorInfo}>
                <h4 className={styles.tutorName}>{tutors[0]?.name}</h4>
                <p className="text-white">{tutors[0]?.title}</p>
              </div>
            </div>
          </div>

          {tutors.slice(1, 6).map((tutor, index) => (
            <div key={tutor.id} className="col-2 text-center">
              <div className={`${styles.sideTutor}`}>
                <img
                  src={tutor.avatar_url}
                  alt={tutor.name}
                  className="img-fluid"
                />
                <div className={styles.tutorInfo}>
                  <h5 className={styles.tutorName}>{tutor.name}</h5>
                  <p className="text-white">{tutor.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TutorsSection;
