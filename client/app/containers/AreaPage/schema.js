import { schema } from 'normalizr'

export const listing = new schema.Entity('listings', {}, {
  idAttribute: '_id',
})

export const listings = [listing]
