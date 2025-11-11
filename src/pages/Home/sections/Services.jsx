const services = [
    { id: 1, img: process.env.PUBLIC_URL + '/images/home/services-1.png', title: '剪髮設計', desc: '從經典款式到時尚新造型的個性化剪裁' },
    { id: 2, img: process.env.PUBLIC_URL + '/images/home/services-2.png', title: '染髮服務', desc: '使用優質染劑，提供多樣髮色選擇' },
    { id: 3, img: process.env.PUBLIC_URL + '/images/home/services-3.png', title: '燙髮/髮根燙', desc: '打造多樣髮型效果，為您帶來持久的捲髮或直髮造型' },
    { id: 4, img: process.env.PUBLIC_URL + '/images/home/services-4.png', title: '療護護髮', desc: '專業的頭髮護理與造型，提升髮質健康' },

];

export default function ServicesSection() {
    return (
        <section className="py-5 services">
            <div className="container">
                <span className="typo-body" style={{ color: 'var(--color-surface-1)' }}>Services</span>
                <h2 className="typo-headline" style={{ color: 'var(--color-primary-1)' }}>服務介紹</h2>

                {/* 這個容器在 ≥1920 會被轉成 2 欄 Grid；其餘維持直排 */}
                <div className="stagger-wrap">
                    {services.map((s) => (
                        <article key={s.id} className="service position-relative">
                            <img src={s.img} alt={s.title} className="service-img img-fluid w-100" />
                            <div className="note card shadow-sm rounded-0">
                                <div className="card-body d-flex flex-column justify-content-between text-center p-4">
                                    <h5 className="card-title typo-title" style={{ color: 'var(--color-primary-3)', fontWeight: 600 }}>{s.title}</h5>
                                    <p className="card-text mb-0 typo-body" style={{ color: 'var(--color-primary-1)' }}>{s.desc}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}