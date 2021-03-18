import React from 'react';
import styled from '@emotion/styled';
import { useTable, useBlockLayout, useSortBy } from 'react-table';
import { useSticky } from 'react-table-sticky';

import { Box, Heading, Text, Wrap } from '@chakra-ui/react';

interface StatsTableProps {
  scheduleData: Array<Array<string>>;
  gameTimes: Array<string>;
}

export default function StatsTable({ data }) {
  return (
    <>
      <Heading as="h2" size="md" textAlign="center" m="2rem 1rem">
        <TableDemo data={data} />
      </Heading>
    </>
  );
}

const Styles = styled.div`
  /* This is required to make the table full-width */
  display: block;
  max-width: 100%;

  padding: 1rem;

  .table {
    border: 1px solid #ddd;

    .tr {
      min-width: 100%;
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
      background-color: #000;
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

function TableDemo({ data }) {
  const columns = [
    {
      Header: 'Team',
      accessor: 'Teams',
      sticky: 'left',
      width: '175',
    },
    {
      Header: 'GP',
      accessor: 'Games-Played',
      width: '50',
    },
    {
      Header: 'P',
      accessor: 'Points',
      width: '50',
    },
    {
      Header: 'W',
      accessor: 'Wins',
      width: '50',
    },
    {
      Header: 'L',
      accessor: 'Losses',
      width: '50',
    },
    {
      Header: 'D',
      accessor: 'Draws',
      width: '50',
    },
    {
      Header: '+/-',
      accessor: 'Goal-Difference',
      width: '50',
    },
    {
      Header: 'GA',
      accessor: 'Goals-Against',
      width: '50',
    },
    {
      Header: 'GF',
      accessor: 'Goals-For',
      width: '50',
    },
  ];

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
    },
    useBlockLayout,
    useSticky,
    useSortBy
  );

  return (
    <Box w={[400, 500, 800]}>
      <Styles>
        <div {...getTableProps()} className="table sticky">
          <div className="header">
            {headerGroups.map((headerGroup) => (
              <div {...headerGroup.getHeaderGroupProps()} className="tr">
                {headerGroup.headers.map((column) => (
                  <div {...column.getHeaderProps()} className="th">
                    {column.render('Header')}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div {...getTableBodyProps()} className="body">
            {rows.map((row) => {
              prepareRow(row);
              return (
                <div {...row.getRowProps()} className="tr">
                  {row.cells.map((cell) => (
                    <div {...cell.getCellProps()} className="td">
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
