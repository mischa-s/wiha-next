import { useMemo } from 'react';
import styled from '@emotion/styled';
import { useTable, useBlockLayout, useSortBy } from 'react-table';
import { useSticky } from 'react-table-sticky';

import { Box } from '@chakra-ui/react';

const Styles = styled.div`
  /* This is required to make the table full-width */
  display: block;
  max-width: 100%;

  .table {
    border: 1px solid #ddd;

    .tr {
      min-width: 100%;
      font-weight: bold;
      text-align: center;

      :last-child {
        .td {
          border-bottom: 0;
        }
      }
    }

    .td {
      padding: 5px;
      border-bottom: 1px solid #ddd;
      border-right: 1px solid #ddd;
      background-color: #fff;
      overflow: hidden;

      :last-child {
        border-right: 0;
      }

      :not([data-sticky-td]) {
        flex-grow: 1;
      }
    }

    .th {
      padding: 5px;
      border-bottom: 1px solid #ddd;
      border-right: 1px solid #ddd;
      background-color: #323232;
      color: #fff;
      overflow: hidden;

      :last-child {
        border-right: 0;
      }

      :not([data-sticky-td]) {
        flex-grow: 1;
      }
    }

    &.sticky {
      overflow: auto;
      .header,
      .footer {
        position: sticky;
        z-index: 1;
        width: fit-content;
        min-width: 100%;
      }

      .header {
        top: 0;
      }

      .body {
        position: relative;
        z-index: 0;
      }

      [data-sticky-td] {
        position: sticky;
      }

      [data-sticky-last-left-td] {
        border-right-width: 2px;
      }
    }
  }
`;

function TeamsTable({ data }) {
  const columns = useMemo(
    () => [
      {
        Header: 'Team',
        accessor: 'Teams',
        sticky: 'left',
        width: '150',
        sortDescFirst: true,
      },
      {
        Header: 'GP',
        accessor: 'Games-Played',
        width: '50',
        sortDescFirst: true,
      },
      {
        Header: 'P',
        accessor: 'Points',
        width: '50',
        sortDescFirst: true,
      },
      {
        Header: 'W',
        accessor: 'Wins',
        width: '50',
        sortDescFirst: true,
      },
      {
        Header: 'L',
        accessor: 'Losses',
        width: '50',
        sortDescFirst: true,
      },
      {
        Header: 'D',
        accessor: 'Draws',
        width: '50',
        sortDescFirst: true,
      },
      {
        Header: '+/-',
        accessor: 'Goal-Difference',
        width: '50',
        sortDescFirst: true,
        sortType: (a, b) => a - b,
      },
      {
        Header: 'GA',
        accessor: 'Goals-Against',
        width: '50',
        sortDescFirst: true,
      },
      {
        Header: 'GF',
        accessor: 'Goals-For',
        width: '50',
        sortDescFirst: true,
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      maxMultiSortColCount: 4,
      initialState: {
        sortBy: [
          { id: 'Points', desc: true },
          { id: 'Wins', desc: true },
          { id: 'Goal-Difference', desc: true },
          { id: 'Goal-For', desc: true },
        ],
      },
    },
    useBlockLayout,
    useSticky,
    useSortBy
  );

  return (
    <Box w={[350, 550, 700, 800]}>
      <Styles>
        <div {...getTableProps()} className="table sticky">
          <div className="header">
            <div {...headerGroups[0].getHeaderGroupProps()} className="tr">
              {headerGroups[0].headers.map((column) => (
                <div
                  key={column.Header}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="th"
                >
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? ' 🠗' : ' 🠕') : ''}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div {...getTableBodyProps()} className="body">
            {rows.map((row) => {
              prepareRow(row);
              return (
                <div key={row.original} {...row.getRowProps()} className="tr">
                  {row.cells.map((cell) => (
                    <div
                      key={{ ...row.original, ...cell.column }}
                      {...cell.getCellProps()}
                      className="td s"
                    >
                      {cell.render('Cell')}
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </Styles>
    </Box>
  );
}

interface StatsTableProps {
  data: Array<{
    Teams: string;
    Points: string;
    Wins: string;
    Losses: string;
    Draws: string;
    'Games-Played': string;
    'Goal-Difference': string;
    'Goals-Against': string;
    'Goals-For': string;
  }>;
}

export default function StatsTable({ data }: StatsTableProps) {
  return (
    <>
      <TeamsTable data={data} />
    </>
  );
}
