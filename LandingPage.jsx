import React from "react";

function LandingPage() {
  return (
    <div className="page">

      <section className="hero">
        <h1>ברוכים הבאים לאתר שלנו</h1>
        <p>פלטפורמה חכמה לניהול ותוכן</p>
        <button>התחל עכשיו</button>
      </section>

      <section className="search">
        <input type="text" placeholder="חפש כאן..." />
        <button>חיפוש</button>
      </section>

      <section className="featured">
        <h2>תכנים מומלצים</h2>

        <div className="cards">
          <div className="card">
            <h3>כרטיס 1</h3>
            <p>תיאור קצר של תוכן</p>
          </div>

          <div className="card">
            <h3>כרטיס 2</h3>
            <p>תיאור קצר של תוכן</p>
          </div>

          <div className="card">
            <h3>כרטיס 3</h3>
            <p>תיאור קצר של תוכן</p>
          </div>
        </div>
      </section>

      <section className="newsletter">
        <h2>הרשמה לעדכונים</h2>
        <input type="email" placeholder="האימייל שלך" />
        <button>הרשמה</button>
      </section>

    </div>
  );
}

export default LandingPage;
