import React, { Component } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

class MapComponent extends Component {
  constructor() {
    super();
    this.map = null;
    this.state = {
      latitude: null,
      longitude: null,
    };
  }

  componentDidMount() {
    this.setupMap();
    this.getLocation();
  }

  setupMap = () => {
    const { latitude, longitude } = this.state;

    if (latitude !== null && longitude !== null) {
      this.map = L.map('mapid').setView([latitude, longitude], 15);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);

      L.marker([latitude, longitude])
        .addTo(this.map)
        .bindPopup('Estou aqui!')
        .openPopup();

      L.marker([41.39560596361315, -8.773997373124802])
        .addTo(this.map)
        .bindPopup('Escritorio')
        .openPopup();

      const latlngs = [
        [41.39560596361315, -8.773997373124802],
        [latitude, longitude]
      ];

      L.polyline(latlngs, { color: 'red' }).addTo(this.map);
    }
  };

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.handleSuccess, this.handleError);
    } else {
      console.log('Geolocation is not supported in this browser.');
    }
  }

  handleSuccess = (position) => {
    const { latitude, longitude } = position.coords;
    this.setState({ latitude, longitude }, () => {
      this.setupMap();
    });
  };

  handleError = (error) => {
    console.log(error);
  };

  render() {
    return <div id="mapid" style={{ height: '400px' }}></div>;
  }
}

export default MapComponent;
