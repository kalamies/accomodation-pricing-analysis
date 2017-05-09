/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect'

import { updateSearch } from './actions';
import { makeSelectFetching, makeSelectQuery, makeSelectListings } from './selectors';
import SearchBox from './SearchBox'
import Results from './Results'
import messages from './messages';

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { fetching, query, listings, doSearch } = this.props

    return (
      <h1>
        <FormattedMessage {...messages.header} />

        <SearchBox query={query} onChange={doSearch} />

        {fetching && <p>Loading...</p>}

        <Results listings={listings} />
      </h1>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  fetching: makeSelectFetching(),
  query: makeSelectQuery(),
  listings: makeSelectListings(),
});

const mapDispatchToProps = (dispatch) => ({
  doSearch: (query) => dispatch(updateSearch(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
