import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import leaflet from 'leaflet';
import {mapPins} from "../../const";

class Map extends PureComponent {
  _setMap() {
    const {offers, activeOfferId, nearbyOffers, mainOffer, coordinates, mapZoom} = this.props;
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

    this._map.flyTo(coordinates, mapZoom);

    if (nearbyOffers && mainOffer) {
      nearbyOffers.forEach((offer) => {
        leaflet
          .marker(offer.coordinates, {icon})
          .addTo(this._layerGroup);
      });

      leaflet
        .marker(mainOffer.coordinates, {icon: activeIcon})
        .addTo(this._layerGroup);

      return;
    }

    otherOffers.forEach((offer) => {
      leaflet
        .marker(offer.coordinates, {icon})
        .addTo(this._layerGroup);
    });

    if (activeOffer.length) {
      leaflet
      .marker(activeOffer[0].coordinates, {icon: activeIcon})
      .addTo(this._layerGroup);
    }
  }

  componentDidMount() {
    const {coordinates, mapZoom} = this.props;
    this._map = leaflet.map(`map`, {
      center: coordinates,
      zoom: mapZoom,
      zoomControl: false,
      marker: true
    });

    this._layerGroup = leaflet.layerGroup().addTo(this._map);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this._layerGroup);

    this._setMap();
  }

  componentDidUpdate() {
    this._layerGroup.clearLayers();
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
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  mapClass: PropTypes.string.isRequired,
  activeOfferId: PropTypes.string.isRequired,
  mapZoom: PropTypes.number.isRequired,
  coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
  nearbyOffers: PropTypes.arrayOf(PropTypes.object),
  mainOffer: PropTypes.object,
};

const mapStateToProps = ({ACTIONS, OFFERS}) => ({
  activeOfferId: ACTIONS.activeOfferId,
  offers: OFFERS.offers
});

export {Map};
export default connect(mapStateToProps)(Map);
