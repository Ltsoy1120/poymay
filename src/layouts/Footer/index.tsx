import { NavLink } from "react-router-dom"
import "./style.scss"

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer">
        <div className="col">
          <div className="logo">
            <img src="/static/images/logo.webp" alt="logo" />
          </div>
          <a className="site" href="https://web.poymay.kz">
            poymay.kz
          </a>
        </div>
        <div className="col">
          <h3>Документы</h3>
          <div className="documents">
            <a href="/static/oferta.pdf">Договор оферты</a>
            <NavLink to="/online-buy-fishing/privacy-policy">
              Политика конфиденциальности
            </NavLink>
            <a href="/static/online-payments.pdf">Онлайн-платежи</a>
            <br />
            <a
              href="https://goo.gl/maps/uz61DN3nZ6EB71a27"
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center"
              }}
            >
              <img
                src="/static/images/geo.png"
                alt="geo"
                style={{
                  width: "30px"
                }}
              />
              Карта Poymay
            </a>
          </div>
        </div>
        <div className="col">
          <h3>Контакты</h3>
          <div className="socials">
            <a href="https://www.instagram.com/poymay_kz/">
              <img src="/static/images/instagram.png" alt="instagram" />
            </a>
            <a href="https://wa.me/+77775959606">
              <img src="/static/images/whatsapp.png" alt="whatsapp" />
            </a>
            <a href="https://t.me/+77775959606">
              <img src="/static/images/telegram.png" alt="telegram" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100092317341249"
              style={{
                width: "35px"
              }}
            >
              <img src="/static/images/fasebook.png" alt="fasebook" />
            </a>
          </div>
          <a href="mailto:info@poymay.kz">info@poymay.kz</a>
          <a href="tel:+77775959606">+7 777 595 96 06</a>
          <div className="contacts__apps">
            <a
              href="https://play.google.com/store/apps/details?id=kz.poymay"
              style={{
                width: "40px",
                borderRadius: "8px",
                overflow: "hidden"
              }}
            >
              <img src="/static/images/app-store.png" alt="app-store" />
            </a>
            <a
              href="https://apps.apple.com/kz/app/poymay/id1598883961"
              style={{
                width: "40px"
              }}
            >
              <img src="/static/images/google-play.png" alt="google-play" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
