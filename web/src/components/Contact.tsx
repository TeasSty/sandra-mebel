import { useState } from 'react'
import type { FormEvent } from 'react'
import './Contact.css'

type Status = 'idle' | 'ok' | 'error'

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '').trim()
    const phone = String(data.get('phone') ?? '').trim()
    const city = String(data.get('city') ?? '').trim()
    const kind = String(data.get('kind') ?? '').trim()

    if (!name || phone.replace(/\D/g, '').length < 10) {
      setStatus('error')
      return
    }

    const text = [
      'Заявка на бесплатный замер (сайт Sandra)',
      `Имя: ${name}`,
      `Телефон: ${phone}`,
      city ? `Город: ${city}` : '',
      kind ? `Что нужно: ${kind}` : '',
    ]
      .filter(Boolean)
      .join('\n')

    const vk = `https://vk.me/sandra_miass`
    window.open(vk, '_blank', 'noopener,noreferrer')

    // Keep a local draft for the client to copy into the VK chat if needed.
    void navigator.clipboard?.writeText(text).catch(() => undefined)

    setStatus('ok')
    form.reset()
  }

  return (
    <section id="contact" className="contact">
      <div className="container contact__layout">
        <div className="contact__intro">
          <h2>Бесплатный замер</h2>
          <p>
            Оставьте имя и телефон — перезвоним, согласуем выезд. Можно сразу
            написать в VK или позвонить Виталию.
          </p>
          <div className="contact__direct">
            <a href="tel:+79080571510">+7 (908) 057-15-10</a>
            <a
              className="link-quiet"
              href="https://vk.ru/sandra_miass"
              target="_blank"
              rel="noreferrer"
            >
              Сообщество VK
            </a>
          </div>
        </div>

        <form className="contact__form" onSubmit={onSubmit} noValidate>
          <label>
            <span>Имя</span>
            <input name="name" type="text" autoComplete="name" required placeholder="Как к вам обращаться" />
          </label>
          <label>
            <span>Телефон</span>
            <input
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              placeholder="+7 (___) ___-__-__"
            />
          </label>
          <label>
            <span>Город</span>
            <select name="city" defaultValue="Миасс">
              <option>Миасс</option>
              <option>Чебаркуль</option>
              <option>Златоуст</option>
              <option>Другой</option>
            </select>
          </label>
          <label>
            <span>Что нужно</span>
            <select name="kind" defaultValue="Кухня">
              <option>Кухня</option>
              <option>Шкаф-купе</option>
              <option>Детская</option>
              <option>Прихожая</option>
              <option>Другое</option>
            </select>
          </label>

          <button className="btn" type="submit">
            Отправить заявку
          </button>

          {status === 'ok' && (
            <p className="contact__status contact__status--ok" role="status">
              Текст заявки скопирован. Откроется диалог VK — вставьте сообщение или
              позвоните по номеру выше.
            </p>
          )}
          {status === 'error' && (
            <p className="contact__status contact__status--error" role="alert">
              Укажите имя и телефон полностью.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
