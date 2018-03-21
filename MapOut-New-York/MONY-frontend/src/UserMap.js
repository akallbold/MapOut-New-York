import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
let APIkey = 

class UserMap extends Component {

  componentDidMount = () => {
    this.fetchUserPlaces(this.props.user)
  }

  handleUserPlaces = (places) => {
    this.props.updateUserPlaces(places)
  }

  fetchUserPlaces = (user) => {
    fetch(`http://localhost:3000/users/1/places`)
    .then(response => response.json())
    .then(data => {
      this.handleUserPlaces(data)})
  }

  // fetchUserArticles = (user) => {
  //   fetch(`http://localhost:3000/users/1/articles`)
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log("userarticlefetch",data)
  //     this.setState({userArticles:data})
  //   })
  // }
  //
  //
  createMarkers = () => {
    return this.props.userPlaces.map(place => {
      console.log("place in createmarkers",place)
       return <Marker
                title={`title ${place.name}`}
                name={`name ${place.name}`}
                position={{lat:place.latitude,lng:place.longitude}}
              />
    })
  }



  render() {
    return (
      <div className="center-panel">
       <div >
          <Map
           google={this.props.google}
           initialCenter={{lat:40.7128,lng:-74.0060}}
           style={{ width: "75%", height: "75%", position: "relative" }}
           className={"map"}
           zoom={13}>
            {this.createMarkers()}
          </Map>
        </div>
      </div>
    );}
  }


 export default GoogleApiWrapper({
 apiKey:APIkey
})(UserMap)
