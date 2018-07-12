import React from 'react';
import ReactDOM from 'react-dom';



class App extends React.Component {
    constructor() {
      super()
      this.state = {
        hyva: 0,
        neutraali: 0,
        huono: 0,
        ka: 0,
        positiivisia: 0
      }
    }

    render(){

        
        const hyva = (newValue) => () => { 
            this.setState({ hyva: newValue })
            this.setState({ka: (newValue-this.state.huono)/(newValue+this.state.neutraali+this.state.huono)})
            this.setState({positiivisia: (newValue/(newValue+this.state.neutraali+this.state.huono))*100})
          }

          const huono = (newValue) => () => { 
            this.setState({ huono: newValue })
            this.setState({ka: (this.state.hyva-newValue)/(this.state.hyva+this.state.neutraali+newValue)})
            this.setState({positiivisia: (this.state.hyva/(this.state.hyva+this.state.neutraali+newValue))*100})
          }

          const neutraali = (newValue) => () => { 
            this.setState({ neutraali: newValue })
            this.setState({ka: (this.state.hyva-this.state.huono)/(this.state.hyva+newValue+this.state.huono)})
            this.setState({positiivisia: (this.state.hyva/(newValue+this.state.hyva+this.state.huono))*100})
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
          <p>keski-arvo {this.state.ka}</p>
          <p>positiivisia {this.state.positiivisia} %</p>
        </div>
      )
    }
  }
  

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
