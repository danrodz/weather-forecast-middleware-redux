import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    const { lat, lng } = this.props;

    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: { lat, lng }
    });
  }

  render() {
    return <div ref="map" />;
  }
}

export default GoogleMap;
