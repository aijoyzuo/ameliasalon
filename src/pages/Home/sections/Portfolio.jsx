export default function Portfolio() {
    return (<>
        <section className="portfolio">
            <div className="container">
                <div>
                    <span className="typo-body" style={{ color: 'var(--color-surface-1)' }}>Portfolio</span>
                    <h2 className="typo-headline" style={{ color: 'var(--color-primary-1)' }}>作品集</h2>
                </div>
            </div>
            <div className="row g-0 portfolio__row-nogutter align-items-center justify-content-end">
                <div className="col-4">
                    <div className="portfolio__title">
                        <span className="typo-title" style={{ color: 'var(--color-primary-2)' }}>Portfolio</span>
                        <hr className="portfolio__hr" />
                    </div>
                </div>
                <div className="col-8">
                    <div className="portfolio__image-scroll-container d-flex flex-nowrap overflow-auto">
                        <div><img src={process.env.PUBLIC_URL + '/images/home/work1-1.png'} className="portfolio__img" alt="髮型作品" /></div>
                        <div><img src={process.env.PUBLIC_URL + '/images/home/work1-2.png'} className="portfolio__img" alt="髮型作品" /></div>
                        <div><img src={process.env.PUBLIC_URL + '/images/home/work1-3.png'} className="portfolio__img" alt="髮型作品" /></div>
                    </div>
                </div>
            </div>
        </section>


    </>)
}