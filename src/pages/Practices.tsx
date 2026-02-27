import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const PRACTICES = [
  {
    id: 1,
    name: "Хатха Йога",
    type: "Классика",
    tagBg: "var(--secondary)", tagColor: "white",
    price: "1 500 ₽",
    duration: "75 мин",
    level: "Все уровни",
    img: "https://cdn.poehali.dev/projects/47f80ae3-6b49-417f-81cd-4a46ece9a3b3/files/8f5a0960-523f-40b3-a633-6caecf39bcaf.jpg",
    short: "Основа основ. Статичные асаны, правильное дыхание, развитие осознанности тела.",
    full: "Хатха йога — это фундамент всех направлений. На занятии мы работаем со статичными позами (асанами), уделяем внимание правильному дыханию (пранаяме) и развиваем внутреннее внимание. Подходит как абсолютным новичкам, так и тем, кто хочет углубить свою практику. Вы научитесь чувствовать тело, правильно выстраивать позы и дышать осознанно.",
    benefits: ["Гибкость и пластичность", "Снятие мышечного напряжения", "Улучшение осанки", "Развитие концентрации"],
    icon: "Sun",
  },
  {
    id: 2,
    name: "Медитация",
    type: "Ум",
    tagBg: "var(--accent)", tagColor: "var(--dark)",
    price: "1 200 ₽",
    duration: "45 мин",
    level: "Все уровни",
    img: "https://cdn.poehali.dev/projects/47f80ae3-6b49-417f-81cd-4a46ece9a3b3/files/cffc08f4-bf45-400d-a664-65809b14b0f0.jpg",
    short: "Практики осознанности, работа с умом и развитие внутреннего спокойствия.",
    full: "Медитация — это не про «ни о чём не думать». Это про то, как научиться наблюдать за своими мыслями, не захватываясь ими. На занятиях мы практикуем разные техники: сканирование тела, медитацию на дыхание, визуализацию. Каждая техника — инструмент для снижения стресса и развития ясности ума.",
    benefits: ["Снижение тревожности", "Улучшение сна", "Ясность ума", "Эмоциональный баланс"],
    icon: "Moon",
  },
  {
    id: 3,
    name: "Утренний поток",
    type: "Виньяса",
    tagBg: "var(--primary)", tagColor: "white",
    price: "1 000 ₽",
    duration: "60 мин",
    level: "Средний",
    img: "https://cdn.poehali.dev/projects/47f80ae3-6b49-417f-81cd-4a46ece9a3b3/files/fea29cc3-26b0-4540-af9c-e8c7d1835ed3.jpg",
    short: "Динамичная виньяса-флоу для заряда энергией с самого утра.",
    full: "Виньяса — это динамичная йога, где движения и дыхание синхронизированы. Утренний поток начинается с 7:30 и разогревает тело, активирует нервную систему и создаёт запас энергии на весь день. Занятие ведётся в среднем темпе — успевает и новичок с базой, и опытный практик.",
    benefits: ["Энергия на весь день", "Координация и баланс", "Сила и выносливость", "Хорошее настроение"],
    icon: "Sunrise",
  },
  {
    id: 4,
    name: "Инь Йога",
    type: "Восстановление",
    tagBg: "#d4b8c8", tagColor: "var(--dark)",
    price: "1 500 ₽",
    duration: "90 мин",
    level: "Все уровни",
    img: "https://cdn.poehali.dev/projects/47f80ae3-6b49-417f-81cd-4a46ece9a3b3/files/0f0ee2c1-1407-41ff-a8f6-e6064d4c48f4.jpg",
    short: "Долгие, мягкие удержания поз для глубокой работы с соединительной тканью.",
    full: "Инь йога — полная противоположность динамике. Каждая поза удерживается от 3 до 7 минут, что позволяет работать глубоко с фасциями, суставами и соединительной тканью. Это практика терпения, принятия и глубокого расслабления. Идеально после тяжёлого дня или тренировки.",
    benefits: ["Глубокая гибкость", "Здоровье суставов", "Расслабление нервной системы", "Принятие себя"],
    icon: "Waves",
  },
  {
    id: 5,
    name: "Sound Healing",
    type: "Исцеление",
    tagBg: "#c8d4b8", tagColor: "var(--dark)",
    price: "2 000 ₽",
    duration: "75 мин",
    level: "Все уровни",
    img: "https://cdn.poehali.dev/projects/47f80ae3-6b49-417f-81cd-4a46ece9a3b3/files/08c15326-4785-4e3d-932f-ff7735fa7892.jpg",
    short: "Исцеление звуком — тибетские чаши, кристальные поющие чаши и гонги.",
    full: "Sound Healing (звуковая терапия) — это практика, в которой вибрации тибетских чаш, кристальных чаш и гонгов воздействуют на тело и сознание. Вы просто лежите в шавасане, а звук делает всё остальное. Глубокое расслабление, снятие напряжения на клеточном уровне, состояние медитации без усилий.",
    benefits: ["Глубокое расслабление", "Снятие стресса", "Медитативное состояние", "Гармонизация"],
    icon: "Music",
  },
  {
    id: 6,
    name: "Пранаяма",
    type: "Дыхание",
    tagBg: "#b8c8d4", tagColor: "var(--dark)",
    price: "1 200 ₽",
    duration: "60 мин",
    level: "Все уровни",
    img: "https://cdn.poehali.dev/projects/47f80ae3-6b49-417f-81cd-4a46ece9a3b3/files/eabce8d7-42e8-4374-96ae-2e8e8d701b5e.jpg",
    short: "Работа с дыханием — самый мощный инструмент управления состоянием.",
    full: "Пранаяма — это система дыхательных практик, которая напрямую влияет на нервную систему. Практикуем: нади шодхана (попеременное дыхание), уджайи (океанское дыхание), капалабхати (очищение). Правильное дыхание — это ключ к управлению своей энергией, эмоциями и здоровьем.",
    benefits: ["Управление стрессом", "Повышение энергии", "Здоровье лёгких", "Ментальная ясность"],
    icon: "Wind",
  },
];

