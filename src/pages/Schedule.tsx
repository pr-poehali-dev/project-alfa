import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const DAYS = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];

const ALL_CLASSES = [
  { day: "Понедельник", time: "07:30", name: "Утренний поток", teacher: "Анна К.", level: "Все уровни", duration: 60, spots: 4, price: 1000, type: "Виньяса" },
  { day: "Понедельник", time: "12:00", name: "Хатха Йога", teacher: "Лариса В.", level: "Начинающие", duration: 75, spots: 9, price: 1500, type: "Хатха" },
  { day: "Понедельник", time: "19:00", name: "Инь Йога", teacher: "Сергей М.", level: "Все уровни", duration: 90, spots: 8, price: 1500, type: "Инь" },
  { day: "Вторник", time: "08:00", name: "Медитация", teacher: "Лариса В.", level: "Все уровни", duration: 45, spots: 12, price: 1200, type: "Медитация" },
  { day: "Вторник", time: "18:30", name: "Виньяса Флоу", teacher: "Анна К.", level: "Средний", duration: 60, spots: 5, price: 1500, type: "Виньяса" },
  { day: "Вторник", time: "20:00", name: "Пранаяма", teacher: "Сергей М.", level: "Все уровни", duration: 60, spots: 10, price: 1200, type: "Пранаяма" },
  { day: "Среда", time: "07:30", name: "Утренний поток", teacher: "Сергей М.", level: "Все уровни", duration: 60, spots: 3, price: 1000, type: "Виньяса" },
  { day: "Среда", time: "11:00", name: "Хатха для начинающих", teacher: "Лариса В.", level: "Начинающие", duration: 75, spots: 7, price: 1500, type: "Хатха" },
  { day: "Среда", time: "20:00", name: "Йога-Нидра", teacher: "Анна К.", level: "Все уровни", duration: 60, spots: 11, price: 1200, type: "Медитация" },
  { day: "Четверг", time: "08:00", name: "Аштанга", teacher: "Сергей М.", level: "Продвинутый", duration: 90, spots: 6, price: 2000, type: "Аштанга" },
  { day: "Четверг", time: "19:00", name: "Инь Йога", teacher: "Лариса В.", level: "Все уровни", duration: 90, spots: 9, price: 1500, type: "Инь" },
  { day: "Пятница", time: "07:30", name: "Утренний поток", teacher: "Анна К.", level: "Все уровни", duration: 60, spots: 2, price: 1000, type: "Виньяса" },
  { day: "Пятница", time: "18:30", name: "Sound Healing", teacher: "Лариса В.", level: "Все уровни", duration: 75, spots: 12, price: 2000, type: "Sound" },
  { day: "Пятница", time: "20:00", name: "Виньяса Флоу", teacher: "Сергей М.", level: "Средний", duration: 60, spots: 7, price: 1500, type: "Виньяса" },
  { day: "Суббота", time: "09:00", name: "Хатха Йога", teacher: "Анна К.", level: "Все уровни", duration: 90, spots: 8, price: 1500, type: "Хатха" },
  { day: "Суббота", time: "11:00", name: "Sound Healing", teacher: "Лариса В.", level: "Все уровни", duration: 90, spots: 10, price: 2000, type: "Sound" },
  { day: "Суббота", time: "14:00", name: "Медитация", teacher: "Сергей М.", level: "Все уровни", duration: 60, spots: 5, price: 1200, type: "Медитация" },
  { day: "Воскресенье", time: "10:00", name: "Инь Йога", teacher: "Анна К.", level: "Все уровни", duration: 90, spots: 9, price: 1500, type: "Инь" },
  { day: "Воскресенье", time: "12:00", name: "Пранаяма", teacher: "Лариса В.", level: "Все уровни", duration: 60, spots: 11, price: 1200, type: "Пранаяма" },
];

const TYPE_COLORS: Record<string, { bg: string; color: string }> = {
  "Виньяса": { bg: "var(--primary)", color: "white" },
  "Хатха": { bg: "var(--secondary)", color: "white" },
  "Медитация": { bg: "var(--accent)", color: "var(--dark)" },
  "Инь": { bg: "#d4b8c8", color: "var(--dark)" },
  "Пранаяма": { bg: "#b8c8d4", color: "var(--dark)" },
  "Sound": { bg: "#c8d4b8", color: "var(--dark)" },
  "Аштанга": { bg: "var(--dark)", color: "white" },
};

