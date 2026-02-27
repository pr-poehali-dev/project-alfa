import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <Link to="/" className="logo" style={{ textDecoration: "none", color: "inherit" }}>ЗЕНИТ*ЙОГА</Link>
        <nav>
          <Link to="/schedule" style={{ textDecoration: "none", color: "var(--dark)", fontWeight: 700, marginLeft: 30, textTransform: "uppercase", fontSize: 14 }}>Расписание</Link>
          <Link to="/practices" style={{ textDecoration: "none", color: "var(--dark)", fontWeight: 700, marginLeft: 30, textTransform: "uppercase", fontSize: 14 }}>Практики</Link>
          <Link to="/about" style={{ textDecoration: "none", color: "var(--dark)", fontWeight: 700, marginLeft: 30, textTransform: "uppercase", fontSize: 14 }}>О студии</Link>
          <a href="#contacts" style={{ textDecoration: "none", color: "var(--dark)", fontWeight: 700, marginLeft: 30, textTransform: "uppercase", fontSize: 14 }}>Контакты</a>
        </nav>
        <Link to="/schedule"><button className="btn-cta">Записаться</button></Link>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              НАЙДИ
              <br />
              СВОЙ <span>ПОКОЙ</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed" style={{ color: "#5a4a42" }}>
              Студия йоги и медитации в духе осознанных 70-х. Живые практики, опытные мастера и атмосфера, которая возвращает к себе.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <Link to="/schedule">
                <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                  Записаться на класс
                </button>
              </Link>
              <Link to="/practices">
                <button className="btn-cta" style={{ background: "white" }}>
                  Смотреть практики
                </button>
              </Link>
            </div>
          </div>
          <div
            className="hero-img"
            style={{
              background: `url("https://cdn.poehali.dev/projects/47f80ae3-6b49-417f-81cd-4a46ece9a3b3/files/0f0ee2c1-1407-41ff-a8f6-e6064d4c48f4.jpg") center center / cover`,
            }}
          >
            <div className="sticker">ДУША<br />В ПОТОКЕ</div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>#ОСОЗНАННОСТЬ</div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>ДЫШИ</div>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * ХАТХА ЙОГА * МЕДИТАЦИЯ * ПРАНАЯМА * ИНЬ ЙОГА * SOUND HEALING * УТРЕННИЕ ПРАКТИКИ * НИДРА * ХАТХА ЙОГА * МЕДИТАЦИЯ * ПРАНАЯМА * ИНЬ ЙОГА * SOUND HEALING * УТРЕННИЕ ПРАКТИКИ * НИДРА
          </div>
        </div>

        {/* STATS */}
        <section style={{ borderBottom: "var(--border)", background: "white" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
            {[
              { num: "12+", label: "Практик в неделю" },
              { num: "6", label: "Преподавателей" },
              { num: "500+", label: "Учеников" },
              { num: "3", label: "Года работы" },
            ].map((s, i) => (
              <div key={i} style={{ padding: "30px 20px", borderRight: i % 2 === 0 ? "var(--border)" : "none", borderBottom: i < 2 ? "var(--border)" : "none", textAlign: "center" }}>
                <div style={{ fontFamily: "Unbounded, sans-serif", fontSize: 48, fontWeight: 800, color: "var(--primary)", lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", marginTop: 8, color: "#7a6558" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* PRACTICES */}
        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">НАШИ ПРАКТИКИ</h2>
            <Link to="/practices" style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase", fontSize: 14, textDecoration: "none" }}>
              Все практики →
            </Link>
          </div>
          <div className="menu-grid">
            {[
              {
                tag: "Популярное", tagBg: "var(--primary)", tagColor: "white",
                img: "https://cdn.poehali.dev/projects/47f80ae3-6b49-417f-81cd-4a46ece9a3b3/files/8f5a0960-523f-40b3-a633-6caecf39bcaf.jpg",
                name: "Хатха Йога", price: "1 500 ₽",
                desc: "Классическая практика для тела и ума. Асаны, дыхание, концентрация — для любого уровня.",
              },
              {
                tag: "Восстановление", tagBg: "var(--secondary)", tagColor: "white",
                img: "https://cdn.poehali.dev/projects/47f80ae3-6b49-417f-81cd-4a46ece9a3b3/files/cffc08f4-bf45-400d-a664-65809b14b0f0.jpg",
                name: "Медитация & Нидра", price: "1 200 ₽",
                desc: "Глубокое расслабление и осознанность. Снимает стресс и восстанавливает энергию за 40 минут.",
              },
              {
                tag: "Хит утра", tagBg: "var(--accent)", tagColor: "var(--dark)",
                img: "https://cdn.poehali.dev/projects/47f80ae3-6b49-417f-81cd-4a46ece9a3b3/files/fea29cc3-26b0-4540-af9c-e8c7d1835ed3.jpg",
                name: "Утренний поток", price: "1 000 ₽",
                desc: "Динамичная виньяса-флоу с 7:00. Лучший способ начать день в балансе и с ясным умом.",
              },
            ].map((c, i) => (
              <div key={i} className="menu-card">
                <span className="menu-tag" style={{ background: c.tagBg, color: c.tagColor }}>{c.tag}</span>
                <img src={c.img} alt={c.name} />
                <div className="menu-card-body">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                    <h3>{c.name}</h3>
                    <span className="price">{c.price}</span>
                  </div>
                  <p style={{ fontSize: 14, color: "#7a6558" }}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* VIBE */}
        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">МЕСТО, ГДЕ ВРЕМЯ ЗАМЕДЛЯЕТСЯ.</h2>
            <p className="vibe-text">
              Мы не просто проводим занятия. Мы создаём пространство для себя. Деревянные полы, свечи, живые растения и запах сандала — каждая деталь настраивает на практику с первого вдоха.
            </p>
            <Link to="/about">
              <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
                Наша история
              </button>
            </Link>
          </div>
          <div
            className="vibe-img"
            style={{ background: `url("https://cdn.poehali.dev/projects/47f80ae3-6b49-417f-81cd-4a46ece9a3b3/files/eabce8d7-42e8-4374-96ae-2e8e8d701b5e.jpg") center center / cover` }}
          />
        </section>

        {/* WHY US */}
        <section className="section-padding" style={{ borderBottom: "var(--border)" }}>
          <h2 className="section-title" style={{ textAlign: "center", marginBottom: 60 }}>ПОЧЕМУ ЗЕНИТ</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 30 }}>
            {[
              { icon: "Leaf", title: "Живая атмосфера", text: "Студия спроектирована так, чтобы тело расслаблялось ещё у порога. Никакого лишнего шума — только практика." },
              { icon: "Users", title: "Малые группы", text: "Не более 12 человек на занятии. Преподаватель видит каждого и помогает освоить правильную технику." },
              { icon: "Calendar", title: "Гибкое расписание", text: "Утренние, дневные и вечерние классы каждый день. Выбирай время, которое вписывается в твой ритм жизни." },
              { icon: "Star", title: "Сертифицированные мастера", text: "Все преподаватели прошли обучение в ведущих школах Индии и России. Суммарный опыт — более 50 лет." },
              { icon: "Heart", title: "Для любого уровня", text: "Новичок или опытный практик — у нас найдётся класс именно для тебя. Без оценок и сравнений." },
              { icon: "Sparkles", title: "Первое занятие бесплатно", text: "Приходи познакомиться со студией и преподавателями без обязательств. Первый класс — наш подарок." },
            ].map((item, i) => (
              <div key={i} style={{ border: "var(--border)", background: "white", padding: 30, transition: "0.3s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow)"; (e.currentTarget as HTMLElement).style.transform = "translate(-4px,-4px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.transform = "none"; }}>
                <div style={{ width: 50, height: 50, background: "var(--accent)", border: "var(--border)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                  <Icon name={item.icon as "Leaf"} size={24} />
                </div>
                <h3 style={{ fontFamily: "Unbounded, sans-serif", fontSize: 16, fontWeight: 800, marginBottom: 12, textTransform: "uppercase" }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: "#7a6558", lineHeight: 1.7 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SCHEDULE PREVIEW */}
        <section className="section-padding" style={{ background: "var(--dark)", color: "white", borderBottom: "var(--border)" }}>
          <div className="section-header" style={{ borderBottom: "2px solid #3a3030", paddingBottom: 30, marginBottom: 40 }}>
            <h2 className="section-title" style={{ color: "white" }}>РАСПИСАНИЕ</h2>
            <Link to="/schedule" style={{ color: "var(--accent)", fontWeight: 800, textTransform: "uppercase", fontSize: 14, textDecoration: "none" }}>
              Полное расписание →
            </Link>
          </div>
          <div>
            {[
              { day: "Понедельник", classes: [{ time: "07:30", name: "Утренний поток", teacher: "Анна К.", spots: 4 }, { time: "19:00", name: "Хатха Йога", teacher: "Сергей М.", spots: 8 }] },
              { day: "Среда", classes: [{ time: "08:00", name: "Медитация", teacher: "Лариса В.", spots: 6 }, { time: "20:00", name: "Инь Йога", teacher: "Анна К.", spots: 5 }] },
              { day: "Пятница", classes: [{ time: "07:30", name: "Виньяса", teacher: "Сергей М.", spots: 3 }, { time: "18:30", name: "Sound Healing", teacher: "Лариса В.", spots: 10 }] },
            ].map((day, di) => (
              <div key={di} style={{ borderBottom: "1px solid #3a3030", paddingBottom: 24, marginBottom: 24 }}>
                <div style={{ fontFamily: "Unbounded, sans-serif", fontSize: 12, fontWeight: 800, color: "var(--accent)", textTransform: "uppercase", marginBottom: 16, letterSpacing: 2 }}>{day.day}</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 12 }}>
                  {day.classes.map((cls, ci) => (
                    <div key={ci} style={{ border: "1px solid #3a3030", padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div>
                        <div style={{ fontFamily: "Unbounded, sans-serif", fontSize: 20, fontWeight: 800, color: "var(--accent)" }}>{cls.time}</div>
                        <div style={{ fontWeight: 700, marginTop: 4 }}>{cls.name}</div>
                        <div style={{ fontSize: 13, color: "#8a7a72", marginTop: 2 }}>{cls.teacher}</div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <div style={{ fontSize: 12, color: "#8a7a72" }}>Мест осталось</div>
                        <div style={{ fontFamily: "Unbounded, sans-serif", fontSize: 24, fontWeight: 800, color: cls.spots <= 4 ? "#e88888" : "white" }}>{cls.spots}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 10, textAlign: "center" }}>
            <Link to="/schedule">
              <button className="btn-cta" style={{ background: "var(--accent)", color: "var(--dark)" }}>Смотреть всё расписание</button>
            </Link>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section-padding" style={{ borderBottom: "var(--border)" }}>
          <h2 className="section-title" style={{ textAlign: "center", marginBottom: 60 }}>ГОВОРЯТ УЧЕНИКИ</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 30 }}>
            {[
              { name: "Марина С.", text: "Пришла сюда после выгорания. За три месяца поняла, что значит слышать себя. Атмосфера здесь совершенно особенная.", role: "Дизайнер, 2 года в студии" },
              { name: "Алексей Р.", text: "Сначала скептически относился к медитации. Теперь это моя утренняя обязательная практика. Сергей умеет объяснять просто и по делу.", role: "IT-директор, 1 год в студии" },
              { name: "Ольга Н.", text: "Малая группа — это то, что нужно. Преподаватель видит тебя, поправляет, объясняет. Совсем не похоже на фитнес-клуб.", role: "Врач, 3 года в студии" },
            ].map((t, i) => (
              <div key={i} style={{ border: "var(--border)", background: "white", padding: 30 }}>
                <div style={{ fontSize: 40, color: "var(--secondary)", fontFamily: "serif", lineHeight: 1, marginBottom: 16 }}>"</div>
                <p style={{ fontSize: 15, color: "#5a4a42", lineHeight: 1.8, marginBottom: 24, fontStyle: "italic" }}>{t.text}</p>
                <div style={{ borderTop: "var(--border)", paddingTop: 20 }}>
                  <div style={{ fontWeight: 800, fontSize: 15 }}>{t.name}</div>
                  <div style={{ fontSize: 13, color: "#8a7a72", marginTop: 4 }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* GALLERY */}
        <section style={{ padding: "60px 40px 0" }}>
          <h2 className="section-title" style={{ marginBottom: 40, textAlign: "center" }}>@ЗЕНИТ.ЙОГА</h2>
        </section>
        <div className="social-grid">
          {[
            "https://cdn.poehali.dev/projects/47f80ae3-6b49-417f-81cd-4a46ece9a3b3/files/0f0ee2c1-1407-41ff-a8f6-e6064d4c48f4.jpg",
            "https://cdn.poehali.dev/projects/47f80ae3-6b49-417f-81cd-4a46ece9a3b3/files/8f5a0960-523f-40b3-a633-6caecf39bcaf.jpg",
            "https://cdn.poehali.dev/projects/47f80ae3-6b49-417f-81cd-4a46ece9a3b3/files/fea29cc3-26b0-4540-af9c-e8c7d1835ed3.jpg",
            "https://cdn.poehali.dev/projects/47f80ae3-6b49-417f-81cd-4a46ece9a3b3/files/cffc08f4-bf45-400d-a664-65809b14b0f0.jpg",
          ].map((src, i) => (
            <div key={i} className="social-item">
              <img src={src} alt={`Галерея ${i + 1}`} />
            </div>
          ))}
        </div>

        {/* CTA BAND */}
        <section style={{ background: "var(--secondary)", borderTop: "var(--border)", borderBottom: "var(--border)", padding: "60px 40px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Unbounded, sans-serif", fontSize: 36, fontWeight: 800, color: "white", marginBottom: 16, textTransform: "uppercase" }}>Первый класс бесплатно</h2>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.8)", marginBottom: 32, maxWidth: 500, margin: "0 auto 32px" }}>Приходи познакомиться. Без обязательств, без давления — просто попробуй.</p>
          <Link to="/schedule">
            <button className="btn-cta" style={{ background: "white", color: "var(--dark)", fontSize: 16, padding: "16px 40px" }}>Записаться бесплатно</button>
          </Link>
        </section>
      </main>

      <footer id="contacts">
        <div>
          <div className="footer-logo">ЗЕНИТ*ЙОГА</div>
          <p style={{ color: "#8a7a72", lineHeight: 1.6, marginBottom: 20 }}>
            Твоё пространство для практики и внутреннего покоя. С 2022, но ощущается как вечность.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {["Instagram", "Telegram", "VK"].map(s => (
              <a key={s} href="#" style={{ border: "var(--border)", padding: "6px 16px", fontSize: 13, fontWeight: 700, textDecoration: "none", color: "var(--dark)", textTransform: "uppercase" }}>{s}</a>
            ))}
          </div>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li><Link to="/" style={{ color: "inherit", textDecoration: "none" }}>Главная</Link></li>
            <li><Link to="/schedule" style={{ color: "inherit", textDecoration: "none" }}>Расписание</Link></li>
            <li><Link to="/practices" style={{ color: "inherit", textDecoration: "none" }}>Практики</Link></li>
            <li><Link to="/about" style={{ color: "inherit", textDecoration: "none" }}>О студии</Link></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Часы работы</h4>
          <ul>
            <li>Пн–Пт: 07:00 – 21:00</li>
            <li>Сб: 08:00 – 19:00</li>
            <li>Вс: 09:00 – 17:00</li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Контакты</h4>
          <ul>
            <li>ул. Мира, 14, Москва</li>
            <li>+7 (495) 123-45-67</li>
            <li>hello@zenit-yoga.ru</li>
          </ul>
        </div>
        <div className="footer-bottom">
          <span>© 2024 Зенит Йога. Все права защищены.</span>
          <span>Сделано с любовью и пранаямой</span>
        </div>
      </footer>
    </>
  );
}
