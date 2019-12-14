import React from 'react'

const AppDetails = ({ application }) => {
  return (
    <pre>{JSON.stringify(application)}</pre>
  )
}

export default AppDetails
