import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
    return(
        <div>
            <h1>{props.kurssi}</h1>
            </div>
    )
}

const Sisalto = (props) => {
    return (
        <div>
            <Osa teksti={props.osat[0].nimi} tehtavat={props.osat[0].tehtavia} />
            <Osa teksti={props.osat[1].nimi} tehtavat={props.osat[1].tehtavia} />
            <Osa teksti={props.osat[2].nimi} tehtavat={props.osat[2].tehtavia} />
        </div>
    )
}

const Yhteensa = (props) => {
    let summa = props.osat[0].tehtavia + props.osat[1].tehtavia + props.osat[2].tehtavia
    return (
        <div>
            <p>yhteensä {summa} tehtävää</p>
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
    const osat = [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14
      }
    ]
  
    return (
      <div>
            <Otsikko kurssi={kurssi} />
            <Sisalto osat={osat} />
            <Yhteensa osat={osat} />
      </div>
    )
  }

/*
const App = () => {
    const kurssi = 'Half Stack -sovelluskehitys'
    const osa1 = {
      nimi: 'Reactin perusteet',
      tehtavia: 10
    }
    const osa2 = {
      nimi: 'Tiedonvälitys propseilla',
      tehtavia: 7
    }
    const osa3 = {
      nimi: 'Komponenttien tila',
      tehtavia: 14
    }
  
    return (
      <div>
        <Otsikko otsikko={kurssi} />
        <Sisalto teksti1={osa1.nimi} tehtavat1={osa1.tehtavia} teksti2={osa2.nimi} tehtavat2={osa2.tehtavia} teksti3={osa3.nimi} tehtavat3={osa3.tehtavia} />
        <Yhteensa summa={osa1.tehtavia + osa2.tehtavia + osa3.tehtavia} />
      </div>
    )
  }*/

ReactDOM.render(
  <App />,
  document.getElementById('root')
)