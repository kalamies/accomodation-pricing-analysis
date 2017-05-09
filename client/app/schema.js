import { schema } from 'normalizr';

export const listing = new schema.Entity('listing', {}, {
  idAttribute: (value, parent, key) => (key),
});

export const listings = new schema.Values(listing);
