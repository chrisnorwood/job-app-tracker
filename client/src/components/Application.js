import React from 'react'

const Application = ({ application }) => {
  const { company, location, url, source, createdAt } = application

  const formatDate = (string) => {
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: 'numeric',
      minute: 'numeric'
    }
    return new Date(string).toLocaleDateString([], options)
  }

  return (
    <li className="app-card">
      {formatDate(createdAt)}
    </li>
  )
}

export default Application
