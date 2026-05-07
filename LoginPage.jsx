import React from "react";

function LoginPage() {
  return (
    <div className="page login-page">

      <h1>התחברות</h1>

      <form className="login-form">

        <input type="email" placeholder="אימייל" />
        <input type="password" placeholder="סיסמה" />

        <div className="remember">
          <input type="checkbox" />
          <label>זכור אותי</label>
        </div>

        <button type="submit">כניסה</button>
      </form>

    </div>
  );
}

export default LoginPage;
