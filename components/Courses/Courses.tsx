'use client';
import { useEffect, useRef, useState } from 'react';
import { FaUsers, FaClock, FaStar, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import styles from './Courses.module.css';

interface Tutor {
    name: string;
}
interface Course {
    id: number;
    title: string;
    tutor: Tutor;
    image_optimized_url: string;
    learners: number;
    reviews_average: number | null;
    reviews_count: number;
    video_duration: number;
}
interface Props {
    title: string;
    apiUrl: string;
}

const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    const hoursPart = hours > 0 ? `${hours}س ` : '';
    const minutesPart = mins > 0 ? `${mins}د` : '';
    return `${hoursPart}${minutesPart}`.trim();
};

export default function Courses({ title, apiUrl }: Props) {
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState(true);
    const [canScrollLeft, setCanScrollLeft] = useState(true);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const res = await fetch(apiUrl);
                const data = await res.json();
                setCourses(data.data);
            } catch (err) {
                console.error('خطأ في تحميل الكورسات:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchCourses();
    }, [apiUrl]);

    const checkScroll = () => {
        const container = scrollRef.current;
        if (!container) return;
        // setCanScrollLeft(container.scrollLeft > 0);
        // setCanScrollRight(container.scrollLeft + container.clientWidth < container.scrollWidth);
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

    const scroll = (direction: 'left' | 'right') => {
        const container = scrollRef.current;
        if (!container) return;
        const scrollAmount = container.offsetWidth / 1.2;
        container.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth',
        });
    };

    return (
        <section className={`py-5 text-end position-relative marginInlineStart`}>
            <div className="d-flex justify-content-between align-items-center mb-4">
               <h2 className="text-light fw-bold m-0">
  {title.split(' ').map((word, index) => {
    if (index === 0) {
      return <span key={index} className="text-light">{word} </span>;
    } else {
      return <span key={index} className="text-danger">{word} </span>;
    }
  })}
</h2>

                <div className="d-flex justify-content-between align-items-center">
                    <p className="text-light fw-bold fs-4 m-0">المزيد</p>
                    <img src="/images/arrowRightWhite.png" alt="" />
                </div>
            </div>

            {loading ? (
                <p className="text-light">جارٍ التحميل...</p>
            ) : (
                <div className="position-relative">
                    {/* arrows */}
                    {canScrollRight && (
                        <button
                            onClick={() => scroll('right')}
                            className="btn btn-dark position-absolute top-0 end-0 z-3"
                            style={{ transform: 'translateY(-50%)', marginTop: '100px' , borderRadius:'50px'}}
                        >
                            <FaArrowRight />
                        </button>
                    )}

                    {canScrollLeft && (
                        <button
                            onClick={() => scroll('left')}
                            className="btn btn-dark position-absolute top-0 start-0 z-3"
                            style={{ transform: 'translateY(-50%)', marginTop: '100px' , borderRadius:'50px' }}
                        >
                            <FaArrowLeft />
                        </button>
                    )}

                    {/* cards */}
                    <div
                        ref={scrollRef}
                        className={`d-flex overflow-auto ${styles.hideScrollbar}`}
                        style={{ scrollBehavior: 'smooth'}}
                    >
                        {courses.map((course) => (
                            <div
                                key={course.id}
                                className="flex-shrink-0 me-3"
                                style={{ width: '300px' }}
                            >
                                <div className="card bg-dark text-white border-0 shadow-sm h-100 position-relative">
                                    <img
                                        src={course.image_optimized_url}
                                        className="card-img-top"
                                        alt={course.title}
                                        style={{ height: '200px', objectFit: 'cover' }}
                                    />
                                    <div className={styles.mostViewed}>الأكثر مشاهدة</div>
                                    <div className="card-body">
                                        <h6 className="card-title">{course.title}</h6>
                                         <div className="position-relative">
                                             <p className="card-subtitle mb-2">{course.tutor.name}</p>
                                             <div className={styles.underLine}></div>
                                        </div>
                                        <div className="d-flex justify-content-between text-secondary small my-2">
                                            <span><FaStar className="text-warning" /> {course.reviews_average} ({course.reviews_count})</span>
                                            <span><FaClock /> {formatDuration(course.video_duration)}</span>
                                            <span><FaUsers /> {course.learners}</span>
                                        </div>
                                        <button className="btn btn-outline-light w-100 mt-2">
                                            <img src="/images/play.png" alt="play" style={{ marginInlineEnd:'8px'}} />
                                            شاهد إعلان الدورة</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
}
