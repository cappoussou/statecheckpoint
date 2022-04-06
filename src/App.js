
import './App.css';
import React from 'react';


class App extends React.Component {

  constructor(props){
    super(props)
    this.state={
      Person : { fullName:"Ala Zrafi",bio:"live to express", imgSrc:"./ala.jpg", profession:"StudentFS"}, 
      show : true,
    count: 0
    };
  }
  
  render(){
    const count = this.state.count
    return (
    <div className="App">
      {
        this.state.show?
      <div>
        <h1>{this.state.Person.fullName}</h1>
        <h1>{this.state.Person.bio}</h1>
        <div><img src={this.state.Person.imgSrc} alt={"Profile photo"}style={{width:500}}></img></div>
        <h1>{this.state.Person.profession}</h1>
        <h1>Current Count : {count}</h1>
      </div>
      :null
      }
    
      <button onClick={()=>this.setState({...this.state,show:!this.state.show}) }>Hide/Show</button>
      </div>
    )
    
  }
  
  componentDidMount() {
    this.myInterval = setInterval (()=>{
      this.setState(prevState => ({
        count: prevState.count + 1
    }))
  }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.myInterval)
  }

}

export default App;
