import React from 'react';
import ReactDOM from 'react-dom';



class App extends React.Component {
    constructor() {
      super()
      this.state = {
        hyva: 0,
        neutraali: 0,
        huono: 0
      }
    }

    render(){

        
        const hyva = (newValue) => () => { 
            this.setState({ hyva: newValue })
          }

          const huono = (newValue) => () => { 
            this.setState({ huono: newValue })
          }

          const neutraali = (newValue) => () => { 
            this.setState({ neutraali: newValue })
          }

      return (
        <div>
        <h1>anna palautetta</h1>
          <button  onClick={hyva(this.state.hyva+1)}>hyvä</button>
          <button onClick={neutraali(this.state.neutraali+1)}>neutraali</button>
          <button onClick={huono(this.state.huono+1)}>huono</button>
        <h1>statistiikka</h1>
          <p>hyvä {this.state.hyva}</p>
          <p>neutraali {this.state.neutraali}</p>
          <p>huono {this.state.huono}</p>
        </div>
      )
    }
  }
  

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
