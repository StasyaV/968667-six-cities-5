import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import history from "../../browser-history";
import {connect} from "react-redux";
import {login} from "../../store/api-actions";
import {AuthorizationStatus, EMAIL_REGEXP} from '../../const';

class LoginScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.loginRef = createRef();
    this.passwordRef = createRef();
    this.submitButton = createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    const {onSubmit} = this.props;
    evt.preventDefault();

    if (EMAIL_REGEXP.test(this.loginRef.current.value) && this.passwordRef.current.value) {
      onSubmit({
        login: this.loginRef.current.value,
        password: this.passwordRef.current.value,
      });
    }
  }

  handleEmailClick() {
    history.push(`/login`);
  }

  componentDidMount() {
    const {authorizationStatus} = this.props;
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      history.push(`/`);
    }
  }

  render() {
    const {city} = this.props;

    return (
      <div className="page page--gray page--login">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link" href="/">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a onClick={this.handleEmailClick} className="header__nav-link header__nav-link--profile">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__login">Sign in</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form onSubmit={this.handleSubmit} className="login__form form" action="#" method="post">
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input
                    ref={this.loginRef}
                    className="login__input form__input" type="email" name="email" placeholder="Email" required=""/>
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input
                    ref={this.passwordRef}
                    className="login__input form__input" type="password" name="password" placeholder="Password" required=""/>
                </div>
                <button className="login__submit form__submit button" type="submit" >Sign in</button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>{city}</span>
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

LoginScreen.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = ({USER, CITIES}) => ({
  authorizationStatus: USER.authorizationStatus,
  city: CITIES.city
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

export {LoginScreen};
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
