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
/*
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
  }*/

  const App = () => {
    const kurssi = {
      nimi: 'Half Stack -sovelluskehitys',
      osat: [
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
    }
  
    return (
      <div>
            <Otsikko kurssi={kurssi.nimi} />
            <Sisalto osat={kurssi.osat} />
            <Yhteensa osat={kurssi.osat} />
      </div>
    )
  }


ReactDOM.render(
  <App />,
  document.getElementById('root')
)