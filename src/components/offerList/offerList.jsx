import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import OfferCard from '../offer-card/offer-card';

class OfferList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      offerActive: null,
    };
  }

  render() {
    const {offers, updateActiveOfferId} = this.props;

    return (
      <div
        onMouseMove={(evt) => {
          if (!evt.target.closest(`.place-card`)) {
            return;
          }
          const elementId = evt.target.closest(`.place-card`).id;
          updateActiveOfferId(elementId);
        }}
        className="cities__places-list places__list tabs__content">
        {offers.map((offer) => (
          <OfferCard
            key={offer.id}
            offer={offer}
            onHover={() => {
              this.setState(() => ({
                offerActive: offer,
              }));
            }}
          />
        ))}
      </div>
    );
  }
}

OfferList.propTypes = {
  offers: PropTypes.array.isRequired,
  updateActiveOfferId: PropTypes.func.isRequired,
};

export default OfferList;
