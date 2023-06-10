import { useRef } from "react"
import notify from "./components/Notify"

export default function Home() {

    const username = useRef<HTMLParagraphElement>(null)
    const teamHomeImg = useRef<HTMLImageElement>(null)
    const teamAwayImg = useRef<HTMLImageElement>(null)
    const teamHomeName = useRef<HTMLParagraphElement>(null)
    const teamAwayName = useRef<HTMLParagraphElement>(null)
    const firstGoal = useRef<HTMLParagraphElement>(null)
    const alertDiv = useRef<HTMLDivElement>(null)
    const teamIcon = useRef<HTMLImageElement>(null)

    let teamAGoals: number
    let teamBGoals: number

    function getFinal() {
        // Partida da Final
        fetch("https://v3.football.api-sports.io/fixtures?id=1027909",
            {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "v3.football.api-sports.io",
                    "x-rapidapi-key": "c0c99d1d10c719c858bcdcdf31134c83"
                }
            }
        )
            .then(response => response.json())
            .then(data => {

                console.log(data)

                if (teamHomeImg.current && teamAwayImg.current && teamHomeName.current && teamAwayName.current) {
                    teamHomeImg.current.src = data.response[0].teams.home.logo
                    teamAwayImg.current.src = data.response[0].teams.away.logo
                    teamHomeName.current.innerHTML = data.response[0].teams.home.name
                    teamAwayName.current.innerHTML = data.response[0].teams.away.name
                }


            })
    }

    function calcFirstGoal() {

        if (alertDiv.current) {
            alertDiv.current.style.display = "block"
        }

        const fetchTeamA = fetch("https://v3.football.api-sports.io/teams/statistics?league=2&season=2022&team=50",
            {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "v3.football.api-sports.io",
                    "x-rapidapi-key": "c0c99d1d10c719c858bcdcdf31134c83"
                }
            }
        )
            .then(response => response.json())
            .then(data => {

                teamAGoals = data.response.goals.for.minute["0-15"].total + data.response.goals.for.minute["16-30"].total + data.response.goals.for.minute["31-45"].total
                //console.log(teamAGoals)

            })

        const fetchTeamB = fetch("https://v3.football.api-sports.io/teams/statistics?league=2&season=2022&team=505",
            {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "v3.football.api-sports.io",
                    "x-rapidapi-key": "c0c99d1d10c719c858bcdcdf31134c83"
                }
            }
        )
            .then(response => response.json())
            .then(data => {

                teamBGoals = data.response.goals.for.minute["0-15"].total + data.response.goals.for.minute["16-30"].total + data.response.goals.for.minute["31-45"].total
                //console.log(teamBGoals)

            })


        //comparar qual o maior
        Promise.all([fetchTeamA, fetchTeamB])
            .then(() => {
                if (teamAGoals > teamBGoals && firstGoal.current && teamHomeImg.current && teamIcon.current) {
                    firstGoal.current.innerHTML = "Manchester City"
                    teamIcon.current.src = teamHomeImg.current.src
                } else if (teamBGoals > teamAGoals && firstGoal.current && teamAwayImg.current && teamIcon.current) {
                    teamIcon.current.src = teamAwayImg.current.src
                    firstGoal.current.innerHTML = "Inter"
                }
            })

    }

    getFinal()

    return (
        <div className="container">
            <div className="container-content">

                <p ref={username} id="username"></p>

                <div className="match-teams shadow">
                    <section className="team-infos">
                        <img ref={teamHomeImg} src="" alt="" />
                        <h2 ref={teamHomeName}></h2>
                    </section>
                    <h3>v</h3>
                    <section className="team-infos">
                        <img ref={teamAwayImg} src="" alt="" />
                        <h2 ref={teamAwayName}></h2>
                    </section>
                </div>

                <button onClick={() => calcFirstGoal()}>
                    Ativar Alertas 🔔
                </button>

                <h4>Estatísticas</h4>
                <div className="alerts" ref={alertDiv}>
                    <h3>Gol no Primeiro Tempo</h3>
                    <br />
                    <section>
                        <img ref={teamIcon} alt="" />
                        <h2 ref={firstGoal}></h2>
                    </section>
                    <p>Baseados nos gols em tempo de jogo do time, provavelmente o time marcará logo no primeiro tempo.</p>
                </div>

            </div>
        </div>
    )
}

