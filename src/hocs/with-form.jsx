import React, {PureComponent} from "react";

const withForm = (Component) => {
  return class WithForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: ``,
        comment: ``
      };

      this._handleRatingChange = this._handleRatingChange.bind(this);
      this._handleTextFieldChange = this._handleTextFieldChange.bind(this);
      this._resetState = this._resetState.bind(this);
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

    _resetState() {
      this.setState({
        rating: ``,
        comment: ``
      });
    }

    render() {
      const {rating, comment} = this.state;
      return <Component
        {...this.props}
        onRatingChange={this._handleRatingChange}
        onCommentInputChange = {this._handleTextFieldChange}
        rating={rating}
        comment={comment}
        resetState={this._resetState}
      />;
    }
  };
};

export default withForm;
