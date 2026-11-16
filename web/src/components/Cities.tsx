import './Cities.css'

const cities = [
  { name: 'Миасс', note: 'Основная база выездов' },
  { name: 'Чебаркуль', note: 'Замер и монтаж' },
  { name: 'Златоуст', note: 'По договорённости' },
  { name: 'Регион', note: 'Уточняйте по телефону' },
]

export function Cities() {
  return (
    <section id="cities" className="cities">
      <div className="container">
        <div className="cities__head">
          <h2>Куда выезжаем</h2>
          <p>Один номер — несколько городов. Замер бесплатный в зоне обслуживания.</p>
        </div>

        <ul className="cities__list">
          {cities.map((city) => (
            <li key={city.name}>
              <span className="cities__name">{city.name}</span>
              <span className="cities__note">{city.note}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
