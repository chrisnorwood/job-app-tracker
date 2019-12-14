import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { getApplications } from '../../services/api'
import Table from '../Table'
import AppDetails from '../AppDetails'

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
      Header: () => null,
      id: 'expander',
      Cell: ({ row }) => (
        <span {...row.getExpandedToggleProps()}>
          {row.isExpanded ? '👇' : '👉'}
        </span>
      ),
    },
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

  const renderExpandedRow = useCallback(
    ({ row }) => (
      <AppDetails application={ row.original }/>
    ),
    []
  )

  if (!applications) return <span>Loading...</span>

  return (
    <div className="apps-body">
      <Table
        columns={columns}
        data={memoedApps}
        renderExpandedRow={renderExpandedRow}
      />
    </div>
  )
}

export default Apps
