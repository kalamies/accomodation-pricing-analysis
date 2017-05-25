import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { createStructuredSelector } from 'reselect'

import ContentLayout from 'components/ContentLayout'

import * as listingActions from './actions'
import { makeSelectFetching, makeSelectListings } from './selectors'
import ListingTable from './ListingTable'
import Average from './Average'

class AreaPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    const { fetchListings, params } = this.props

    fetchListings(params.postcode)
  }

  render() {
    const { fetching, listings } = this.props

    return (
      <ContentLayout>
        <Link to="/">back</Link>
        <h1>Area: {this.props.params.postcode}</h1>
        {fetching && (
          <p>Loading...</p>
        )}
        {!fetching && listings.size > 0 && (
          <div>
            <Average listings={listings.toJS()} column="neighborhood" />
            <Average listings={listings.toJS()} column="buildyear" />
            <ListingTable listings={listings.toJS()} />
          </div>
        )}
      </ContentLayout>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  fetching: makeSelectFetching(),
  listings: makeSelectListings(),
})

const mapDispatchToProps = {
  ...listingActions,
}

export default connect(mapStateToProps, mapDispatchToProps)(AreaPage)
