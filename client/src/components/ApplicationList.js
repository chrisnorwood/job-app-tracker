import React from 'react'
import Application from './Application'

const ApplicationList = ({ applications }) => (
  <ul>
    {applications.map(application => (
      <Application key={application.id} application={application} />
    ))}
  </ul>
)

export default ApplicationList
