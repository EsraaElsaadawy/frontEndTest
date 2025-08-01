'use client';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TadarabLogo from '../../public/images/tadarab.svg';
import ApplePay from '../../public/images/paymentIcons/applePay.svg';
import Mada from '../../public/images/paymentIcons/mada.svg';
import PayPal from '../../public/images/paymentIcons/payPal.svg';
import Knet from '../../public/images/paymentIcons/knet.svg';
import Visa from '../../public/images/paymentIcons/visa.svg';
import MasterCard from '../../public/images/paymentIcons/masterCard.svg';
import IphoneIcon from "../../public/images/iphone.svg";
import AndroidIcon from "../../public/images/android.svg";
import WhatsappIcon from "../../public/images/whatsapp.svg";
import FacebookIcon from "../../public/images/socialMedia/facebook.svg";
import InstaIcon from "../../public/images/socialMedia/insta.svg";
import LinkedinIcon from "../../public/images/socialMedia/linkedin.svg";
import SnapchatIcon from "../../public/images/socialMedia/snapchat.svg";
import TiktokIcon from "../../public/images/socialMedia/tiktok.svg";
import YoutubeIcon from "../../public/images/socialMedia/youtube.svg";
import WavingHandIcon from "../../public/images/waving-hand.svg";
import SupportIcon from "../../public/images/support.svg";

const Footer: React.FC = () => {
  return (
    <footer className="container-fluid px-4 px-lg-5 bg-dark text-white">
      <div className="row py-5 gx-5">
        <div className="col-lg-4 d-flex flex-column gap-4">
          <div>
            <div className="mb-2">
              <TadarabLogo />
            </div>
            <p className="text-white-50">منصة تدرب التعليمية للدورات الأون لاين في الوطن العربي</p>
          </div>

          <div>
            <p className="text-white-50">وسائل الدفع عبر تدرب</p>
            <div className="d-flex gap-2 flex-wrap">
              <ApplePay /><Mada /><PayPal /><Knet /><Visa /><MasterCard />
            </div>
          </div>

          <div>
            <p className="text-white-50">قريبا تطبيق تدرب</p>
            <div className="d-flex gap-2 align-items-center">
              <p className="mb-0">على الأيفون و الأندرويد</p>
              <IphoneIcon /><AndroidIcon />
            </div>
          </div>
        </div>

        <div className="col-lg-5 row">
          <div className="col-md-6 mb-4">
            <p className="text-white-50 mb-3">روابط هامة</p>
            <ul className="list-unstyled">
              <li><a href="/subscription" className="text-white">تدرب بلا حدود</a></li>
              <li><a href="/courses" className="text-white">الدورات التدريبية</a></li>
              <li><a href="/free" className="text-white">الدورات المجانية</a></li>
              <li><a href="/trainers" className="text-white">المدربين</a></li>
              <li><a href="/blog" className="text-white">المدونة</a></li>
            </ul>
          </div>

          <div className="col-md-6 mb-4">
            <p className="text-white-50 mb-3">عن تدرب</p>
            <ul className="list-unstyled">
              <li><a className="text-white">انضم كمدرب</a></li>
              <li><a className="text-white">الشروط و الأحكام</a></li>
              <li><a className="text-white">الشروط و الأحكام للمدرب</a></li>
              <li><a className="text-white">سياسات الخصوصية</a></li>
              <li><a className="text-white">سياسة ملفات تعريف الارتباط</a></li>
            </ul>
          </div>
        </div>

        <div className="col-lg-3 bg-opacity-10 bg-white p-4 rounded-4 d-flex flex-column gap-3">
          <div className="d-flex gap-3">
            <SupportIcon />
            <div className="d-flex flex-column gap-2">
              <div className="bg-white text-black px-3 py-2 rounded-pill">
                <span className="fw-semibold small">أهلًا بك <WavingHandIcon /></span>
              </div>
              <div className="bg-white text-black px-3 py-2 rounded-pill">
                <span className="fw-semibold small">هل لديك سؤال؟</span>
              </div>
            </div>
          </div>
          <p className="mb-0">تحتاج مساعدة أو استفسار؟</p>
          <a target="_blank" className="btn btn-outline-light d-flex gap-2 align-items-center">
            <WhatsappIcon /> <span>تواصل معنا</span>
          </a>
        </div>
      </div>

      <div className="border-top border-white border-opacity-25 py-3 d-flex flex-column flex-md-row justify-content-between align-items-center">
        <p className="mb-2 mb-md-0 text-white-50">جميع الحقوق محفوظة. منصة تدرب. © 2025</p>
        <div className="d-flex gap-3">
          <a href="https://www.facebook.com/tadarabonline/?locale=ar_AR" target="_blank" rel="noreferrer"><FacebookIcon /></a>
          <a href="https://www.instagram.com/tadarab/?hl=en" target="_blank" rel="noreferrer"><InstaIcon /></a>
          <a href="https://www.tiktok.com/@tadarab" target="_blank" rel="noreferrer"><TiktokIcon /></a>
          <a href="" target="_blank" rel="noreferrer"><SnapchatIcon /></a>
          <a href="https://kw.linkedin.com/company/tadarab" target="_blank" rel="noreferrer"><LinkedinIcon /></a>
          <a href="https://www.youtube.com/@Tadarab" target="_blank" rel="noreferrer"><YoutubeIcon /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
