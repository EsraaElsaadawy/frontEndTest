'use client';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import styles from './Navbar.module.css';
import { useEffect } from 'react';

export default function Navbar() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const menuItems = document.querySelectorAll('.menuItem');
      console.log("menuItems found after timeout:", menuItems.length);

      const handleHover = (e: Event) => {
        const target = e.currentTarget as HTMLElement;
        document.querySelectorAll(`.${styles.nestedDropdown}`).forEach((el) => {
          el.classList.remove(`show`);
        });

        const nested = target.querySelector(`.${styles.nestedDropdown}`);
        if (nested) nested.classList.add(`show`);
      };

      menuItems.forEach((item) => {
        item.addEventListener('mouseenter', handleHover);
      });

      return () => {
        menuItems.forEach((item) => {
          item.removeEventListener('mouseenter', handleHover);
        });
      };
    }, 500);

    return () => clearTimeout(timer);
  }, []);



  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbarBoxContainer}`}>
      <div className={styles.navbarAd}>
        <p>خصم 80% بمناسبة شهر رمضان الكريم لفترة محدودة</p>
        <button>اشترك الآن</button>
      </div>
      <div className={`d-flex align-items-center justify-content-between ${styles.navbarBox}`}>
        <img src="/images/menu.png" alt="menu" className='xlHide lgHide mdHide' />
        <div className='d-flex align-items-center justify-content-end'>
          <img src="/images/tadarabLogo.png" width={88} alt="tadarabLogo" />
          <ul className="navbar-nav" >
            <li className="nav-item dropdown">
              <a
                className={`nav-link dropdown-toggle ${styles.drobDownTitle}`} href="#"
                id="categoriesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                استكشف الأقسام
                <img src="/images/arrowDown.png" alt="arrowDown" />
              </a>

              <ul
                className={`dropdown-menu ${styles.drobDownMenu}`}
                aria-labelledby="categoriesDropdown"
                data-bs-auto-close="outside"
              >
                <li className="dropdown">
                  <a className={`dropdown-item fw-bold ${styles.drobDownItemTitle}`} href="#" data-bs-toggle="dropdown">أقسام التعلم</a>
                </li>

                <li className={`dropend menuItem`}>
                  <a className={`dropdown-item dropdown-toggle ${styles.drobDownItem}`} href="#" data-bs-toggle="dropdown">تربية الأبناء</a>
                  <ul className={`dropdown-menu ${styles.nestedDropdown}`}>
                    <li><a className={`dropdown-item fw-bold ${styles.drobDownItem} ${styles.noArrow}`} href="#">أهم مواضيع تربية الأبناء</a></li>
                    <li><a className={`dropdown-item ${styles.drobDownItem} ${styles.noArrow}`}
                      href="#">تربية الأطفال</a></li>
                    <li><a className={`dropdown-item ${styles.drobDownItem} ${styles.noArrow}`}
                      href="#">التربية في سن المراهقة</a></li>
                    <li><a className={`dropdown-item ${styles.drobDownItem} ${styles.noArrow}`}
                      href="#">التربية الجنسية للأطفال</a></li>
                    <li><a className={`dropdown-item ${styles.drobDownItem} ${styles.noArrow}`}
                      href="#">تحسين سلوكيات الطفل</a></li>
                    <li><a className={`dropdown-item ${styles.drobDownItem} ${styles.noArrow}`}
                      href="#">التربية الحديثة</a></li>
                  </ul>
                </li>

                <li className={`dropend menuItem`}>
                  <a className={`dropdown-item dropdown-toggle ${styles.drobDownItem}`} href="#" data-bs-toggle="dropdown">علوم الحاسب والتكنولوجيا</a>
                  <ul className={`dropdown-menu ${styles.nestedDropdown}`}>
                    <li><a className={`dropdown-item ${styles.drobDownItem} ${styles.noArrow}`}
                      href="#">برمجة</a></li>
                    <li><a className={`dropdown-item ${styles.drobDownItem} ${styles.noArrow}`}
                      href="#">شبكات</a></li>
                    <li><a className={`dropdown-item ${styles.drobDownItem} ${styles.noArrow}`}
                      href="#">ذكاء اصطناعي</a></li>
                  </ul>
                </li>

                <li className={`dropend menuItem`}>
                  <a className={`dropdown-item dropdown-toggle ${styles.drobDownItem}`} href="#" data-bs-toggle="dropdown">الفنون والمهارات</a>
                  <ul className={`dropdown-menu ${styles.nestedDropdown}`}>
                    <li><a className={`dropdown-item ${styles.drobDownItem} ${styles.noArrow}`}
                      href="#">الرسم</a></li>
                    <li><a className={`dropdown-item ${styles.drobDownItem} ${styles.noArrow}`}
                      href="#">الموسيقى</a></li>
                    <li><a className={`dropdown-item ${styles.drobDownItem} ${styles.noArrow}`}
                      href="#">الخط العربي</a></li>
                  </ul>
                </li>

                <li className={`dropend menuItem`}>
                  <a className={`dropdown-item dropdown-toggle ${styles.drobDownItem}`} href="#" data-bs-toggle="dropdown">تعلم اللغات</a>
                  <ul className={`dropdown-menu ${styles.nestedDropdown}`}>
                    <li><a className={`dropdown-item ${styles.drobDownItem} ${styles.noArrow}`}
                      href="#">الإنجليزية</a></li>
                    <li><a className={`dropdown-item ${styles.drobDownItem} ${styles.noArrow}`}
                      href="#">الفرنسية</a></li>
                    <li><a className={`dropdown-item ${styles.drobDownItem} ${styles.noArrow}`}
                      href="#">الإسبانية</a></li>
                  </ul>
                </li>

                <li className={`dropend menuItem`}>
                  <a className={`dropdown-item dropdown-toggle ${styles.drobDownItem}`} href="#" data-bs-toggle="dropdown">ديكور المنزل</a>
                  <ul className={`dropdown-menu ${styles.nestedDropdown}`}>
                    <li><a className={`dropdown-item ${styles.drobDownItem} ${styles.noArrow}`}
                      href="#">تنسيق الألوان</a></li>
                    <li><a className={`dropdown-item ${styles.drobDownItem} ${styles.noArrow}`}
                      href="#">تصميم داخلي</a></li>
                    <li><a className={`dropdown-item ${styles.drobDownItem} ${styles.noArrow}`}
                      href="#">أفكار DIY</a></li>
                  </ul>
                </li>

                <li className={`dropend menuItem`}>
                  <a className={`dropdown-item dropdown-toggle ${styles.drobDownItem}`} href="#" data-bs-toggle="dropdown">الأقتصاد والأعمال</a>
                  <ul className={`dropdown-menu ${styles.nestedDropdown}`}>
                    <li><a className={`dropdown-item ${styles.drobDownItem} ${styles.noArrow}`}
                      href="#">ريادة الأعمال</a></li>
                    <li><a className={`dropdown-item ${styles.drobDownItem} ${styles.noArrow}`}
                      href="#">إدارة المشاريع</a></li>
                    <li><a className={`dropdown-item ${styles.drobDownItem} ${styles.noArrow}`}
                      href="#">التسويق الرقمي</a></li>
                  </ul>
                </li>

                <li className={`dropend menuItem`}>
                  <a className={`dropdown-item dropdown-toggle ${styles.drobDownItem}`} href="#" data-bs-toggle="dropdown">تربية الأبناء</a>
                  <ul className={`dropdown-menu ${styles.nestedDropdown}`}>
                    <li><a className={`dropdown-item ${styles.drobDownItem} ${styles.noArrow}`}
                      href="#">تنمية المهارات</a></li>
                    <li><a className={`dropdown-item ${styles.drobDownItem} ${styles.noArrow}`}
                      href="#">سلوك الطفل</a></li>
                  </ul>
                </li>

                <li className={`dropend menuItem`}>
                  <a className={`dropdown-item dropdown-toggle ${styles.drobDownItem}`} href="#" data-bs-toggle="dropdown">علوم الحاسب والتكنولوجيا</a>
                  <ul className={`dropdown-menu ${styles.nestedDropdown}`}>
                    <li><a className={`dropdown-item ${styles.drobDownItem} ${styles.noArrow}`}
                      href="#">الأمن السيبراني</a></li>
                    <li><a className={`dropdown-item ${styles.drobDownItem} ${styles.noArrow}`}
                      href="#">تحليل البيانات</a></li>
                  </ul>
                </li>

                <li className={`dropend menuItem`}>
                  <a className={`dropdown-item dropdown-toggle ${styles.drobDownItem}`} href="#" data-bs-toggle="dropdown">الفنون والمهارات</a>
                  <ul className={`dropdown-menu ${styles.nestedDropdown}`}>
                    <li><a className={`dropdown-item ${styles.drobDownItem} ${styles.noArrow}`}
                      href="#">الخط</a></li>
                    <li><a className={`dropdown-item ${styles.drobDownItem} ${styles.noArrow}`}
                      href="#">الحرف اليدوية</a></li>
                  </ul>
                </li>

                <li className={`dropend menuItem`}>
                  <a className={`dropdown-item dropdown-toggle ${styles.drobDownItem}`} href="#" data-bs-toggle="dropdown">تعلم اللغات</a>
                  <ul className={`dropdown-menu ${styles.nestedDropdown}`}>
                    <li><a className={`dropdown-item ${styles.drobDownItem} ${styles.noArrow}`}
                      href="#">العربية</a></li>
                    <li><a className={`dropdown-item ${styles.drobDownItem} ${styles.noArrow}`}
                      href="#">الصينية</a></li>
                  </ul>
                </li>

                <li className={`dropend menuItem`}>
                  <a className={`dropdown-item dropdown-toggle ${styles.drobDownItem}`} href="#" data-bs-toggle="dropdown">ديكور المنزل</a>
                  <ul className={`dropdown-menu ${styles.nestedDropdown}`}>
                    <li><a className={`dropdown-item ${styles.drobDownItem} ${styles.noArrow}`}
                      href="#">إضاءة</a></li>
                    <li><a className={`dropdown-item ${styles.drobDownItem} ${styles.noArrow}`}
                      href="#">أثاث</a></li>
                  </ul>
                </li>

                <li className={`dropend menuItem`}>
                  <a className={`dropdown-item dropdown-toggle ${styles.drobDownItem}`} href="#" data-bs-toggle="dropdown">الأقتصاد والأعمال</a>
                  <ul className={`dropdown-menu ${styles.nestedDropdown}`}>
                    <li><a className={`dropdown-item ${styles.drobDownItem} ${styles.noArrow}`}
                      href="#">التمويل الشخصي</a></li>
                    <li><a className={`dropdown-item ${styles.drobDownItem} ${styles.noArrow}`}
                      href="#">إدارة الوقت</a></li>
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
          <button className={styles.navbarButton} style={{ marginInlineStart: '24px' }}>انضم كمدرب</button>
          <button className={styles.navbarButton} style={{ marginInlineStart: '12px' }}>تدرب للأعمال</button>
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
          <img src="/images/marketIcon.png" alt="" style={{ marginInlineStart: '12px' }} />
        </div>
      </div>
    </nav>
  );
}

/* NOTE: replace the ...nav content with your full nav content */