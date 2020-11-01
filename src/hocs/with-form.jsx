import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withForm = (Component) => {
  return class WithForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: null,
        text: null
      };
      
      this._handleRatingChange = this._handleRatingChange.bind(this);
      this._handleTextFieldChange = this._handleTextFieldChange.bind(this);
      this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleSubmit(evt) {
      evt.preventDefault();
    }

    _handleRatingChange(evt) {
      this.setState({
        rating: evt.target.value,
      });
    }

    _handleTextFieldChange(evt) {
      this.setState({
        comment: evt.target.value,
      });
    }

    render() {
      return <Component
        {...this.props}
        onSubmit={this._handleSubmit}
        onRatingChange={this._handleRatingChange}
        onTextFieldChange={this._handleTextFieldChange}
      />;
    }
  };
};


withForm.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default withForm;
