export default function Portfolio() {
    return (<>
        <section  id="portfolio" className="portfolio my-5">
            <div className="container">
                <div>
                    <span className="typo-body" style={{ color: 'var(--color-surface-1)' }}>Portfolio</span>
                    <h2 className="typo-headline" style={{ color: 'var(--color-primary-1)' }}>作品集</h2>
                </div>
            </div>
            <div className="row g-0 portfolio__row-nogutter align-items-center justify-content-end">
                <div className="col-3">
                    <div className="portfolio__title">
                        <span className="typo-title" style={{ color: 'var(--color-primary-2)' }}>燙髮作品</span>
                        <hr className="portfolio__hr" />
                    </div>
                </div>
                <div className="col-9">
                    <div className="portfolio__image-scroll-container d-flex flex-nowrap overflow-auto py-2 py-md-3 py-lg-4">
                        <div><img src={process.env.PUBLIC_URL + '/images/home/work1-1.png'} className="portfolio__img" alt="燙髮作品" /></div>
                        <div><img src={process.env.PUBLIC_URL + '/images/home/work1-2.png'} className="portfolio__img" alt="燙髮作品" /></div>
                        <div><img src={process.env.PUBLIC_URL + '/images/home/work1-3.png'} className="portfolio__img" alt="燙髮作品" /></div>
                    </div>
                </div>
            </div>
            <div className="row g-0 portfolio__row-nogutter align-items-center justify-content-end justify-content-lg-center">
                <div className="col-3">
                    <div className="portfolio__title">
                        <span className="typo-title" style={{ color: 'var(--color-primary-2)' }}>染髮作品</span>
                        <hr className="portfolio__hr" />
                    </div>
                </div>
                <div className="col-8">
                    <div className="portfolio__image-scroll-container d-flex flex-nowrap overflow-auto py-2 py-md-3 py-lg-4">
                        <div><img src={process.env.PUBLIC_URL + '/images/home/work2-1.png'} className="portfolio__img" alt="染髮作品" /></div>
                        <div><img src={process.env.PUBLIC_URL + '/images/home/work2-2.png'} className="portfolio__img" alt="染髮作品" /></div>
                        <div><img src={process.env.PUBLIC_URL + '/images/home/work2-3.png'} className="portfolio__img" alt="染髮作品" /></div>
                    </div>
                </div>
            </div>
            <div className="row g-0 portfolio__row-nogutter align-items-center justify-content-end">
                <div className="col-3">
                    <div className="portfolio__title">
                        <span className="typo-title" style={{ color: 'var(--color-primary-2)' }}>剪髮作品</span>
                        <hr className="portfolio__hr" />
                    </div>
                </div>
                <div className="col-7">
                    <div className="portfolio__image-scroll-container d-flex flex-nowrap overflow-auto py-2 py-md-3 py-lg-4">
                        <div><img src={process.env.PUBLIC_URL + '/images/home/work3-1.png'} className="portfolio__img" alt="剪髮作品" /></div>
                        <div><img src={process.env.PUBLIC_URL + '/images/home/work3-2.png'} className="portfolio__img" alt="剪髮作品" /></div>
                        <div><img src={process.env.PUBLIC_URL + '/images/home/work3-3.png'} className="portfolio__img" alt="剪髮作品" /></div>
                    </div>
                </div>
            </div>
        </section>


    </>)
}