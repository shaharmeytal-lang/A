import React from "react";

function DashboardPage() {
  return (
    <div className="page dashboard">

      <aside className="sidebar">
        <ul>
          <li>דשבורד</li>
          <li>משתמשים</li>
          <li>הגדרות</li>
        </ul>
      </aside>

      <main className="content">

        <h1>דשבורד ראשי</h1>

        <div className="cards">
          <div className="card">
            <h3>נתון 1</h3>
            <p>מידע כללי</p>
          </div>

          <div className="card">
            <h3>נתון 2</h3>
            <p>מידע כללי</p>
          </div>

          <div className="card">
            <h3>נתון 3</h3>
            <p>מידע כללי</p>
          </div>
        </div>

        <button>פעולה ראשית</button>

      </main>

    </div>
  );
}

export default DashboardPage;
