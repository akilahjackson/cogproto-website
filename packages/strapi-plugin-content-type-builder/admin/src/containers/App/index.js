/**
 *
 * App
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { Switch, Route } from 'react-router-dom';
import pluginId from '../../pluginId';

import HomePage from '../HomePage';
import ModelPage from '../ModelPage';
import NotFoundPage from '../NotFoundPage';

import { getData } from './actions';

import reducer from './reducer';
import saga from './saga';
import makeSelectApp from './selectors';

import styles from './styles.scss';

const ROUTES = [
  {
    component: HomePage,
    to: `/plugins/${pluginId}`,
  },
  {
    component: ModelPage,
    to: `/plugins/${pluginId}/models/:modelName`,
  },
];

export class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getData();
  }

  renderRoute = (route) => {
    const { component: Component } = route;

    return (
      <Route
        key={route.to}
        render={props => <Component {...props} {...this.props} />}
        exact
      />
    );
  }

  render() {
    return (
      <div className={styles.app}>
        <Switch>
          {ROUTES.map(this.renderRoute)}
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  getData: PropTypes.func.isRequired,
};

const mapStateToProps = makeSelectApp();

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getData,
    },
    dispatch,
  );
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = strapi.injectReducer({ key: 'app', reducer, pluginId });
const withSaga = strapi.injectSaga({ key: 'app', saga, pluginId });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(App);
