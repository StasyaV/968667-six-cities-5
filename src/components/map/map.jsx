import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from 'leaflet';
import {mapPins} from "../../const";

const CITY_COORDINATES = [52.38333, 4.9];

class Map extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {offers, activeOfferId} = this.props;
    const activeOffer = offers.slice().filter((item) => item.id === +activeOfferId);
    const otherOffers = offers.slice().filter((item) => item.id !== +activeOfferId);

    const icon = leaflet.icon({
      iconUrl: mapPins.icon,
      iconSize: [27, 39]
    });

    const activeIcon = leaflet.icon({
      iconUrl: mapPins.activeIcon,
      iconSize: [27, 39]
    });

    const zoom = 12;
    const map = leaflet.map(`map`, {
      center: CITY_COORDINATES,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(CITY_COORDINATES, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    otherOffers.forEach((offer) => {
      leaflet
        .marker(offer.coordinates, {icon})
        .addTo(map);
    });

    console.log(activeOffer[0].coordinates);
    leaflet
      .marker(activeOffer[0].coordinates, {activeIcon})
      .addTo(map);
  }


  render() {
    const {mapClass} = this.props;
    return (
      <section id="map" className={mapClass}></section>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.array.isRequired,
  mapClass: PropTypes.string.isRequired,
  activeOfferId: PropTypes.string.isRequired,
};

export default Map;
