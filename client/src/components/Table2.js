import React, { Fragment } from 'react'
import { useTable, useExpanded } from 'react-table'

const Table = ({ columns, data, renderExpandedRow }) => {
  const {
    getTableProps,
    headerGroups,
    rows,
    prepareRow,
    flatColumns,
  } = useTable(
    {
      columns,
      data,
    },
    useExpanded
  )

  return (
    <div className='table' {...getTableProps()}>
      {headerGroups.map(headerGroup => (
        <div className='tr th' {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            <div className='td' {...column.getHeaderProps()}>{column.render('Header')}</div>
          ))}
        </div>
      ))}
      {rows.map(
        (row, i) => {
          prepareRow(row)
          return (
            <Fragment {...row.getRowProps()}>
              <div className='tr'>
                {row.cells.map(cell => {
                  return <div className='td' {...cell.getCellProps()}>{cell.render('Cell')}</div>
                })}
              </div>
              {row.isExpanded ? (
                <div className='tr'>
                  <div className='td' colSpan={flatColumns.length}>
                    {renderExpandedRow({ row })}
                  </div>
                </div>
              ) : null}
            </Fragment>
          )
        }
      )}
    </div>
  )
}

export default Table
