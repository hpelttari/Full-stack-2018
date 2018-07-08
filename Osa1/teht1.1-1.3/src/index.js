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
  }

ReactDOM.render(
  <App />,
  document.getElementById('root')
)