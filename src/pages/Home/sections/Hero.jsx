export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="row align-items-center hero__intro">
          <div className="col-6 col-lg-5 d-flex">
            <div className="d-flex flex-column gap-md-3 mt-4">
              <h1 className="mb-0 typo-display text-center" style={{ color: 'var(--color-primary-3)' }}>
                Amelia Salon
              </h1>
              <span className="typo-title hero__intro__span" style={{ color: 'var(--color-primary-3)' }}>
                陪你找到最真實的自己，讓你的美麗不止於表面，而是從心綻放。
              </span>
              <div className="mt-2 mt-md-4 pt-md-4 text-center">
                <button className="btn buttonCostum typo-headline">
                  立即預約
                </button>
              </div>
            </div>
          </div>

          <div className="col-6 col-lg-7">
            <div className="hero__portfolio">
              <img
                src={process.env.PUBLIC_URL +'/images/home/hero-1.png'}
                alt="hero-1"
                className="hero__photo hero__photo--back"
              />
              <img
                src={process.env.PUBLIC_URL +'/images/home/hero-2.png'}
                alt="hero-2"
                className="hero__photo hero__photo--front"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}
