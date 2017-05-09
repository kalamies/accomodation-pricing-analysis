import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  border: 1px solid #ccc;
`;

const SearchBox = ({ query, onChange }) => (
  <div>
    Postcode: <Input type="text" value={query} onChange={(e) => onChange(e.target.value)} />
  </div>
);

SearchBox.propTypes = {
  query: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBox;
