const Footer = () => {
    return (
        <div>
            <section className="footer-container">
                <div className="footer--menu products">
                    <h3 className="footer--nav__menuproducts__header">محصولات</h3>
                    <ul className="footer--nav__menuproducts__list">
                        <li className="footer--nav__menuproducts__listitem"> زرین‌لینک</li>
                        <li className="footer--nav__menuproducts__listitem"> درگاه پرداخت اینترنتی</li>
                        <li className="footer--nav__menuproducts__listitem"> زرین‌کارت</li>
                        <li className="footer--nav__menuproducts__listitem"> عیان</li>
                        <li className="footer--nav__menuproducts__listitem"> استرداد وجه</li>
                        <li className="footer--nav__menuproducts__listitem"> تسویه پیش از موعد</li>
                        <li className="footer--nav__menuproducts__listitem"> تسهیم فردایی</li>
                    </ul>
                </div>
                <div className="footer--nav__menu familiarity">
                    <h3 className="footer--nav__menuproducts__header">آشنایی با زرین‌پال</h3>
                    <ul className="footer--nav__menuproducts__list">
                        <li className="footer--nav__menuproducts__listitem"> تعرفه‌ها</li>
                        <li className="footer--nav__menuproducts__listitem">درباره ما</li>
                        <li className="footer--nav__menuproducts__listitem"> سوالات متداول</li>
                        <li className="footer--nav__menuproducts__listitem"> همکاری در فروش</li>
                    </ul>
                </div>
                <div className="footer--nav__menu connection">
                    <h3 className="footer--nav__menuproducts__header">ارتباط‌ بیشتر</h3>
                    <ul className="footer--nav__menuproducts__list">
                        <li className="footer--nav__menuproducts__listitem"> تماس با ما</li>
                        <li className="footer--nav__menuproducts__listitem">قوانین و مقررات</li>
                        <li className="footer--nav__menuproducts__listitem"> حریم ‌خصوصی</li>
                    </ul>
                </div>
                <div className="footer--nav__menu sources">
                    <h3 className="footer--nav__menuproducts__header">منابع</h3>
                    <ul className="footer--nav__menuproducts__list">
                        <li className="footer--nav__menuproducts__listitem"> دریافت شماره شبا</li>
                        <li className="footer--nav__menuproducts__listitem">زرین‌بین </li>
                        <li className="footer--nav__menuproducts__listitem"> توسعه‌دهندگان</li>
                        <li className="footer--nav__menuproducts__listitem"> وبلاگ</li>
                    </ul>
                </div>
                <div className="footer--social">
                    <h4 className="footer--social__header">زرین‌پال در شبکه‌های اجتماعی:</h4>
                    <div className="footer--social__iconwrapper">
                        <a className="footer--social__link">
                            <img alt="instagram" className="footer--social__icon"
                                src="Images/Social Media Icons/instagram.svg" /></a>

                        <a className="footer--social__link">
                            <img alt="twitter" className="footer--social__icon" src="Images/Social Media Icons/twitter.svg" /></a>

                        <a className="footer--social__link">
                            <img alt="telegram" className="footer--social__icon"
                                src="Images/Social Media Icons/telegram.svg" /></a>

                        <a className="footer--social__link"> <img alt="linkedin" className="footer--social__icon" src="Images/Social Media Icons/linkedin.svg" /></a>

                        <a className="footer--social__link"> <img alt="aparat" className="footer--social__icon" src="Images/Social Media Icons/aparat.svg" /></a>
                    </div>
                    <br />
                    <img className="footer--social__elogo" src="Images/Enamad.png" />
                </div>
            </section>
        </div>
    )
}

export default Footer