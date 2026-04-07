import './App.css';

function App() {
  return (
    <main className="login-container">
      
      <section className="promo-panel">
        <h1 className="promo-title">COM DEVSEM TUDO É POSSÍVEL</h1>
        <p className="promo-text">
          DEVSEM cria soluções digitais modernas, transformando ideias em 
          tecnologia eficiente e inovadora.
        </p>
        <button className="promo-btn">Saiba Mais</button>
      </section>

      <section className="form-section">
        <header className="form-header">
          <h1 className="form-title">CRIE SUA CONTA</h1>
        </header>

        <form className="login-form">
          <div className="input-group">
            <label htmlFor="email">Digite Seu Email:</label>
            <input 
              id="email"
              type="email" 
              placeholder="Seu email..." 
              required 
              autoComplete="email"
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Crie Uma Senha:</label>
            <input 
              id="password"
              type="password" 
              placeholder="Sua senha..." 
              required 
              autoComplete="new-password"
            />
          </div>

          <button type="submit" className="primary-btn large">CRIAR CONTA</button>
        </form>

        <div className="divider">
          <span></span>
          <p>ou continue com</p>
          <span></span>
        </div>

        <div className="social-grid">
          <button className="social-btn google" type="button">
            Google
          </button>
          <button className="social-btn facebook" type="button">
            Facebook
          </button>
        </div>

        <p className="login-link">
          Já possui uma conta? <span className="login-link-highlight">Entrar</span>
        </p>
      </section>
    </main>
  );
}

export default App;

