import './Measure.css'

const steps = [
  {
    n: '01',
    title: 'Звонок или заявка',
    text: 'Коротко опишите комнату — кухня, купе, детская. Подскажем, что важно замерить.',
  },
  {
    n: '02',
    title: 'Бесплатный замер',
    text: 'Приезжаем в удобное время. Снимаем размеры ниш, розеток, труб и проёмов.',
  },
  {
    n: '03',
    title: 'Расчёт и монтаж',
    text: 'Согласуем фасады и фурнитуру, изготовим под ваш размер и установим на месте.',
  },
]

export function Measure() {
  return (
    <section id="measure" className="measure">
      <div className="container measure__layout">
        <div className="measure__intro">
          <p className="measure__eyebrow">Как работаем</p>
          <h2>От замера до монтажа</h2>
          <p className="measure__lead">
            Без шоурумной абстракции: мерим вашу квартиру, считаем под ваши стены и
            ставим готовый гарнитур.
          </p>
          <a className="btn btn--dark" href="#contact">
            Оставить заявку на замер
          </a>
        </div>

        <ol className="measure__steps">
          {steps.map((step) => (
            <li key={step.n}>
              <span className="measure__n">{step.n}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
