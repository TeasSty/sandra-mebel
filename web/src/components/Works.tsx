import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { asset } from '../lib/asset'
import './Works.css'

type Work = {
  id: string
  title: string
  tag: string
  src: string
}

const works: Work[] = [
  {
    id: 'a',
    title: 'Тумба',
    tag: 'Фасад и фурнитура в тон комнате',
    src: 'images/work-a.jpg',
  },
  {
    id: 'b',
    title: 'Шкаф',
    tag: 'Корпус до потолка, рисунок фасада в стык',
    src: 'images/work-b.jpg',
  },
  {
    id: 'c',
    title: 'Шкаф',
    tag: 'Встроенный объём у окна',
    src: 'images/work-c.jpg',
  },
  {
    id: 'd',
    title: 'Комод',
    tag: 'Фасады и ручки под интерьер',
    src: 'images/work-d.jpg',
  },
  {
    id: 'e',
    title: 'Детская',
    tag: 'Стол у окна + шкаф',
    src: 'images/work-e.jpg',
  },
  {
    id: 'f',
    title: 'Детская',
    tag: 'Рабочая зона и хранение',
    src: 'images/work-f.jpg',
  },
]

const filters = ['Все', 'Шкаф', 'Детская', 'Тумба', 'Комод'] as const

export function Works() {
  const rootRef = useRef<HTMLElement>(null)
  const [filter, setFilter] = useState<(typeof filters)[number]>('Все')

  const visible =
    filter === 'Все' ? works : works.filter((item) => item.title === filter)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const cards = root.querySelectorAll('[data-work-card]')

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: reduce ? 0.01 : 0.55,
          stagger: reduce ? 0 : 0.06,
          ease: 'power2.out',
          clearProps: 'transform',
        },
      )
    }, root)

    return () => ctx.revert()
  }, [filter])

  return (
    <section id="works" className="works" ref={rootRef}>
      <div className="container">
        <div className="works__head">
          <h2>Наши работы</h2>
          <p>Реальные квартиры, не шоурум. Шкафы, детские, тумбы и комоды.</p>
        </div>

        <div className="works__filters" role="tablist" aria-label="Фильтр работ">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={filter === item}
              className={filter === item ? 'is-active' : undefined}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="works__grid">
          {visible.map((item) => (
            <article key={item.id} className="works__card" data-work-card>
              <img
                src={asset(item.src)}
                alt={`${item.title}: ${item.tag}`}
                width={1080}
                height={864}
                loading="lazy"
              />
              <div className="works__meta">
                <h3>{item.title}</h3>
                <p>{item.tag}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
