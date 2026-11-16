import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { asset } from '../lib/asset'
import './Hero.css'

export function Hero() {
  const rootRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const media = root.querySelector('.hero__media')
    const content = root.querySelectorAll('[data-hero-reveal]')

    const ctx = gsap.context(() => {
      gsap.fromTo(
        content,
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: reduce ? 0.01 : 0.85,
          stagger: reduce ? 0 : 0.1,
          ease: 'power2.out',
          delay: reduce ? 0 : 0.12,
        },
      )

      if (!reduce && media) {
        gsap.fromTo(
          media,
          { scale: 1.06 },
          { scale: 1, duration: 2.4, ease: 'power2.out' },
        )
        gsap.to(media, {
          yPercent: 4,
          ease: 'none',
          scrollTrigger: undefined,
        })
        gsap.to(media, {
          yPercent: 6,
          duration: 18,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      }
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section id="top" className="hero" ref={rootRef} aria-label="Главный экран">
      <div className="hero__stage">
        <img
          className="hero__media"
          src={asset('images/hero-kitchen.jpg')}
          alt="Кухонный гарнитур Sandra, установленный в квартире"
          width={1000}
          height={660}
          fetchPriority="high"
        />
        <div className="hero__shade" aria-hidden="true" />
      </div>

      <div className="hero__copy container">
        <p className="hero__brand" data-hero-reveal>
          SANDRA
        </p>
        <h1 className="hero__title" data-hero-reveal>
          Кухни и шкафы по вашим размерам
        </h1>
        <p className="hero__lead" data-hero-reveal>
          Миасс · Чебаркуль · Златоуст — бесплатный замер
        </p>
        <div className="hero__actions" data-hero-reveal>
          <a className="btn" href="#contact">
            Записаться на замер
          </a>
          <a className="link-quiet hero__secondary" href="#works">
            Смотреть работы
          </a>
        </div>
      </div>
    </section>
  )
}
