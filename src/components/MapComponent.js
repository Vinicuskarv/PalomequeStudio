import React, { Component } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import imghome from '../components/icons/placeholder.png';
import imgArron from '../components/icons/alfinete.png';


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
  
    if (latitude !== null && longitude !== null && this.map === null) {
      this.map = L.map('mapid').setView([latitude, longitude], 15);
  
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
  
      
      const customIcon = L.icon({
        iconUrl: [imgArron],
        iconSize: [32, 32],
        iconAnchor: [16, 32], 
      });
  
      L.marker([latitude, longitude], { icon: customIcon })
        .addTo(this.map)
        .bindPopup('Estou aqui!')
        .openPopup();
  
      const officeIcon = L.icon({
        iconUrl: [imghome],
        iconSize: [32, 32],
        iconAnchor: [16, 32], 
      });
  
      L.marker([41.375146686180415, -8.760214470085726], { icon: officeIcon })
        .addTo(this.map)
        .bindPopup('Studio Palomeque')
        .openPopup();
  
      const latlngs = [
        [41.375146686180415, -8.760214470085726],
        [latitude, longitude]
      ];
  
      L.polyline(latlngs, { color: 'Blue' }).addTo(this.map);
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
    return <div id="mapid" style={{ height: '100%', width:'102%' }}></div>;
  }
}

export default MapComponent;
