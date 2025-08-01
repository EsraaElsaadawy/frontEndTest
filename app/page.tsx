'use client';

import TopSection from "../components/TopSection/TopSection";
import Navbar from "../components/Navbar/Navbar";
import Courses from "@/components/Courses/Courses";
import UpcomingCourseCard from "@/components/UpcomingCourseCard/UpcomingCourseCard";
import CourseCategories from "@/components/CourseCategories/CourseCategories";
import Subscribe from "../components/Subscribe/Subscribe";
import StatsSection from "../components/StatsSection/StatsSection";
import Partners from "../components/Partners/Partners";
import HelpSection from "../components/HelpSection/HelpSection";
import 'bootstrap-icons/font/bootstrap-icons.css';
import TestimonialsSection from "@/components/TestimonialsSection/TestimonialsSection";
import TutorsSection from "@/components/Tutor/TutorsSection";
import TopicsBar from "@/components/TopicsBar/TopicsBar";
import FaqSection from "@/components/FaqSection/FaqSection";
import Footer from "@/components/Footer/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <TopSection />
      <TopicsBar />
      <Courses title="الدورات الأكثر مبيعاً"
        apiUrl="https://staging-api.tadarab.com/api/v1/public/courses?&page=1&per_page=10&filters[scope]=best-seller" />
      <Courses title="الدورات الجديدة"
        apiUrl="https://staging-api.tadarab.com/api/v1/public/courses?&page=1&per_page=10&filters[scope]=new" />
      <UpcomingCourseCard />
      <CourseCategories />
      <Courses title="الدورات المجانية"
        apiUrl="https://staging-api.tadarab.com/api/v1/public/courses?&page=1&per_page=10&filters[scope]=free" />
      <TestimonialsSection />
      <Subscribe />
      <StatsSection />
      <Partners />
      <TutorsSection />
      <HelpSection />
      <FaqSection/>
      <Footer/>
    </main>
  );
}