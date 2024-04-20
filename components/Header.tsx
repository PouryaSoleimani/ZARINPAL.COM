//^ HEADER STICKY


const Header = () => {
    return (
        <>
            <div className="header__sticky">
                <div className="header-sticky__img">
                    <img src="Images/header__logo.svg" />
                </div>
                <div className="header__list">
                    <ul className="header__list-main">
                        <li>محصولات <img src="./Images/chevron__down.svg" alt="" className="header__list--img" /></li>
                        <li>تعرفه ها</li>
                        <li>توسعه دهندگان</li>
                        <li>تماس با ما</li>
                        <li>بیش تر<img src="./Images/chevron__down.svg" alt="" className="header__list--img" /></li>
                    </ul>
                    <button className="headerBtn">زرین پال من</button>

                </div>

            </div>
        </>
    )
}

export default Header