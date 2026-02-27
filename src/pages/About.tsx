import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const TEAM = [
  {
    name: "Анна Козлова",
    role: "Основатель & преподаватель хатхи",
    exp: "8 лет",
    cert: "RYT-500, Школа йоги Айенгара, Пуна",
    img: "https://cdn.poehali.dev/projects/47f80ae3-6b49-417f-81cd-4a46ece9a3b3/files/6203ea8e-836c-4067-89bb-60991e08f5ab.jpg",
    bio: "Анна начала практику йоги в 2015 году после серьёзной травмы спины. Йога буквально поставила её на ноги. Прошла обучение в Пуне и Ришикеше, получила сертификат RYT-500. В 2022 году открыла Зенит — студию, где хотела бы заниматься сама.",
    tags: ["Хатха", "Виньяса", "Начинающие"],
  },
  {
    name: "Сергей Морозов",
    role: "Преподаватель аштанги & виньясы",
    exp: "12 лет",
    cert: "KPJAYI, Майсор, Индия",
    img: "https://cdn.poehali.dev/projects/47f80ae3-6b49-417f-81cd-4a46ece9a3b3/files/f629a466-10e3-497e-8cef-46734bb7d444.jpg",
    bio: "Сергей — практик аштанга-виньясы в традиции Шри К. Паттабхи Джойса. Учился в Майсоре, Индия. Убеждён: йога — это не растяжка, это способ жить. Ведёт утренние классы и еженедельные сессии аштанга майсор.",
    tags: ["Аштанга", "Виньяса", "Продвинутые"],
  },
  {
    name: "Лариса Волкова",
    role: "Преподаватель медитации & Sound Healing",
    exp: "10 лет",
    cert: "Курс медитации MBSR, Звуковая терапия, Тибет",
    img: "https://cdn.poehali.dev/projects/47f80ae3-6b49-417f-81cd-4a46ece9a3b3/files/6203ea8e-836c-4067-89bb-60991e08f5ab.jpg",
    bio: "Лариса — практик буддийской медитации и звуковой терапии. Обучалась в Дхарамсале и прошла программу MBSR (снижение стресса на основе осознанности). Проводит медитации, нидру и исцеляющие звуковые ванны.",
    tags: ["Медитация", "Sound Healing", "Нидра"],
  },
];

const VALUES = [
  { icon: "Heart", title: "Без соревнований", text: "Йога — не спорт. У нас нет «лучших» или «худших». Каждый приходит к своему." },
  { icon: "Leaf", title: "Живая практика", text: "Мы против массовых классов. Малые группы — это внимание к каждому." },
  { icon: "Globe", title: "Традиция + современность", text: "Уважаем корни йоги и адаптируем практику под реалии городской жизни." },
  { icon: "Sparkles", title: "Доступность", text: "Пробное занятие бесплатно. Студия должна быть открыта для всех." },
];

const FAQ = [
  { q: "Нужна ли подготовка для первого занятия?", a: "Нет. Приходи таким, какой есть. Всё что нужно — коврик (можно взять у нас) и удобная одежда." },
  { q: "Как записаться на занятие?", a: "Через страницу Расписания — выбери класс и нажми «Записаться». Или позвони: +7 (495) 123-45-67." },
  { q: "Что взять с собой?", a: "Удобную одежду, воду и желательно пустой желудок (2–3 часа не есть перед практикой). Коврики и пропсы у нас есть." },
  { q: "Можно ли заниматься при болях в спине?", a: "Да. Хатха йога и инь — отлично работают с болями в спине. Сообщи преподавателю о своей ситуации перед занятием." },
  { q: "Есть ли занятия онлайн?", a: "Пока нет. Мы верим в живую практику — в присутствии совершенно другой опыт." },
  { q: "Как работает безлимитный абонемент?", a: "Оплачиваешь 12 000 ₽, получаешь доступ ко всем классам в течение 30 дней без ограничений." },
];

