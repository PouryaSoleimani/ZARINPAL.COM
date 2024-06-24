const Payment = () => {
  return (
    <>
      <div className="payment">
        <img src="./src/assets/Payment--img.svg" className="payment--img" />
        <div className="payment--content">
          <h4 className="payment--content__head1">درگاه پرداخت اینترنتی</h4>
          <h3 className="payment--content__head2">مهندسی شده برای رشد و فروش بیش تر</h3>
          <p className="payment--content__text">درگاه پرداخت زرین‌پال، با اتصالِ همزمان به درگاه‌های متنوع و معتبر
            بانکی(PSPها)،کاربران را به سریع‌ترین و مطمئن‌ترین
            درگاه بانکی منتقل می‌کند و به واسطه‌ی قابلیت مسیردهی هوشمند، باعث افزایش درصد تراکنش‌های موفق
            می‌شود.</p>
          <div className="payment-content__btn__wrapper">
            <button className="payment--content__btn">ساخت درگاه پرداخت</button>
            <button className="payment--content__link">بیشتر بدانید
              <img src="./src/assets/arrow-left.svg" className="payment--content__link__arrow" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Payment