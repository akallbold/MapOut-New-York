import React, { Component } from 'react';
import Maps from "./Maps"
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";


class MapsList extends Component {

  render() {
    return (
      <div className="right-panel">
        <Maps currentArticle={this.props.currentArticle} user={this.props.user} userMapView={this.props.userMapView} changeUserMapView={this.props.changeUserMapView} updateUserPlaces={this.props.updateUserPlaces}/>
      </div>
    );
  }
}

export default MapsList;
