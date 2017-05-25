import React from 'react'

const Average = ({ listings, column }) => {
  const rawValues = listings.reduce((result, listing) => {
    const colValue = listing[column]

    if (!result[colValue]) {
      result[colValue] = []
    }

    result[colValue].push(listing.priceperarea)

    return result
  }, {})

  const averages = {}

  Object.keys(rawValues).forEach((key) => {
    averages[key] = rawValues[key].reduce((result, value) => result + value) / rawValues[key].length
  })

  return (
    <div>
      <h3>Keskiarvot ({column}):</h3>
      {Object.keys(averages).map((key, index) => (
        <div key={index}>
          <b>{key}</b>: {averages[key]}
        </div>
      ))}
    </div>
  )
}

export default Average
