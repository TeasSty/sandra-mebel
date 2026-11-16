import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__brand">SANDRA</p>
          <p className="footer__tag">Кухни · шкафы · мебель на заказ</p>
        </div>
        <div className="footer__meta">
          <a href="tel:+79080571510">+7 (908) 057-15-10</a>
          <a href="https://vk.ru/sandra_miass" target="_blank" rel="noreferrer">
            vk.ru/sandra_miass
          </a>
          <p>Миасс · Чебаркуль · Златоуст</p>
        </div>
      </div>
    </footer>
  )
}
