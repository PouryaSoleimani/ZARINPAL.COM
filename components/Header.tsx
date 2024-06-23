//^ HEADER STICKY


const Header = () => {
  return (
    <>
      <div className="header__sticky">
        <div className="header-sticky__img">
          <img src="/public/header__logo.svg" />
        </div>
        <div className="header__list">
          <ul className="header__list-main">
            <li>محصولات <img src="/public/chevron__down.svg" alt="" className="header__list--img" /></li>
            <li>تعرفه ها</li>
            <li>توسعه دهندگان</li>
            <li>تماس با ما</li>
            <li>بیش تر<img src="/public/chevron__down.svg" alt="" className="header__list--img" /></li>
          </ul>
          <button className="header__btn">زرین پال من</button>

        </div>

      </div>
    </>
  )
}

export default Header