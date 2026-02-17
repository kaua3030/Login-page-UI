import './App.css'

function App() {

  return (

    <>

    <main id='main1'>


      <div id='conteudomain'>

        <h1 id='titulo'>CRIE SUA CONTA</h1>

        <div id='inputs'>

          <div className='grupo'>
            <p>Digite Seu Email: </p>
            <input type="email" placeholder='Seu email...' />
          </div>

          <div className='grupo'>
            <p>Crie Uma Senha: </p>
            <input type="password" placeholder='Sua senha...' />
          </div>

          <button id='btnCriar'>CRIAR CONTA</button>

          <div id="divisor">
            <span></span>
            <p>ou continue com</p>
            <span></span>
          </div>

          <div id="social">
            <button className="btnSocial google">Google</button>
            <button className="btnSocial facebook">Facebook</button>
          </div>

          <p id="loginLink">
            Já possui uma conta? <span>Entrar</span>
          </p>

        </div>

      </div>

      <div id='janela'>
        <h1 id='titulojanela'>
            COM DEVSEM TUDO É POSSÍVEL
        </h1>

        <br />

        <p id='pjanela'>
          DEVSEM cria soluções digitais modernas, transformando ideias em tecnologia eficiente e inovadora.
        </p>

        
        
      </div>

    </main>


    
    </>
  )
}

export default App
