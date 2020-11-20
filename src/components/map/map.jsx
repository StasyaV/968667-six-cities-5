import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import leaflet from 'leaflet';
import {mapPins} from "../../const";

class Map extends PureComponent {
  _setMap() {
    const {offers, activeOfferId, mainOffer, coordinates, mapZoom} = this.props;

    const icon = leaflet.icon({
      iconUrl: mapPins.icon,
      iconSize: [27, 39]
    });

    const activeIcon = leaflet.icon({
      iconUrl: mapPins.activeIcon,
      iconSize: [27, 39]
    });

    this._map.flyTo(coordinates, mapZoom);


    if (mainOffer) {
      leaflet
        .marker(mainOffer.coordinates, {icon: activeIcon})
        .addTo(this._layerGroup);

      offers.forEach((offer) => {
        leaflet
          .marker(offer.coordinates, {icon})
          .addTo(this._layerGroup);
      });
      return;
    } else if (offers) {
      offers.forEach((offer) => {
        leaflet
          .marker(offer.coordinates, {icon: (offer.id === +activeOfferId ? activeIcon : icon)})
          .addTo(this._layerGroup);
      });
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
      .addTo(this._map);

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
  mainOffer: PropTypes.object,
};

const mapStateToProps = ({ACTIONS}) => ({
  activeOfferId: ACTIONS.activeOfferId
});

export {Map};
export default connect(mapStateToProps)(Map);
