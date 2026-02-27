export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">ЗЕНИТ*ЙОГА</div>
        <nav>
          <a href="#">Расписание</a>
          <a href="#">Практики</a>
          <a href="#">Атмосфера</a>
          <a href="#">Контакты</a>
        </nav>
        <button className="btn-cta">Записаться</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              НАЙДИ
              <br />
              СВОЙ <span>ПОКОЙ</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#5a4a42]">
              Студия йоги и медитации в духе осознанных 70-х. Живые практики, опытные мастера и атмосфера, которая возвращает к себе.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Записаться на класс
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                Смотреть расписание
              </button>
            </div>
          </div>
          <div
            className="hero-img"
            style={{
              background: `url("https://cdn.poehali.dev/projects/47f80ae3-6b49-417f-81cd-4a46ece9a3b3/files/0f0ee2c1-1407-41ff-a8f6-e6064d4c48f4.jpg") center center / cover`,
            }}
          >
            <div className="sticker">
              ДУША
              <br />
              В ПОТОКЕ
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #ОСОЗНАННОСТЬ
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              ДЫШИ
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * ХАТХА ЙОГА * МЕДИТАЦИЯ * ПРАНАЯМА * ИНЬ ЙОГА * SOUND HEALING * УТРЕННИЕ ПРАКТИКИ * НИДРА * ХАТХА ЙОГА * МЕДИТАЦИЯ * ПРАНАЯМА * ИНЬ ЙОГА * SOUND HEALING * УТРЕННИЕ ПРАКТИКИ * НИДРА
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">НАШИ ПРАКТИКИ</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Всё расписание
            </a>
          </div>

          <div className="menu-grid">
            <div className="menu-card">
              <span className="menu-tag">Популярное</span>
              <img
                src="https://cdn.poehali.dev/projects/47f80ae3-6b49-417f-81cd-4a46ece9a3b3/files/8f5a0960-523f-40b3-a633-6caecf39bcaf.jpg"
                alt="Хатха йога"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Хатха Йога</h3>
                  <span className="price">1 500 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#7a6558" }}>
                  Классическая практика для тела и ума. Асаны, дыхание, концентрация — для любого уровня подготовки.
                </p>
              </div>
            </div>

            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)", color: "white" }}>
                Восстановление
              </span>
              <img
                src="https://cdn.poehali.dev/projects/47f80ae3-6b49-417f-81cd-4a46ece9a3b3/files/cffc08f4-bf45-400d-a664-65809b14b0f0.jpg"
                alt="Медитация"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Медитация & Нидра</h3>
                  <span className="price">1 200 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#7a6558" }}>Глубокое расслабление и осознанность. Йога-нидра снимает стресс и восстанавливает энергию за 40 минут.</p>
              </div>
            </div>

            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Хит утра
              </span>
              <img
                src="https://cdn.poehali.dev/projects/47f80ae3-6b49-417f-81cd-4a46ece9a3b3/files/fea29cc3-26b0-4540-af9c-e8c7d1835ed3.jpg"
                alt="Утренняя практика"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Утренний поток</h3>
                  <span className="price">1 000 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#7a6558" }}>
                  Динамичная виньяса-флоу с 7:00 утра. Лучший способ начать день в балансе и с ясным умом.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">МЕСТО, ГДЕ ВРЕМЯ ЗАМЕДЛЯЕТСЯ.</h2>
            <p className="vibe-text">
              Мы не просто проводим занятия. Мы создаём пространство для себя. Деревянные полы, свечи, живые растения и запах сандала — каждая деталь настраивает на практику с первого вдоха.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              Наша история
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @ЗЕНИТ.ЙОГА
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/47f80ae3-6b49-417f-81cd-4a46ece9a3b3/files/0f0ee2c1-1407-41ff-a8f6-e6064d4c48f4.jpg"
                alt="Студия йоги"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/47f80ae3-6b49-417f-81cd-4a46ece9a3b3/files/8f5a0960-523f-40b3-a633-6caecf39bcaf.jpg"
                alt="Класс медитации"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/47f80ae3-6b49-417f-81cd-4a46ece9a3b3/files/fea29cc3-26b0-4540-af9c-e8c7d1835ed3.jpg"
                alt="Аксессуары для йоги"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/47f80ae3-6b49-417f-81cd-4a46ece9a3b3/files/cffc08f4-bf45-400d-a664-65809b14b0f0.jpg"
                alt="Утренняя медитация"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">ЗЕНИТ*ЙОГА</div>
          <p style={{ color: "#8a7a72", lineHeight: 1.6 }}>
            Твоё пространство для практики и внутреннего покоя. С 2024, но ощущается как вечность.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Расписание
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Практики
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                О студии
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Контакты
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Расписание</h4>
          <ul>
            <li>Пн–Пт: 07:00 – 21:00</li>
            <li>Сб: 08:00 – 19:00</li>
            <li>Вс: 09:00 – 17:00</li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Соцсети</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Instagram
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Telegram
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                VK
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
