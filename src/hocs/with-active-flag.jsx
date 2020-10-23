import React, {PureComponent} from "react";
import PropTypes from "prop-types";

export const withActiveFlag = (Component) => {
  class WithActiveFlag extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isFavorite: this.props.offer.isFavorite
      };

      this._handleActiveChange = this._handleActiveChange.bind(this);
    }

    _handleActiveChange() {
      this.setState(
          (prevState) => ({isFavorite: !prevState.isFavorite})
      );
    }

    render() {
      return (
        <Component
          {...this.props}
          onActiveChange={this._handleActiveChange}
        />
      );
    }
  }

  WithActiveFlag.propTypes = {
    offer: PropTypes.object.isRequired,
  };

  return WithActiveFlag;
};
