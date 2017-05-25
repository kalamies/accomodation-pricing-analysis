import React from 'react'

const ListingTable = ({ listings }) => (
  <div>
    <h3>Data:</h3>
    <table>
      <thead>
        <tr>
          <th>alue</th>
          <th>Rakennusvosi</th>
          <th>neliöitä</th>
          <th>neliöhinta</th>
          <th>kerros</th>
        </tr>
      </thead>
      <tbody>
        {listings.map((listing, index) => (
          <tr key={listing._id}>
            <td>{listing.neighborhood}</td>
            <td>{listing.buildyear}</td>
            <td>{listing.area}</td>
            <td>{listing.priceperarea}</td>
            <td>{listing.floor}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export default ListingTable
