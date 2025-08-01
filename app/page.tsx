'use client';

import TopSection from "../components/TopSection";
import Navbar from "../components/Navbar";
import Courses from "@/components/Courses";
import UpcomingCourseCard from "@/components/UpcomingCourseCard";
import CourseCategories from "@/components/CourseCategories";
import Subscribe from "../components/Subscribe";
import StatsSection from "../components/StatsSection";
import Partners from "../components/Partners";
import HelpSection from "../components/HelpSection";
import 'bootstrap-icons/font/bootstrap-icons.css';
import TestimonialsSection from "@/components/TestimonialsSection";
import TutorsSection from "@/components/Tutor/TutorsSection";
import TopicsBar from "@/components/TopicsBar/TopicsBar";

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
    </main>
  );
}