export default function About() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <Link to="/" className="logo" style={{ textDecoration: "none", color: "inherit" }}>ЗЕНИТ*ЙОГА</Link>
        <nav>
          <Link to="/schedule" style={{ textDecoration: "none", color: "var(--dark)", fontWeight: 700, marginLeft: 30, textTransform: "uppercase", fontSize: 14 }}>Расписание</Link>
          <Link to="/practices" style={{ textDecoration: "none", color: "var(--dark)", fontWeight: 700, marginLeft: 30, textTransform: "uppercase", fontSize: 14 }}>Практики</Link>
          <Link to="/about" style={{ textDecoration: "none", color: "var(--primary)", fontWeight: 800, marginLeft: 30, textTransform: "uppercase", fontSize: 14 }}>О студии</Link>
        </nav>
        <Link to="/schedule"><button className="btn-cta">Записаться</button></Link>
      </header>

      <main>
        {/* HERO */}
        <section style={{ display: "grid", gridTemplateColumns: "1fr", minHeight: 500, borderBottom: "var(--border)" }}>
          <div style={{ padding: "60px 40px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ fontFamily: "Unbounded, sans-serif", fontSize: 12, fontWeight: 800, color: "var(--secondary)", textTransform: "uppercase", letterSpacing: 3, marginBottom: 20 }}>О студии</div>
            <h1 style={{ fontFamily: "Unbounded, sans-serif", fontSize: 64, fontWeight: 800, lineHeight: 0.9, textTransform: "uppercase", marginBottom: 24 }}>
              МЫ<br />ВЕРИМ<br />В <span style={{ fontFamily: "Cormorant Garamond, serif", fontStyle: "italic", fontWeight: 600, color: "var(--primary)" }}>тишину</span>
            </h1>
            <p style={{ fontSize: 18, color: "#5a4a42", lineHeight: 1.8, maxWidth: 550 }}>
              Зенит — это не просто студия. Это место, где за 60 минут практики можно восстановить то, что城市 разрушала неделями. Мы создавали его с одной мыслью: что нам самим было бы здесь хорошо.
            </p>
          </div>
        </section>

        {/* STORY */}
        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">ИСТОРИЯ, КОТОРАЯ НАЧАЛАСЬ С ТРАВМЫ.</h2>
            <p className="vibe-text">
              В 2015 году Анна Козлова повредила позвоночник и оказалась перед выбором: операция или йога. Она выбрала йогу. Через два года она уже преподавала. В 2022-м открыла Зенит — студию, где хотела бы заниматься сама: маленькую, живую, без лишнего шума.
            </p>
            <p className="vibe-text">
              Сегодня в Зените работают три преподавателя с суммарным опытом 30 лет. Каждый — практик в первую очередь, учитель — во вторую.
            </p>
          </div>
          <div
            className="vibe-img"
            style={{ background: `url("https://cdn.poehali.dev/projects/47f80ae3-6b49-417f-81cd-4a46ece9a3b3/files/eabce8d7-42e8-4374-96ae-2e8e8d701b5e.jpg") center center / cover` }}
          />
        </section>

        {/* VALUES */}
        <section className="section-padding" style={{ borderBottom: "var(--border)" }}>
          <h2 className="section-title" style={{ textAlign: "center", marginBottom: 60 }}>НАШИ ЦЕННОСТИ</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 0, border: "var(--border)" }}>
            {VALUES.map((v, i) => (
              <div key={i} style={{ padding: "40px", borderBottom: i < VALUES.length - 1 ? "var(--border)" : "none", display: "flex", gap: 30, alignItems: "flex-start" }}>
                <div style={{ width: 56, height: 56, background: "var(--accent)", border: "var(--border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon name={v.icon as "Heart"} size={26} />
                </div>
                <div>
                  <h3 style={{ fontFamily: "Unbounded, sans-serif", fontSize: 18, fontWeight: 800, textTransform: "uppercase", marginBottom: 10 }}>{v.title}</h3>
                  <p style={{ fontSize: 15, color: "#5a4a42", lineHeight: 1.7 }}>{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TEAM */}
        <section className="section-padding" style={{ borderBottom: "var(--border)" }}>
          <h2 className="section-title" style={{ marginBottom: 60 }}>КОМАНДА</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "var(--border)" }}>
            {TEAM.map((member, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr", borderBottom: i < TEAM.length - 1 ? "var(--border)" : "none" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                  <div style={{ display: "flex", gap: 0, borderBottom: "var(--border)", flexWrap: "wrap" }}>
                    <img
                      src={member.img} alt={member.name}
                      style={{ width: 200, height: 200, objectFit: "cover", borderRight: "var(--border)", flexShrink: 0 }}
                    />
                    <div style={{ padding: "30px", flex: 1 }}>
                      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 8 }}>
                        {member.tags.map(t => (
                          <span key={t} style={{ background: "var(--accent)", border: "var(--border)", padding: "3px 10px", fontSize: 11, fontWeight: 800, textTransform: "uppercase" }}>{t}</span>
                        ))}
                      </div>
                      <h3 style={{ fontFamily: "Unbounded, sans-serif", fontSize: 22, fontWeight: 800, marginBottom: 6 }}>{member.name}</h3>
                      <div style={{ fontSize: 14, color: "var(--secondary)", fontWeight: 700, marginBottom: 16 }}>{member.role}</div>
                      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                        <span style={{ fontSize: 13, color: "#7a6558", display: "flex", alignItems: "center", gap: 5 }}>
                          <Icon name="Clock" size={13} /> Опыт: {member.exp}
                        </span>
                        <span style={{ fontSize: 13, color: "#7a6558", display: "flex", alignItems: "center", gap: 5 }}>
                          <Icon name="Award" size={13} /> {member.cert}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div style={{ padding: "24px 30px", fontSize: 15, color: "#5a4a42", lineHeight: 1.8 }}>{member.bio}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* STUDIO FEATURES */}
        <section style={{ background: "var(--dark)", color: "white", borderBottom: "var(--border)" }}>
          <div className="section-padding">
            <h2 className="section-title" style={{ color: "white", marginBottom: 50, textAlign: "center" }}>СТУДИЯ</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 30 }}>
              {[
                { icon: "MapPin", label: "Адрес", value: "ул. Мира, 14, Москва\n(5 мин от м. Проспект Мира)" },
                { icon: "Clock", label: "Часы работы", value: "Пн–Пт: 07:00–21:00\nСб: 08:00–19:00\nВс: 09:00–17:00" },
                { icon: "Phone", label: "Телефон", value: "+7 (495) 123-45-67" },
                { icon: "Mail", label: "Email", value: "hello@zenit-yoga.ru" },
              ].map((item, i) => (
                <div key={i} style={{ border: "1px solid #3a3030", padding: "24px", display: "flex", gap: 20 }}>
                  <div style={{ width: 48, height: 48, background: "var(--secondary)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon name={item.icon as "MapPin"} size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: 2, color: "#8a7a72", marginBottom: 8 }}>{item.label}</div>
                    <div style={{ fontSize: 16, fontWeight: 700, whiteSpace: "pre-line", lineHeight: 1.7 }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding" style={{ borderBottom: "var(--border)" }}>
          <h2 className="section-title" style={{ marginBottom: 50, textAlign: "center" }}>FAQ</h2>
          <div style={{ border: "var(--border)" }}>
            {FAQ.map((item, i) => (
              <div key={i} style={{ borderBottom: i < FAQ.length - 1 ? "var(--border)" : "none" }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: "100%", background: "none", border: "none", padding: "24px 30px",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    cursor: "pointer", textAlign: "left",
                  }}
                >
                  <span style={{ fontFamily: "Unbounded, sans-serif", fontSize: 15, fontWeight: 800, textTransform: "uppercase", paddingRight: 20 }}>{item.q}</span>
                  <Icon name={openFaq === i ? "ChevronUp" : "ChevronDown"} size={20} />
                </button>
                {openFaq === i && (
                  <div style={{ padding: "0 30px 24px", fontSize: 15, color: "#5a4a42", lineHeight: 1.8 }}>{item.a}</div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "var(--secondary)", borderBottom: "var(--border)", padding: "70px 40px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Unbounded, sans-serif", fontSize: 36, fontWeight: 800, color: "white", textTransform: "uppercase", marginBottom: 16 }}>
            Приходи познакомиться
          </h2>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.8)", marginBottom: 32 }}>Первое занятие — наш подарок. Без обязательств.</p>
          <Link to="/schedule">
            <button className="btn-cta" style={{ background: "white", color: "var(--dark)", fontSize: 16, padding: "16px 48px" }}>
              Записаться бесплатно
            </button>
          </Link>
        </section>
      </main>

      <footer style={{ padding: "40px", background: "var(--dark)", color: "white", borderTop: "var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
        <Link to="/" style={{ fontFamily: "Unbounded, sans-serif", fontSize: 24, fontWeight: 800, color: "white", textDecoration: "none" }}>ЗЕНИТ*ЙОГА</Link>
        <div style={{ display: "flex", gap: 30, flexWrap: "wrap" }}>
          <Link to="/" style={{ color: "#8a7a72", textDecoration: "none", fontSize: 13, fontWeight: 700, textTransform: "uppercase" }}>Главная</Link>
          <Link to="/schedule" style={{ color: "#8a7a72", textDecoration: "none", fontSize: 13, fontWeight: 700, textTransform: "uppercase" }}>Расписание</Link>
          <Link to="/practices" style={{ color: "#8a7a72", textDecoration: "none", fontSize: 13, fontWeight: 700, textTransform: "uppercase" }}>Практики</Link>
        </div>
        <div style={{ fontSize: 13, color: "#8a7a72" }}>+7 (495) 123-45-67</div>
      </footer>
    </>
  );
}
