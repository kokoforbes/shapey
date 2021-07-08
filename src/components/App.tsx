import React from 'react';
import { connect } from 'react-redux';
import Home from '../pages/home/home';
import Login from '../pages/login/login';
import Header from './Header/Header'


interface IProps {
  isUserLoggedIn: boolean;
}

function App(props: IProps) {
  const { isUserLoggedIn } = props;
  return (
    <div>
      {isUserLoggedIn ? <Header /> : null}
      {isUserLoggedIn ? <Home /> : <Login />}
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  isUserLoggedIn: state.user.isLoggedIn,
});

export default connect(mapStateToProps)(App);
