// pages/.../About.jsx
import InteriorCarousel from "../../../components/InteriorCarousel";

export default function About() {
  return (
    <section id="about">
      {/* 原本的 About Us 區塊保留 */}
      <div className="about">
        <div className="container">
          <div className="about__text">
            <div className="row d-flex align-items-center justiy-content-center">
              <div className="col-12 col-md-3">
                <span className="typo-body" style={{ color: 'var(--color-surface-1)' }}>About Us</span>
                <h2 className="typo-headline" style={{ color: 'var(--color-primary-1)' }}>關於我們</h2>
              </div>
              <div className="col-12 col-md-9" style={{ color: 'var(--color-primary-2)' }}>
                <span className="typo-body">
                  每一個人都有屬於自己的美麗故事，而我們的使命就是將這個故事透過精緻的造型藝術呈現出來。
                  在這裡，髮型不僅僅是技術的展現，更是心靈的觸動，是自我表達的一部分。<br />
                  我們的空間充滿著溫暖與詩意，每一筆剪裁、每一縷髮絲，都是我們對美的獨特詮釋。
                  無論是追求經典的優雅，還是探索時尚的前衛，我們都會陪你找到最真實的自己，
                  讓你的美麗不止於表面，而是從心綻放。
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 室內環境 */}
       <div className="about__env my-3 my-lg-5 pb-3 pb-lg-5">
        <div className="about__env-inner">
          {/* 標題區：小螢幕時獨立一行，跟 container 對齊 */}
          <div className="about__env-title">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12 col-lg-3">
                  <span className="typo-body" style={{ color: 'var(--color-surface-1)' }}>Environment</span>
                  <h2 className="typo-headline" style={{ color: 'var(--color-primary-1)' }}>室內環境</h2>
                </div>
              </div>
            </div>
          </div>

          {/* Swiper 區：不包 container，方便吃滿寬度 */}
          <div className="about__env-swiper">
            <InteriorCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}
