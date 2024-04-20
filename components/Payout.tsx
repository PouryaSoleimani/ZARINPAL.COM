

const Payout = () => {
    return (
        <div>
            <div className="payout--container">
                <img className="payout--img" src="Images/Payout--img.svg" />
                    <div className="payout--content">
                        <div className="payout--content__header1">تسهیم</div>
                        <div className="payout--content__header2">درگاه پرداخت اشتراکی</div>
                        <div className="payout--content__text">تسهیم بهترین روش برای مدیریت مالی کسب‌ و کارهای شراکتی است که به
                            واسطه‌ی
                            آن، درآمد حاصل از فروش محصولات یا خدمات، در
                            سهم‌های ثابت یا متغیر میان شرکای تجاری تقسیم شده و به صورت جداگانه به حساب هر شخص واریز می‌‌شود.
                            <br/>
                        </div>
                        <div className="payout--content__btn__wrapper">
                            <button className="payout--content__btn">درخواست فعال سازی تسهیم</button>

                            <a href="#" className="payout--content__link">بیش تر بدانید
                                <img src="Images/arrow-left.svg" className="payout--content__arrow"/>
                            </a>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Payout