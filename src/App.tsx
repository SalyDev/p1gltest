import { useState } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'DM Sans', sans-serif;
    background: #f5f4f0;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .login-wrapper {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 1rem;
    background: #f5f4f0;
  }

  .login-card {
    width: 100%;
    max-width: 400px;
    background: #ffffff;
    border: 1px solid #e8e6e0;
    border-radius: 16px;
    padding: 2.5rem 2rem;
    position: relative;
  }

  .accent-bar {
    position: absolute;
    top: 0; left: 2rem; right: 2rem;
    height: 3px;
    background: linear-gradient(90deg, #534AB7, #1D9E75);
    border-radius: 0 0 4px 4px;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 2rem;
  }

  .brand-icon {
    width: 36px; height: 36px;
    background: #EEEDFE;
    border-radius: 8px;
    display: flex; align-items: center; justify-content: center;
    color: #534AB7;
    font-size: 20px;
    font-weight: bold;
  }

  .brand-name {
    font-family: 'DM Serif Display', serif;
    font-size: 20px;
    color: #1a1a1a;
    letter-spacing: -0.3px;
  }

  .login-title {
    font-family: 'DM Serif Display', serif;
    font-size: 26px;
    font-weight: 400;
    color: #1a1a1a;
    margin-bottom: 4px;
    letter-spacing: -0.5px;
  }

  .login-sub {
    font-size: 13px;
    color: #888780;
    margin-bottom: 2rem;
    font-weight: 300;
  }

  .field { margin-bottom: 1.25rem; }

  .field label {
    display: block;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: #5F5E5A;
    margin-bottom: 6px;
  }

  .field-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 6px;
  }

  .field input {
    width: 100%;
    height: 42px;
    border: 1px solid #D3D1C7;
    border-radius: 8px;
    padding: 0 12px;
    font-size: 14px;
    font-family: 'DM Sans', sans-serif;
    background: #fafaf8;
    color: #1a1a1a;
    transition: border-color 0.15s, box-shadow 0.15s;
    outline: none;
  }

  .field input:focus {
    border-color: #534AB7;
    box-shadow: 0 0 0 3px rgba(83, 74, 183, 0.12);
  }

  .field input.error { border-color: #E24B4A; }

  .forgot {
    font-size: 12px;
    color: #534AB7;
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
    font-family: 'DM Sans', sans-serif;
    font-weight: 500;
  }

  .forgot:hover { text-decoration: underline; }

  .remember-row {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 1.25rem;
  }

  .remember-row input[type="checkbox"] {
    width: 15px; height: 15px;
    accent-color: #534AB7;
    cursor: pointer;
  }

  .remember-row label {
    font-size: 13px;
    color: #5F5E5A;
    cursor: pointer;
    font-weight: 400;
  }

  .btn-login {
    width: 100%;
    height: 44px;
    background: #534AB7;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    font-family: 'DM Sans', sans-serif;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: background 0.15s, transform 0.1s;
  }

  .btn-login:hover { background: #3C3489; }
  .btn-login:active { transform: scale(0.98); }
  .btn-login:disabled { background: #AFA9EC; cursor: not-allowed; }

  .divider {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 1.25rem 0;
    font-size: 12px;
    color: #B4B2A9;
  }

  .divider::before, .divider::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #e8e6e0;
  }

  .btn-google {
    width: 100%;
    height: 44px;
    background: #ffffff;
    border: 1px solid #D3D1C7;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 400;
    font-family: 'DM Sans', sans-serif;
    color: #1a1a1a;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: background 0.15s;
  }

  .btn-google:hover { background: #fafaf8; }

  .signup-row {
    text-align: center;
    margin-top: 1.5rem;
    font-size: 13px;
    color: #5F5E5A;
  }

  .signup-row button {
    color: #534AB7;
    font-weight: 500;
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
  }

  .signup-row button:hover { text-decoration: underline; }

  .error-msg {
    font-size: 12px;
    color: #E24B4A;
    margin-top: 4px;
  }

  .success-banner {
    background: #EAF3DE;
    border: 1px solid #97C459;
    border-radius: 8px;
    padding: 10px 14px;
    font-size: 13px;
    color: #3B6D11;
    margin-bottom: 1rem;
  }
`;

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908C16.658 14.233 17.64 11.925 17.64 9.2Z" fill="#4285F4"/>
    <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18Z" fill="#34A853"/>
    <path d="M3.964 10.706A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.038l3.007-2.332Z" fill="#FBBC05"/>
    <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.962L3.964 7.294C4.672 5.163 6.656 3.58 9 3.58Z" fill="#EA4335"/>
  </svg>
);

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState({password: "", email: ""});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const errs = {password: "", email: ""};
    if (!email) errs.email = "L'adresse e-mail est requise.";
    else if (!/\S+@\S+\.\S+/.test(email)) errs.email = "Adresse e-mail invalide.";
    if (!password) errs.password = "Le mot de passe est requis.";
    else if (password.length < 6) errs.password = "Minimum 6 caractères.";
    return errs;
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({password: "", email: ""});
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1200);
  };

  const handleGoogle = () => {
    alert("Connexion Google non configurée.");
  };

  return (
    <>
      <style>{styles}</style>
      <div className="login-wrapper">
        <div className="login-card">
          <div className="accent-bar" />

          <div className="brand">
            <div className="brand-icon">⚡</div>
            <span className="brand-name">Mon Application P1GL</span>
          </div>

          {success && (
            <div className="success-banner">
              ✓ Connexion réussie ! Redirection en cours…
            </div>
          )}

          <h1 className="login-title">Bon retour.</h1>
          <p className="login-sub">Connectez-vous à votre espace de travail</p>

          <form onSubmit={handleLogin} noValidate>
            <div className="field">
              <label htmlFor="email">Adresse e-mail</label>
              <input
                id="email"
                type="email"
                placeholder="vous@exemple.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={errors.email ? "error" : ""}
                autoComplete="email"
              />
              {errors.email && <p className="error-msg">{errors.email}</p>}
            </div>

            <div className="field">
              <div className="field-row">
                <label htmlFor="password">Mot de passe</label>
                <button type="button" className="forgot">Oublié ?</button>
              </div>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={errors.password ? "error" : ""}
                autoComplete="current-password"
              />
              {errors.password && <p className="error-msg">{errors.password}</p>}
            </div>

            <div className="remember-row">
              <input
                type="checkbox"
                id="remember"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              <label htmlFor="remember">Se souvenir de moi</label>
            </div>

            <button type="submit" className="btn-login" disabled={loading || success}>
              {loading ? "Connexion…" : "→ Se connecter"}
            </button>
          </form>

          <div className="divider">ou</div>

          <button className="btn-google" onClick={handleGoogle}>
            <GoogleIcon />
            SE CONNECTER avec Google
          </button>

          <p className="signup-row">
            Pas encore de compte ?{" "}
            <button type="button">S'inscrire</button>
          </p>
        </div>
      </div>
    </>
  );
}
