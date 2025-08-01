'use client';
import { useRef } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import styles from './TopicsBar.module.css';

const topics = [
  "كل المواضيع",
  "تنمية بشرية",
  "إدارة الذات",
  "ريادة الأعمال",
  "السعادة الأسرية",
  "التربية الإيجابية",
  "الثقة بالنفس",
  "الصحة النفسية",
  "تربية الأبناء",
  "التنمية الذاتية"
];


export default function TopicsBar() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    const scrollAmount = 200;
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={`position-relative py-3 marginInlineStart`}>
      <button
        className={`btn btn-dark position-absolute start-0 top-50 translate-middle-y z-3`}
        onClick={() => scroll('left')}
        aria-label="Scroll left"
      >
        <FaArrowLeft />
      </button>

      <div
        ref={containerRef}
        className="d-flex overflow-auto hide-scrollbar gap-2 px-5"
        dir="rtl"
      >
        {topics.map((topic, index) => (
          <button
            key={index}
            className={`btn ${
              topic === "كل المواضيع" ? "btn-light text-dark fw-bold" : "btn-outline-light"
            } ${styles.topicBtn} rounded-pill px-4`}
          >
            {topic}
          </button>
        ))}
      </div>

      <button
        className="btn btn-dark position-absolute end-0 top-50 translate-middle-y z-3"
        onClick={() => scroll('right')}
        aria-label="Scroll right"
      >
        <FaArrowRight />
      </button>
    </div>
  );
}
