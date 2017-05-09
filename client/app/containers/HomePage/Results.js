import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  font-size: 0.9rem;
`;

const Results = ({ listings }) => (
  <Table>
    <thead>
      <tr>
        <th>area</th>
        <th>building</th>
        <th>buildyear</th>
        <th>createdAt</th>
        <th>elevator</th>
        <th>energyclass</th>
        <th>floor</th>
        <th>neighborhood</th>
        <th>postcode</th>
        <th>price</th>
        <th>priceperarea</th>
        <th>state</th>
        <th>type</th>
      </tr>
    </thead>
    <tbody>
      {listings && listings.map((listing, i) => (
        <tr key={i}>
          <td>{listing.area}</td>
          <td>{listing.building}</td>
          <td>{listing.buildyear}</td>
          <td>{listing.createdAt}</td>
          <td>{listing.elevator}</td>
          <td>{listing.energyclass}</td>
          <td>{listing.floor}</td>
          <td>{listing.neighborhood}</td>
          <td>{listing.postalcode}</td>
          <td>{listing.price}</td>
          <td>{listing.priceperarea}</td>
          <td>{listing.state}</td>
          <td>{listing.type}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default Results;
