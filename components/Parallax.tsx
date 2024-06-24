//^ PARALLAX
const Parallax = () => {
  return (
    <div>
      <div className="parallax__container">
        <div className="parallax__main">
          <div className="parallax__content">
            <h2>بیش از ۱۳ سال
              <h2>انتخاب
                مطمئنِ
                کسب
                و
                کارهای
                آنلاین</h2>
            </h2>
            <p>
              زرین‌پال، اولین پرداخت‌یار پیشگام کشور، با به‌کارگیری
              سبک و استانداردهای جدید در ارائه‌ی خدمات درگاه پرداخت
              اینترنتی، سرویس‌های متنوعی در حوزه‌ی پرداخت الکترونیک را
              برای کسب و کارها ارائه کرده است؛ با این هدف که در افزایش
              سهم تجارت الکترونیکی در تولید ناخالص ملی و کمک به رشد و
              توسعه‌ی کسب‌وکارها، نقش سازنده‌‌ای ایفا کند.
            </p>
            <a className="parallax__signup__bottom">ثبت نام</a>
            <a className="parallax__login__bottom">ورود</a>
          </div>
          <img src="/src/assets/home.svg" className="parallax__img" />
        </div>
        <div className="parallax-arrow">
          <img src="/src/assets/Parallax__bottom--arrow.svg" alt="" className="parallax-arrow__bg" />
          <img src="/src/assets/chevron__down.svg" alt="" className="parallax-arrow__chevron" />
        </div>
      </div>
    </div>
  )
}

export default Parallax