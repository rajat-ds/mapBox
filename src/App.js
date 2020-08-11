import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactMapGL ,{GeolocateControl }from 'react-map-gl'
const TOKEN = 'pk.eyJ1IjoicmFqYXQta2FzaHlhcDgyOTkiLCJhIjoiY2tkcTlmMTJyMjlrNTJ6bXJ1OTBpYnM3dSJ9.xHhy0kOaSPGW7nctrh55Ng'
const geolocateStyle = {
  float: 'left',
  margin: '50px',
  padding: '10px'
};
class App extends Component{
  state = {
    viewport: {
      width: "100%",
      height: 900,
      latitude: 0,
      longitude: 0,
      zoom: 2
    }
  }
  render(){
    return (
 
      <div className="App">
     <ReactMapGL  {...this.state.viewport}  onViewportChange={(viewport) => this.setState({viewport})} mapboxApiAccessToken={TOKEN}>
     <GeolocateControl
          style={geolocateStyle}
          positionOptions={{enableHighAccuracy: true}}
          trackUserLocation={true}
        />
     </ReactMapGL>
      </div>
    );
  }

}

export default App;
