'use client';
import React, { useRef, useEffect, useState } from 'react';
import { FaPlayCircle, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './TestimonialsSection.module.css';

interface Testimonial {
  trainerName: string;
  traineeName: string;
  courseName: string;
  text: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    trainerName: 'عفاف الجاسم',
    traineeName: '',
    courseName: 'دورة أسراري في تربية الأبناء',
    text: "",
    image: '/images/testimonial1.jpg',
  },
  {
    trainerName: 'فاطمة القلاف',
    traineeName: 'فاطمة',
    courseName: 'دورة أسراري في تربية الأبناء',
    text: "دورة وافية وشاملة تعلمك على روتين يساعدك على إبقاء بيتك نظيف عن طريق خطوات بسيطة قد تغير نمط حياتك داخل المنزل، وتحتوي على جداول تنظم أعمالك المنزلية",
    image: '',
  },
  {
    trainerName: 'عبدلرحمن العوضي',
    traineeName: '',
    courseName: 'دورة أساسيات الزراعة المنزلية وفن الزراعة',
    text: '',
    image: '/images/testimonial2.jpg',
  },
  {
    trainerName: 'منى الفيلكاوي',
    traineeName: 'منى الفيلكاوي',
    courseName: 'دورة ChatGPT شريكك في تحقيق الاستقرار المالي',
    text: "دورة ممتازة، اكتسبت معلومات كثيرة أفادتني عن الذكاء لاصطناعي وبرنامج ChatGPT بالذات، وفعلاً بدأت استخدم البرنامج كمستشار في مشروعي الأول، نسأل الله التوفيق للجميع",
    image: '',
  },
];

const TestimonialsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = container.offsetWidth / 1.5;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const checkScroll = () => {
    const container = scrollRef.current;
    if (!container) return;
    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(container.scrollLeft + container.clientWidth < container.scrollWidth);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    checkScroll();
    container.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);
    return () => {
      container.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  return (
    <section className={`${styles.testimonialsSection} py-5`} dir="rtl">
      <div className="container p-0">
            <h2 className="text-light fw-bold m-0">آراء المتعلمين <span className="text-danger">في تدرب</span></h2>

        <div className="position-relative">
          {canScrollLeft && (
            <button className={`${styles.scrollBtn} position-absolute start-0 top-50`} onClick={() => scroll('left')}>
              <FaArrowLeft />
            </button>
          )}
          {canScrollRight && (
            <button className={`${styles.scrollBtn} position-absolute end-0 top-50`} onClick={() => scroll('right')}>
              <FaArrowRight />
            </button>
          )}

          <div
            ref={scrollRef}
            className="d-flex overflow-auto hide-scrollbar"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`${styles.testimonialCard} hide-scrollbar d-flex flex-column flex-md-row rounded py-3`}
              >
                {index % 2 == 0 ? (
                  <div className={`position-relative ${styles.testimonialInsideCard}`}>
                    <img
                      src={testimonial.image}
                      alt={testimonial.traineeName}
                      className={`img-fluid ${styles.testimonialImg}`}
                    />
                    <a className={styles.playIcon}>
                      <FaPlayCircle size={40} />
                    </a>
                    <div className={styles.trainerName}>
                      <p>{testimonial.courseName}</p>
                      <p>{testimonial.trainerName}</p>
                    </div>
                  </div>
                ) : (
                  <div className={`px-3 d-flex flex-column justify-content-center ${styles.testimonialInsideCard}`}>
                    <p className={styles.testimonialText}>
                      "{testimonial.text}"
                    </p>
                    <p className={styles.testimonialName}>{testimonial.traineeName}</p>
                    <p className={styles.testimonialRole}>{testimonial.courseName}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
