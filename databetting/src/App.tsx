import notify from "./components/Notify"

function App() {
  
  return (
    <>
      <h1>Hello</h1>
      <button onClick={() => notify("Databetting", {
        body: "Novo Alerta de partida",
        icon: "/vite.svg"
      })}>Notify me!</button>
    </>
  )
}

export default App