export default function Practices() {
  const [selected, setSelected] = useState<number | null>(null);

  const selectedPractice = PRACTICES.find(p => p.id === selected);

  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <Link to="/" className="logo" style={{ textDecoration: "none", color: "inherit" }}>ЗЕНИТ*ЙОГА</Link>
        <nav>
          <Link to="/schedule" style={{ textDecoration: "none", color: "var(--dark)", fontWeight: 700, marginLeft: 30, textTransform: "uppercase", fontSize: 14 }}>Расписание</Link>
          <Link to="/practices" style={{ textDecoration: "none", color: "var(--primary)", fontWeight: 800, marginLeft: 30, textTransform: "uppercase", fontSize: 14 }}>Практики</Link>
          <Link to="/about" style={{ textDecoration: "none", color: "var(--dark)", fontWeight: 700, marginLeft: 30, textTransform: "uppercase", fontSize: 14 }}>О студии</Link>
        </nav>
        <Link to="/schedule"><button className="btn-cta">Записаться</button></Link>
      </header>

      <main>
        {/* HERO */}
        <section style={{ background: "var(--primary)", color: "white", padding: "60px 40px", borderBottom: "var(--border)", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 30 }}>
          <div>
            <div style={{ fontFamily: "Unbounded, sans-serif", fontSize: 12, fontWeight: 800, color: "var(--accent)", textTransform: "uppercase", letterSpacing: 3, marginBottom: 20 }}>Наши практики</div>
            <h1 style={{ fontFamily: "Unbounded, sans-serif", fontSize: 56, fontWeight: 800, lineHeight: 0.95, textTransform: "uppercase", marginBottom: 20 }}>
              6 ПУТЕЙ
              <br />
              К <span style={{ fontFamily: "Cormorant Garamond, serif", fontStyle: "italic", fontWeight: 600 }}>себе</span>
            </h1>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.8)", maxWidth: 500, lineHeight: 1.7 }}>
              От динамичной виньясы до звуковой терапии — выбери практику, которая откликается именно сейчас.
            </p>
          </div>
          <div style={{ fontFamily: "Unbounded, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: 2 }}>
            Нажми на карточку<br />для подробностей
          </div>
        </section>

        {/* MARQUEE */}
        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * ХАТХА * ВИНЬЯСА * МЕДИТАЦИЯ * ИНЬ * АШТАНГА * ПРАНАЯМА * SOUND HEALING * НИДРА * ХАТХА * ВИНЬЯСА * МЕДИТАЦИЯ * ИНЬ * АШТАНГА * ПРАНАЯМА * SOUND HEALING * НИДРА
          </div>
        </div>

        {/* GRID */}
        <section className="section-padding">
          <div className="menu-grid">
            {PRACTICES.map(p => (
              <div
                key={p.id}
                className="menu-card"
                style={{ cursor: "pointer" }}
                onClick={() => setSelected(selected === p.id ? null : p.id)}
              >
                <span className="menu-tag" style={{ background: p.tagBg, color: p.tagColor }}>{p.type}</span>
                <img src={p.img} alt={p.name} />
                <div className="menu-card-body">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                    <h3>{p.name}</h3>
                    <span className="price">{p.price}</span>
                  </div>
                  <p style={{ fontSize: 14, color: "#7a6558", marginBottom: 14 }}>{p.short}</p>
                  <div style={{ display: "flex", gap: 16, fontSize: 12, color: "#9a8a82", flexWrap: "wrap" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Icon name="Clock" size={12} /> {p.duration}</span>
                    <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Icon name="BarChart2" size={12} /> {p.level}</span>
                  </div>
                </div>
                {/* EXPANDED */}
                {selected === p.id && (
                  <div style={{ borderTop: "var(--border)", padding: 20, background: "var(--bg)" }}>
                    <p style={{ fontSize: 14, color: "#5a4a42", lineHeight: 1.8, marginBottom: 20 }}>{p.full}</p>
                    <div style={{ marginBottom: 20 }}>
                      <div style={{ fontFamily: "Unbounded, sans-serif", fontSize: 12, fontWeight: 800, textTransform: "uppercase", marginBottom: 12, color: "var(--primary)" }}>Что развивает:</div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                        {p.benefits.map(b => (
                          <span key={b} style={{ background: "white", border: "var(--border)", padding: "4px 12px", fontSize: 12, fontWeight: 700 }}>{b}</span>
                        ))}
                      </div>
                    </div>
                    <Link to="/schedule">
                      <button className="btn-cta" style={{ background: "var(--primary)", color: "white", width: "100%" }}>
                        Записаться на {p.name}
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* PRICING SECTION */}
        <section style={{ background: "var(--dark)", color: "white", borderTop: "var(--border)", borderBottom: "var(--border)" }}>
          <div className="section-padding">
            <h2 className="section-title" style={{ color: "white", marginBottom: 50, textAlign: "center" }}>АБОНЕМЕНТЫ</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 0, border: "var(--border)" }}>
              {[
                { name: "Разовое занятие", price: "от 1 000 ₽", desc: "Попробуй любой класс без обязательств", highlight: false },
                { name: "Абонемент на 8 занятий", price: "9 600 ₽", desc: "Скидка 20% — 1 200 ₽ за занятие", highlight: false },
                { name: "Безлимит на месяц", price: "12 000 ₽", desc: "Все классы без ограничений — лучший выбор", highlight: true },
                { name: "Первое занятие", price: "Бесплатно", desc: "Приходи и почувствуй атмосферу студии", highlight: false },
              ].map((plan, i) => (
                <div key={i} style={{
                  padding: "30px 40px", borderBottom: i < 3 ? "1px solid #3a3030" : "none",
                  background: plan.highlight ? "var(--secondary)" : "transparent",
                  display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16,
                }}>
                  <div>
                    <div style={{ fontFamily: "Unbounded, sans-serif", fontSize: 18, fontWeight: 800, marginBottom: 6 }}>{plan.name}</div>
                    <div style={{ fontSize: 14, color: plan.highlight ? "rgba(255,255,255,0.8)" : "#8a7a72" }}>{plan.desc}</div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                    <div style={{ fontFamily: "Playfair Display, serif", fontSize: 28, fontWeight: 700, color: plan.highlight ? "white" : "var(--accent)" }}>{plan.price}</div>
                    <Link to="/schedule">
                      <button className="btn-cta" style={{ background: plan.highlight ? "white" : "var(--accent)", color: "var(--dark)" }}>
                        Выбрать
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer style={{ padding: "40px", background: "var(--dark)", color: "white", borderTop: "var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
        <Link to="/" style={{ fontFamily: "Unbounded, sans-serif", fontSize: 24, fontWeight: 800, color: "white", textDecoration: "none" }}>ЗЕНИТ*ЙОГА</Link>
        <div style={{ display: "flex", gap: 30, flexWrap: "wrap" }}>
          <Link to="/" style={{ color: "#8a7a72", textDecoration: "none", fontSize: 13, fontWeight: 700, textTransform: "uppercase" }}>Главная</Link>
          <Link to="/schedule" style={{ color: "#8a7a72", textDecoration: "none", fontSize: 13, fontWeight: 700, textTransform: "uppercase" }}>Расписание</Link>
          <Link to="/about" style={{ color: "#8a7a72", textDecoration: "none", fontSize: 13, fontWeight: 700, textTransform: "uppercase" }}>О студии</Link>
        </div>
        <div style={{ fontSize: 13, color: "#8a7a72" }}>+7 (495) 123-45-67</div>
      </footer>
    </>
  );
}
