import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import leaflet from 'leaflet';
import {mapPins} from "../../const";

const CITY_COORDINATES = [52.38333, 4.9];

class Map extends PureComponent {
  _setMap() {
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

    otherOffers.forEach((offer) => {
      leaflet
        .marker(offer.coordinates, {icon})
        .addTo(this._map);
    });

    if (activeOffer.length) {
      leaflet
      .marker(activeOffer[0].coordinates, {icon: activeIcon})
      .addTo(this._map);
    }
  }

  componentDidMount() {
    const zoom = 12;
    this._map = leaflet.map(`map`, {
      center: CITY_COORDINATES,
      zoom,
      zoomControl: false,
      marker: true
    });
    this._map.setView(CITY_COORDINATES, zoom);

    this.layerGroup = leaflet.layerGroup(this.map);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this._map);

    this._setMap();
  }

  componentDidUpdate() {
    this.layerGroup.clearLayers();
    this._setMap();
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

const mapStateToProps = (({activeOfferId, offers}) => ({
  activeOfferId,
  offers
}));

export {Map};
export default connect(mapStateToProps)(Map);
