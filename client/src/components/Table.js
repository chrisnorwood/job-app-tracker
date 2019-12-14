import React, { Fragment } from 'react'
import { useTable, useExpanded } from 'react-table'

const Table = ({ columns, data, renderExpandedRow }) => {
  const {
    getTableProps,
    getTableBodyProps,
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
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(
          (row, i) => {
            prepareRow(row)
            return (
              <Fragment {...row.getRowProps()}>
                <tr>
                  {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })}
                </tr>
                {row.isExpanded ? (
                  <tr>
                    <td colSpan={flatColumns.length}>
                      {renderExpandedRow({ row })}
                    </td>
                  </tr>
                ) : null}
              </Fragment>
            )
          }
        )}
      </tbody>
    </table>
  )
}

export default Table
