import React, { useState, useEffect, useMemo } from 'react'
import { getApplications } from '../../services/api'
import Table from '../Table'

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

const Apps = (props) => {
  const [applications, setApplications] = useState(null)

  useEffect(() => {
    getApplications()
      .then(apps => setApplications(apps))
      .catch(err => console.log('Error fetching applications.', err))
  }, [])

  const columns = useMemo(() => [
    {
      Header: 'Date',
      accessor: 'createdAt',
      Cell: ({ cell: { value } }) => formatDate(value),
    },
    {
      Header: 'Company',
      accessor: 'company',
    },
    {
      Header: 'Location',
      accessor: 'location',
    },
    {
      Header: 'Status (id, tmp)',
      accessor: 'id',
    },
  ], [])

  const memoedApps = useMemo(() => applications, [applications])

  if (!applications) return <span>Loading...</span>

  return (
    <div className="apps-body">
      <Table columns={columns} data={memoedApps} />
    </div>
  )
}

export default Apps
