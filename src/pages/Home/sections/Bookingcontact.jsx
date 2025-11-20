import ContactForm from "../../../components/ContactForm"

export default function Bookingcontact() {
    return (<>
        <section  id="contact" className="bookingcontact my-2">
            <div className="container row align-items-center">
                <div className="bookingcontact__booking col-12 col-md-8 col-lg-6 mb-3">
                    <div>
                        <span className="typo-body" style={{ color: 'var(--color-surface-1)' }}>Booking</span>
                    <h2 className="typo-headline" style={{ color: 'var(--color-primary-1)' }}>預約資訊</h2>
                    </div>
                    <div>
                        <ContactForm />
                    </div>
                     </div>
                <div className="bookingcontact__contact col-12 col-md-4 col-lg-6 mb-4">
                    <div className="d-flex flex-md-column justify-content-md-center align-items-center gap-2 gap-md-5">
                        <div>
                            <span className="typo-body" style={{ color: 'var(--color-surface-1)' }}>Contact</span>
                            <h2 className="typo-headline" style={{ color: 'var(--color-primary-1)' }}>聯絡我們</h2>
                        </div>
                        <div className="d-flex align-items-center gap-4 ms-3">
                            <a className="" href="/">
                                <img
                                    src={process.env.PUBLIC_URL + '/images/icons/facebook.png'}
                                    alt="facebook Logo"
                                    className="bookingcontact__icon"
                                />
                            </a>
                           <a className="" href="/">
                                <img
                                    src={process.env.PUBLIC_URL + '/images/icons/ins.png'}
                                    alt="ins Logo"
                                    className="bookingcontact__icon"
                                />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </>)
}