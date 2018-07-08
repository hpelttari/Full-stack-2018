import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
    return(
        <div>
            <h1>{props.otsikko}</h1>
            </div>
    )
}

const Sisalto = (props) => {
    return (
        <div>
            <p>{props.teksti} {props.tehtavat}</p>
            </div>
    )
}

const Yhteensa = (props) => {
    return (
        <div>
            <p>yhteensä {props.summa} tehtävää</p>
            </div>
    )
}

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osa1 = 'Reactin perusteet'
  const tehtavia1 = 10
  const osa2 = 'Tiedonvälitys propseilla'
  const tehtavia2 = 7
  const osa3 = 'Komponenttien tila'
  const tehtavia3 = 14

  return (
    <div>
      <Otsikko otsikko={kurssi} />
      <Sisalto teksti={osa1} tehtavat={tehtavia1} />
      <Sisalto teksti={osa2} tehtavat={tehtavia2} />
      <Sisalto teksti={osa3} tehtavat={tehtavia3} />
      <Yhteensa summa={tehtavia1 + tehtavia2 + tehtavia3} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)