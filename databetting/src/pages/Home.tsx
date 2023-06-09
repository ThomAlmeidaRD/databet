import { useRef } from "react"

export default function Home() {

    const username = useRef<HTMLParagraphElement>(null)

    function loadUsername() {
        if (username.current) {
            let dbUser = localStorage.getItem('Username')!
            username.current.innerText = 'Olá, ' + dbUser
        }
    }

    loadUsername()

    return (
        <div className="container">
            <div className="container-content">

                <p ref={username} id="username"></p>

                <div className="match-teams shadow">
                    <section className="team-infos">
                        <img src="https://upload.wikimedia.org/wikipedia/sco/thumb/e/eb/Manchester_City_FC_badge.svg/2048px-Manchester_City_FC_badge.svg.png" alt="" />
                        <h2>Man. City</h2>
                    </section>
                    <h3>v</h3>
                    <section className="team-infos">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/FC_Internazionale_Milano_2014.svg/2048px-FC_Internazionale_Milano_2014.svg.png" alt="" />
                        <h2>Inter</h2>
                    </section>
                </div>
                <button>Ativar Alertas 🔔</button>

                <h4>Alertas Pré-jogo ⏱ </h4>

                <div className="alerts">

                    <div className="pre-alert shadow">
                        <section className="player-img">
                            <img src="https://upload.wikimedia.org/wikipedia/sco/thumb/e/eb/Manchester_City_FC_badge.svg/2048px-Manchester_City_FC_badge.svg.png" alt="" />
                        </section>

                        <section className="pre-alert-info">
                            <p>Favorito</p>
                            <h4>Team Name</h4>
                        </section>
                    </div>

                    <div className="pre-alert shadow">
                        <section className="player-img">
                            <img src="https://www.mancity.com/meta/media/e2lawnab/erling-haaland.png" alt="" />
                        </section>

                        <section className="pre-alert-info">
                            <p>Primeiro Gol</p>
                            <h4>Player Name</h4>
                            <p>Aos <b>'15</b> do Primeiro Tempo </p>
                        </section>
                    </div>

                    <div className="pre-alert shadow">
                        <section className="player-img">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/FC_Internazionale_Milano_2014.svg/2048px-FC_Internazionale_Milano_2014.svg.png" alt="" />
                        </section>

                        <section className="pre-alert-info">
                            <p>Possse de Bola</p>
                            <h4>Team Name</h4>
                            <p><b>{'>'} 40%</b> Durante o primeiro tempo</p>
                        </section>
                    </div>
                    <div className="pre-alert shadow">
                        <section className="player-img">
                            <img src="https://upload.wikimedia.org/wikipedia/sco/thumb/e/eb/Manchester_City_FC_badge.svg/2048px-Manchester_City_FC_badge.svg.png" alt="" />
                        </section>

                        <section className="pre-alert-info">
                            <p>Escanteios</p>
                            <h4>Team Name</h4>
                            <p><b>5</b> Durante o primeiro tempo</p>
                        </section>
                    </div>

                </div>

                <h4>Alertas Ao-vivo 📢</h4>

                <div className="alerts shadow">
                    <div className="pre-alert">
                        <section className="player-img">
                            <img src="https://www.mancity.com/meta/media/e2lawnab/erling-haaland.png" alt="" />
                        </section>

                        <section className="pre-alert-info">
                            <p>Primeiro Gol</p>
                            <h4>Player Name</h4>
                            <p>Aos <b>'15</b> do Primeiro Tempo </p>
                        </section>
                    </div>

                </div>

            </div>
        </div>
    )
}

