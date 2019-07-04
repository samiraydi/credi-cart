import React, { Component } from 'react';
import image1 from './img1.jpg';
import image2 from './sim.png';
import image3 from './visa1.png';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props)
  this.state=({
    name:"you name",
    number:'',
    dat:''
  })}
  name=(e)=>{
    if(/^([^0-9]*)$/.test(e.target.value.toUpperCase()) && this.state.name.length<20){
    this.setState({
      name:e.target.value.toUpperCase()
    })}
    else{ e.target.value=this.state.name
      alert('mouch haka 3ad')
 }
  }
  number=(e)=>{
    if(!isNaN(e.target.value) && this.state.number.length<16){
    this.setState({
      number:e.target.value
    })}
    else{ e.target.value=this.state.number
    alert('dfhsdjq')}
  }
  dat=(e)=>{
    if(this.state.dat.length<=5){
    if ((e.target.value.slice(0, 2)<=12) && (e.target.value.slice(3, 5) <=31)) {
    this.setState({
      dat:e.target.value
    })}
    else {
      this.setState({ dat: "1231" })
  }
  }
}
  render() { 
    return (
      <div>

<div className='glo d-flex justify-content-around'>
      <div>
        <tabel>name:
          <input type='text' onChange={this.name} placeholder="Ecrire votre name ici"/> 
        </tabel>
      </div>  
      <div>
        <tabel>number:
          <input type='text' onChange={this.number} placeholder="Ecrire votre number ici"/>
        </tabel>
      </div>  
      <div>
        <tabel>date:
          <input type='text' onChange={this.dat} placeholder="Ecrire votre date ici"/>
        </tabel>  
      </div> 
      </div>
      <div className="App">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
       integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" 
       crossorigin="anonymous"></link>
       <img src={image1} className="img"/>
       <img src={image2} className="sim"/>
       <img src={image3} className="visa"/>
       <h1 className="CREDIT">CREDIT CARD</h1> 
       <link href="https://fonts.googleapis.com/css?family=Vidaloka&display=swap" rel="stylesheet"></link>
       <p className="cod"> <link href="https://fonts.googleapis.com/css?family=Old+Standard+TT:700&display=swap" rel="stylesheet"></link>{this.state.number.padEnd(16, '*').split('').map((x, i) => { return i===4 || i===8  || i===12 ? " " + x : x }).join('')}</p>
       
       <h2 className="cod1">5422</h2>
       <h2 className="CARDHOLDER">{this.state.name}</h2>
       <div className="global">
           <div className="month">
            <p>month/year</p>
           </div>
           <div className="fin">
              <p className="valid">valid <br></br> thru <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"></link></p> 
              <i className="fas fa-chevron-right color"></i>
              <h2 className="dat">{this.state.dat.padEnd(4, '-').split('').map((x, i) => { return i === 2 ? "/" + x : x }).join('')}<link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"></link></h2>
          </div>
       </div>
     </div>



      </div>
    );
  }
}
 
export default App;