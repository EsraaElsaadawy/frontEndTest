'use client';
import React, { useEffect, useState } from 'react';
import { FaLaptop } from 'react-icons/fa';
import styles from './CourseCategories.module.css';
import { JSX } from 'react/jsx-runtime';

interface Category {
  title: string;
  icon: JSX.Element;
  id: number;
}

const CourseCategories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch('https://staging-api.tadarab.com/api/v1/public/topics?filters[parent]=[null]')
      .then((response) => response.json())
      .then((data) => {
        const fetchedCategories: Category[] = data.data.map((category: any) => ({
          title: category.title,
          icon: <FaLaptop />,
          id: category.id
        }));
        setCategories(fetchedCategories);
      })
      .catch((error) => console.error('Error fetching data: ', error));
  }, []);

  return (
    <section className={`marginInlineStart ${styles.categoriesSection} py-5`} dir="rtl">
      <div className="p-0 ms-0">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="text-light fw-bold m-0">
            أقسام <span className="text-danger">الدورات</span>
          </h2>
          <div className="d-flex justify-content-between align-items-center">
            <p className="text-light fw-bold fs-4 m-0">جميع الدورات</p>
            <img src="/images/arrowRightWhite.png" alt="" />
          </div>
        </div>

        <div className={`${styles.scrollContainer}`}>
          {categories.map((category) => (
            <div key={category.id}>
              <div className={`${styles.categoryCard} text-center d-flex justify-content-between align-items-center`}>
                <div className={styles.iconContainer}>{category.icon}</div>
                <h5>{category.title}</h5>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default CourseCategories;
