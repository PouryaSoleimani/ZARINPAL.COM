const Social = () => {
    return (
        <div>
            <div className="social--container">
                <img className="social--img" src="Images/Social--img.svg" />
                <div className="social--content">
                    <h3 className="social--content__header1">زرین‌لینک</h3>
                    <h4 className="social--content__header2">پرداخت در شبکه‌های اجتماعی</h4>
                    <p className="social--content__text">زرین‌لینک با مدیریت فرآیند فروش به روشی هوشمندانه و سریع، باعث افزایش
                        فروش
                        محصولات و خدمات، از طریق شبکه‌های اجتماعی یا
                        وب‌سایت می‌شود.</p>
                    <div className="social--content__btn__wrapper">
                        <button className="social--content__btn">ساخت زرین لینک</button>
                        <a href="#" className="social--content__link">بیش تر بدانید
                            <img className="social--content__arrow" src="Images/arrow-left.svg" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Social