export default function Schedule() {
  const [activeDay, setActiveDay] = useState("Понедельник");
  const [showForm, setShowForm] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [booked, setBooked] = useState<string[]>([]);

  const dayClasses = ALL_CLASSES.filter(c => c.day === activeDay);

  const handleBook = (className: string) => {
    setBooked(prev => [...prev, className]);
    setShowForm(null);
    setFormData({ name: "", phone: "" });
  };

  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <Link to="/" className="logo" style={{ textDecoration: "none", color: "inherit" }}>ЗЕНИТ*ЙОГА</Link>
        <nav>
          <Link to="/schedule" style={{ textDecoration: "none", color: "var(--primary)", fontWeight: 800, marginLeft: 30, textTransform: "uppercase", fontSize: 14 }}>Расписание</Link>
          <Link to="/practices" style={{ textDecoration: "none", color: "var(--dark)", fontWeight: 700, marginLeft: 30, textTransform: "uppercase", fontSize: 14 }}>Практики</Link>
          <Link to="/about" style={{ textDecoration: "none", color: "var(--dark)", fontWeight: 700, marginLeft: 30, textTransform: "uppercase", fontSize: 14 }}>О студии</Link>
        </nav>
        <Link to="/schedule"><button className="btn-cta">Записаться</button></Link>
      </header>

      <main>
        {/* PAGE HERO */}
        <section style={{ background: "var(--dark)", color: "white", padding: "60px 40px", borderBottom: "var(--border)" }}>
          <div style={{ maxWidth: 700 }}>
            <div style={{ fontFamily: "Unbounded, sans-serif", fontSize: 12, fontWeight: 800, color: "var(--accent)", textTransform: "uppercase", letterSpacing: 3, marginBottom: 20 }}>Расписание занятий</div>
            <h1 style={{ fontFamily: "Unbounded, sans-serif", fontSize: 56, fontWeight: 800, lineHeight: 0.95, textTransform: "uppercase", marginBottom: 24 }}>
              ТВОЙ
              <br />
              <span style={{ fontFamily: "Cormorant Garamond, serif", fontStyle: "italic", color: "var(--accent)", fontWeight: 600 }}>идеальный</span>
              <br />
              ДЕНЬ
            </h1>
            <p style={{ fontSize: 18, color: "#a09088", lineHeight: 1.7 }}>Выбирай класс, который подходит именно тебе. Первое занятие — бесплатно.</p>
          </div>
        </section>

        {/* DAY TABS */}
        <div style={{ borderBottom: "var(--border)", background: "white", overflowX: "auto" }}>
          <div style={{ display: "flex", minWidth: "max-content" }}>
            {DAYS.map(day => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                style={{
                  padding: "20px 24px", border: "none", borderRight: "var(--border)",
                  background: activeDay === day ? "var(--dark)" : "white",
                  color: activeDay === day ? "white" : "var(--dark)",
                  fontWeight: 800, fontSize: 13, textTransform: "uppercase", cursor: "pointer",
                  fontFamily: "Unbounded, sans-serif", transition: "0.2s",
                }}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* CLASSES LIST */}
        <section className="section-padding">
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {dayClasses.length === 0 && (
              <div style={{ textAlign: "center", padding: 60, color: "#8a7a72" }}>Занятий в этот день нет</div>
            )}
            {dayClasses.map((cls, i) => {
              const tc = TYPE_COLORS[cls.type] || { bg: "#eee", color: "#333" };
              const isBooked = booked.includes(`${cls.day}-${cls.time}`);
              return (
                <div key={i} style={{ border: "var(--border)", background: "white", display: "flex", flexDirection: "column", gap: 0, transition: "0.3s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow)"; (e.currentTarget as HTMLElement).style.transform = "translate(-4px,-4px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.transform = "none"; }}>
                  <div style={{ display: "flex", alignItems: "stretch", flexWrap: "wrap" }}>
                    {/* TIME */}
                    <div style={{ background: "var(--dark)", color: "white", padding: "20px 24px", display: "flex", alignItems: "center", minWidth: 100, borderRight: "var(--border)" }}>
                      <div style={{ fontFamily: "Unbounded, sans-serif", fontSize: 22, fontWeight: 800 }}>{cls.time}</div>
                    </div>
                    {/* INFO */}
                    <div style={{ flex: 1, padding: "20px 24px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8, flexWrap: "wrap" }}>
                        <span style={{ fontFamily: "Unbounded, sans-serif", fontSize: 18, fontWeight: 800 }}>{cls.name}</span>
                        <span style={{ background: tc.bg, color: tc.color, padding: "3px 10px", fontSize: 11, fontWeight: 800, textTransform: "uppercase" }}>{cls.type}</span>
                      </div>
                      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                        <span style={{ fontSize: 13, color: "#7a6558", display: "flex", alignItems: "center", gap: 5 }}>
                          <Icon name="User" size={14} /> {cls.teacher}
                        </span>
                        <span style={{ fontSize: 13, color: "#7a6558", display: "flex", alignItems: "center", gap: 5 }}>
                          <Icon name="Clock" size={14} /> {cls.duration} мин
                        </span>
                        <span style={{ fontSize: 13, color: "#7a6558", display: "flex", alignItems: "center", gap: 5 }}>
                          <Icon name="BarChart2" size={14} /> {cls.level}
                        </span>
                      </div>
                    </div>
                    {/* PRICE + BOOKING */}
                    <div style={{ borderLeft: "var(--border)", padding: "20px 24px", display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "center", gap: 12, minWidth: 160 }}>
                      <div style={{ fontFamily: "Playfair Display, serif", fontSize: 24, fontWeight: 700, color: "var(--secondary)" }}>{cls.price} ₽</div>
                      <div style={{ fontSize: 12, color: cls.spots <= 4 ? "#c0392b" : "#7a6558", fontWeight: 700 }}>
                        {cls.spots <= 4 ? `⚠ Осталось ${cls.spots} места` : `${cls.spots} мест`}
                      </div>
                      {isBooked ? (
                        <div style={{ background: "var(--accent)", border: "var(--border)", padding: "8px 16px", fontSize: 12, fontWeight: 800, textTransform: "uppercase" }}>
                          ✓ Записан
                        </div>
                      ) : (
                        <button
                          className="btn-cta"
                          style={{ background: "var(--primary)", color: "white", fontSize: 12 }}
                          onClick={() => setShowForm(`${cls.day}-${cls.time}`)}
                        >
                          Записаться
                        </button>
                      )}
                    </div>
                  </div>

                  {/* INLINE FORM */}
                  {showForm === `${cls.day}-${cls.time}` && (
                    <div style={{ borderTop: "var(--border)", padding: "24px", background: "var(--bg)", display: "flex", gap: 12, flexWrap: "wrap", alignItems: "flex-end" }}>
                      <div>
                        <label style={{ fontSize: 12, fontWeight: 800, textTransform: "uppercase", display: "block", marginBottom: 6 }}>Имя</label>
                        <input
                          type="text"
                          placeholder="Твоё имя"
                          value={formData.name}
                          onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                          style={{ border: "var(--border)", padding: "10px 14px", fontSize: 14, background: "white", outline: "none", width: 200 }}
                        />
                      </div>
                      <div>
                        <label style={{ fontSize: 12, fontWeight: 800, textTransform: "uppercase", display: "block", marginBottom: 6 }}>Телефон</label>
                        <input
                          type="tel"
                          placeholder="+7 (___) ___-__-__"
                          value={formData.phone}
                          onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                          style={{ border: "var(--border)", padding: "10px 14px", fontSize: 14, background: "white", outline: "none", width: 200 }}
                        />
                      </div>
                      <button
                        className="btn-cta"
                        style={{ background: "var(--dark)", color: "white" }}
                        onClick={() => handleBook(`${cls.day}-${cls.time}`)}
                      >
                        Подтвердить запись
                      </button>
                      <button
                        style={{ background: "none", border: "none", fontSize: 13, color: "#8a7a72", cursor: "pointer", fontWeight: 700 }}
                        onClick={() => setShowForm(null)}
                      >
                        Отмена
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* LEGEND */}
        <section className="section-padding" style={{ borderTop: "var(--border)", background: "white" }}>
          <h3 style={{ fontFamily: "Unbounded, sans-serif", fontSize: 16, fontWeight: 800, textTransform: "uppercase", marginBottom: 24 }}>Типы практик</h3>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {Object.entries(TYPE_COLORS).map(([type, style]) => (
              <div key={type} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 16, height: 16, background: style.bg, border: "2px solid var(--dark)" }} />
                <span style={{ fontSize: 13, fontWeight: 700 }}>{type}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer style={{ padding: "40px", background: "var(--dark)", color: "white", borderTop: "var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
        <Link to="/" style={{ fontFamily: "Unbounded, sans-serif", fontSize: 24, fontWeight: 800, color: "white", textDecoration: "none" }}>ЗЕНИТ*ЙОГА</Link>
        <div style={{ display: "flex", gap: 30, flexWrap: "wrap" }}>
          <Link to="/" style={{ color: "#8a7a72", textDecoration: "none", fontSize: 13, fontWeight: 700, textTransform: "uppercase" }}>Главная</Link>
          <Link to="/practices" style={{ color: "#8a7a72", textDecoration: "none", fontSize: 13, fontWeight: 700, textTransform: "uppercase" }}>Практики</Link>
          <Link to="/about" style={{ color: "#8a7a72", textDecoration: "none", fontSize: 13, fontWeight: 700, textTransform: "uppercase" }}>О студии</Link>
        </div>
        <div style={{ fontSize: 13, color: "#8a7a72" }}>+7 (495) 123-45-67</div>
      </footer>
    </>
  );
}
