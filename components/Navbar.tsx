'use client';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbarBoxContainer}`}>
        <div className={styles.navbarAd}>
            <p>خصم 80% بمناسبة شهر رمضان الكريم لفترة محدودة</p>
            <button>اشترك الآن</button>
        </div>
        <div className={`d-flex align-items-center justify-content-between ${styles.navbarBox}`}>
          <img src="/images/menu.png" alt="menu" className='xlHide lgHide mdHide' />
          <div className='d-flex align-items-center justify-content-end'>
             <img src="/images/tadarabLogo.png" width={88} alt="tadarabLogo"/>
            <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className={`nav-link dropdown-toggle ${styles.drobDownTitle}`} href="#"
                    id="categoriesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    استكشف الأقسام
                    <img src="/images/arrowDown.png" alt="arrowDown" />
                  </a>
              
                    <ul className={`dropdown-menu ${styles.drobDownMenu}`} aria-labelledby="categoriesDropdown">

                        <li className="dropdown">
                            <a className={`dropdown-item fw-bold ${styles.drobDownItemTitle}`} href="#" data-bs-toggle="dropdown">أقسام التعلم</a>
                        </li>
                
                        <li className="dropend">
        <a className={`dropdown-item dropdown-toggle ${styles.drobDownItem}`} href="#" data-bs-toggle="dropdown">تربية الأبناء</a>
        <ul className="dropdown-menu">
        <li><a className="dropdown-item fw-bold" href="#">أهم مواضيع تربية الأبناء</a></li>
          <li><a className="dropdown-item" href="#">تربية الأطفال</a></li>
          <li><a className="dropdown-item" href="#">التربية في سن المراهقة</a></li>
          <li><a className="dropdown-item" href="#">التربية الجنسية للأطفال</a></li>
          <li><a className="dropdown-item" href="#">تحسين سلوكيات الطفل</a></li>
          <li><a className="dropdown-item" href="#">التربية الحديثة</a></li>
        </ul>
                        </li>
                
                        <li className="dropend">
        <a className={`dropdown-item dropdown-toggle ${styles.drobDownItem}`} href="#" data-bs-toggle="dropdown">علوم الحاسب والتكنولوجيا</a>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">برمجة</a></li>
          <li><a className="dropdown-item" href="#">شبكات</a></li>
          <li><a className="dropdown-item" href="#">ذكاء اصطناعي</a></li>
        </ul>
                        </li>
                
                        <li className="dropend">
        <a className={`dropdown-item dropdown-toggle ${styles.drobDownItem}`} href="#" data-bs-toggle="dropdown">الفنون والمهارات</a>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">الرسم</a></li>
          <li><a className="dropdown-item" href="#">الموسيقى</a></li>
          <li><a className="dropdown-item" href="#">الخط العربي</a></li>
        </ul>
                        </li>
                
                        <li className="dropend">
        <a className={`dropdown-item dropdown-toggle ${styles.drobDownItem}`} href="#" data-bs-toggle="dropdown">تعلم اللغات</a>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">الإنجليزية</a></li>
          <li><a className="dropdown-item" href="#">الفرنسية</a></li>
          <li><a className="dropdown-item" href="#">الإسبانية</a></li>
        </ul>
                        </li>
                
                        <li className="dropend">
        <a className={`dropdown-item dropdown-toggle ${styles.drobDownItem}`} href="#" data-bs-toggle="dropdown">ديكور المنزل</a>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">تنسيق الألوان</a></li>
          <li><a className="dropdown-item" href="#">تصميم داخلي</a></li>
          <li><a className="dropdown-item" href="#">أفكار DIY</a></li>
        </ul>
                        </li>
                
                        <li className="dropend">
        <a className={`dropdown-item dropdown-toggle ${styles.drobDownItem}`} href="#" data-bs-toggle="dropdown">الأقتصاد والأعمال</a>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">ريادة الأعمال</a></li>
          <li><a className="dropdown-item" href="#">إدارة المشاريع</a></li>
          <li><a className="dropdown-item" href="#">التسويق الرقمي</a></li>
        </ul>
                        </li>
                
                        <li className="dropend">
        <a className={`dropdown-item dropdown-toggle ${styles.drobDownItem}`} href="#" data-bs-toggle="dropdown">تربية الأبناء</a>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">تنمية المهارات</a></li>
          <li><a className="dropdown-item" href="#">سلوك الطفل</a></li>
        </ul>
                        </li>
                
                        <li className="dropend">
        <a className={`dropdown-item dropdown-toggle ${styles.drobDownItem}`} href="#" data-bs-toggle="dropdown">علوم الحاسب والتكنولوجيا</a>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">الأمن السيبراني</a></li>
          <li><a className="dropdown-item" href="#">تحليل البيانات</a></li>
        </ul>
                        </li>
                
                        <li className="dropend">
        <a className={`dropdown-item dropdown-toggle ${styles.drobDownItem}`} href="#" data-bs-toggle="dropdown">الفنون والمهارات</a>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">الخط</a></li>
          <li><a className="dropdown-item" href="#">الحرف اليدوية</a></li>
        </ul>
                        </li>
                
                        <li className="dropend">
        <a className={`dropdown-item dropdown-toggle ${styles.drobDownItem}`} href="#" data-bs-toggle="dropdown">تعلم اللغات</a>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">العربية</a></li>
          <li><a className="dropdown-item" href="#">الصينية</a></li>
        </ul>
                        </li>
                
                        <li className="dropend">
        <a className={`dropdown-item dropdown-toggle ${styles.drobDownItem}`} href="#" data-bs-toggle="dropdown">ديكور المنزل</a>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">إضاءة</a></li>
          <li><a className="dropdown-item" href="#">أثاث</a></li>
        </ul>
                        </li>
                
                        <li className="dropend">
                           <a className={`dropdown-item dropdown-toggle ${styles.drobDownItem}`} href="#" data-bs-toggle="dropdown">الأقتصاد والأعمال</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">التمويل الشخصي</a></li>
                                    <li><a className="dropdown-item" href="#">إدارة الوقت</a></li>
                                </ul>
                        </li>
                
                        <li>
                           <a className={`dropdown-item ${styles.drobDownButton}`} href="#">
                               استكشف جميع الدورات
                          </a>
                        </li>
                    </ul>
                </li>
            </ul>
            </div>
            <div className={`d-flex align-items-center justify-content-end ${styles.flexGrow}`}>
                   <form className={`d-flex align-items-center justify-content-center ${styles.navbarForm} ${styles.flexGrow}`} role="search">
                     <input
                       className={`form-control ${styles.navbarSearch}`}
                       type="search"
                       placeholder="ماذا تريد ان تتعلم اليوم؟"
                       aria-label="Search"
                     />
                     
                     <img src="/images/searchIcon.png" alt="searchIcon" className={styles.searchIcon} />
                   </form>
                    <button className={styles.navbarButton} style={{ marginInlineStart:'24px'}}>انضم كمدرب</button>
                    <button className={styles.navbarButton} style={{ marginInlineStart:'12px'}}>تدرب للأعمال</button>
                    <button className={styles.noLimits}>
                        <img src="/images/AiIcon.png" alt="" />
                        <p>تدرب بلا حدود</p>
                    </button>
                    <button className={styles.login}>
                        <p>تسجيل الدخول</p>
                    </button>
                    {/* <button className={styles.videos}>
                        <img src="/images/videoIcon.png" alt="" />
                        <p>دوراتي</p>
                    </button> */}
                    
                    {/* <img src="/images/profilePicIcon.png" alt="profilePicture" style={{ marginInlineStart:'16px'}} /> */}
                    <img src="/images/marketIcon.png" alt="" style={{ marginInlineStart:'12px'}} />
            </div>
        </div>
    </nav>
  );
}