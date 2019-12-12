import React, { useState, useEffect } from 'react'
import { getApplications } from '../../services/api'
import ApplicationList from '../ApplicationList'

const Apps = (props) => {
  const [applications, setApplications] = useState(null)
  
  useEffect(() => {
    getApplications()
      .then(apps => setApplications(apps))
      .catch(err => console.log('Error fetching applications.', err))
  }, applications)

  if (!applications) return <span>Loading...</span>

  return (
    <>
      <ApplicationList applications={applications} />
    </>
  )
}

export default Apps
