const ZarinCard = () => {
    return (
        <div>
            <div className="zarincard--container">
                <img className="zarincard--img" src="/public/Zarincard--img.svg" />
                <div className="zarincard--content">
                    <div className="zarincard--content__header1">زرین‌کارت</div>

                    <div className="zarincard--content__header2">طلایی‌ترین
                        کارتِ
                        بانکی</div>

                    <p className="zarincard--content__text">زرین‌‌کارت یک کارتِ بانکی عضو شبکه‌‌ی شتاب و متصل به یک حساب بانکی
                        است
                        که از تمام ویژگی‌‌ها و امکانات یک حساب بانکی تمام
                        عیار برخوردار است. زرین‌‌کارت این امکان را برای کاربران خود فراهم می‌‌سازد تا از تعرفه‌‌ی کارمزد
                        کم‌‌تر
                        در روزهای عادی و
                        کارمزد رایگان در سه‌‌شنبه‌‌های طلاییِ زرین‌‌پال بهره‌‌مند شوند.</p>

                    <div className="zarincard--content__btn__wrapper">
                        <button className="zarincard--content__btn">درخواست زرین کارت</button>
                        <a className="zarincard--content__link">
                            بیش تر بدانید
                            <img src="/public/arrow-left.svg" className="zarincard--content__arrow" />
                        </a>
                    </div>


                </div>


            </div>
        </div>
    )
}

export default ZarinCard