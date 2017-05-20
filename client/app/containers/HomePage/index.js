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
import styled from 'styled-components'
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect'

import Button from 'components/Button'
import CenteredLayout from 'components/CenteredLayout'

import { updateSearch } from './actions';
import { makeSelectFetching, makeSelectQuery, makeSelectResults } from './selectors';
import SearchBox from './SearchBox'
import Results from './Results'
import messages from './messages';
import Logo from './Logo'
import ContentArea from './ContentArea'
import Spinner from './Spinner'

const StyledButton = styled(Button)`
  margin: auto;
  margin-top: 2rem;
`

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { fetching, query, results, doSearch, showListings } = this.props

    return (
      <CenteredLayout>
        <ContentArea>
          <Logo />

          {fetching && <Spinner />}

          <SearchBox query={query} onChange={doSearch} results={results.toJS()} />

          <StyledButton
            disabled={query.length !== 5}
            onClick={(e) => {
              e.preventDefault()
              showListings(query)
            }
          }
          >
            Näytä kohteet
          </StyledButton>

        </ContentArea>
      </CenteredLayout>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  fetching: makeSelectFetching(),
  query: makeSelectQuery(),
  results: makeSelectResults(),
});

const mapDispatchToProps = (dispatch) => ({
  doSearch: (query) => dispatch(updateSearch(query)),
  showListings: (postcode) => alert(postcode),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
