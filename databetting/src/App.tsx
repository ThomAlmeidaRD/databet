
import LinkTo from "./components/LinkTo"

function App() {

  function verifyUser() {
    if (localStorage.getItem('Username') === '' || localStorage.length < 1) {
      console.log('usuario nulo')
    } else {
      console.log('usuario existente')
      LinkTo('/home')
    }
  }

  verifyUser()

  function registerUser() {
    let inputUsername = document.querySelector('input')!
    let select = document.querySelector('select')!

    if (inputUsername.value != '' && select.value != 'selecione') {

      localStorage.setItem('Username', inputUsername.value)
      localStorage.setItem('FavoriteTeam', select.value)

      LinkTo('/home')

    } else {
      alert('Os campos nao podem ser vazios')
    }

  }

  return (
    <>
      <div className="container">
        <div className="container-content">
          <h1>Bem-vindo!, selecione seu time do coração</h1>
          <p>Veja todas as estatísticas do seu time, crie e receba alertas personalizados antes e durante as patridas para fazer as melhores apostas da semana! </p>

          <input type="text" placeholder="Seu nome" id="username" />
          <select name="team" id="" placeholder="Time do Coração" required>
            <option value="selecione">
              <h3>Time do Coração</h3>
            </option>
            <option value="Corinthians">
              <img src="" alt="" />
              <h3>Corinthians</h3>
            </option>
            <option value="São Paulo">
              <img src="" alt="" />
              <h3>São Paulo</h3>
            </option>
            <option value="Palmeiras">
              <img src="" alt="" />
              <h3>Palmeiras</h3>
            </option>
          </select>

          <button className="system-button" onClick={() => registerUser()}>Avançar</button>

        </div>
      </div>
    </>
  )
}

export default App
