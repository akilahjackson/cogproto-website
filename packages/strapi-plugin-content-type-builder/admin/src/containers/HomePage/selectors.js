import { createSelector } from 'reselect';
import pluginId from '../../pluginId';

/**
 * Direct selector to the homePage state domain
 */
const selectHomePageDomain = () => (state) => state.get(`${pluginId}_homePage`);

/**
 * Other specific selectors
 */


/**
 * Default selector used by HomePage
 */

const makeSelectHomePage = () => createSelector(
  selectHomePageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectHomePage;
export {
  selectHomePageDomain,
};
