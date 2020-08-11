import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactMapGL from 'react-map-gl'
class App extends Component{
  state = {
    viewport: {
      width: "100vw",
      height: "100vh",
      latitude: 42.430472,
      longitude: -123.334102,
      zoom: 16
    }
  }
  render(){
    return (
 
      <div className="App">
     <ReactMapGL  {...this.state.viewport}  onViewportChange={(viewport) => this.setState({viewport})} mapboxApiAccessToken='pk.eyJ1IjoicmFqYXQta2FzaHlhcDgyOTkiLCJhIjoiY2tkcTlmMTJyMjlrNTJ6bXJ1OTBpYnM3dSJ9.xHhy0kOaSPGW7nctrh55Ng'></ReactMapGL>
      </div>
    );
  }

}

export default App;
