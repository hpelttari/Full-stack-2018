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
            <Osa teksti={props.teksti1} tehtavat={props.tehtavat1} />
            <Osa teksti={props.teksti2} tehtavat={props.tehtavat2} />
            <Osa teksti={props.teksti3} tehtavat={props.tehtavat3} />
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

const Osa = (props) => {
    return (
        <div>
            <p>{props.teksti} {props.tehtavat}</p>
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
      <Sisalto teksti1={osa1} tehtavat1={tehtavia1} teksti2={osa2} tehtavat2={tehtavia2} teksti3={osa3} tehtavat3={tehtavia3} />
      <Yhteensa summa={tehtavia1 + tehtavia2 + tehtavia3} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)