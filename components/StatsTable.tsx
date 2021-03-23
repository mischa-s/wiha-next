import { useMemo } from 'react';
import styled from '@emotion/styled';
import { useTable, useBlockLayout, useSortBy } from 'react-table';
import { useSticky } from 'react-table-sticky';

import { Box } from '@chakra-ui/react';
import {
  TeamsStatsInterface,
  PlayersStatsInterface,
  GoaliesStatsInterface,
} from '../types';

interface StyleProps {
  teams: boolean;
}

const Styles = styled.div<StyleProps>`
  /* This is required to make the table full-width */
  display: block;
  max-width: 100%;

  .table {
    border: 1px solid #ddd;

    .tr {
      min-width: 100%;

      :last-child {
        .td {
          border-bottom: 0;
        }
      }
      :nth-child(even) {
        .td {
          background-color: #fff;
        }
      }
      :nth-child(odd) {
        .td {
          background-color: #ddd;
        }
      }
    }

    .td {
      padding: 5px;
      border-bottom: 1px solid #ddd;
      overflow: hidden;
      font-weight: ${(props) => (props.teams ? 'bold' : 'normal')};
      font-size: ${(props) => (props.teams ? '18px' : '14px')};
      text-align: center;

      :first-of-type {
        text-align: left;
        padding-left: 15px;
      }

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
      font-weight: bold;
      text-align: center;
      font-size: 18px;

      :first-of-type {
        text-align: left;
        padding-left: 15px;
      }

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

const teamsCols = [
  {
    Header: 'Team',
    accessor: 'Teams',
    sticky: 'left',
    width: '160',
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
];

const teamsSort = [
  { id: 'Points', desc: true },
  { id: 'Wins', desc: true },
  { id: 'Goal-Difference', desc: true },
  { id: 'Goal-For', desc: true },
];

const playersSort = [
  { id: 'Total-Points', desc: true },
  { id: 'Goals', desc: true },
  { id: 'Assists', desc: true },
  { id: 'Points-per Game', desc: true },
  { id: 'Games-Played', desc: true },
];

const playersCols = [
  {
    Header: 'Name',
    accessor: 'Name',
    width: '140',
    sortDescFirst: true,
    sticky: 'left',
  },
  {
    Header: 'Team',
    accessor: 'Team',
    width: '90',
    sortDescFirst: true,
  },
  {
    Header: 'P',
    accessor: 'Total-Points',
    width: '50',
    sortDescFirst: true,
  },

  {
    Header: 'G',
    accessor: 'Goals',
    width: '50',
    sortDescFirst: true,
  },
  {
    Header: 'A',
    accessor: 'Assists',
    width: '50',
    sortDescFirst: true,
  },
  {
    Header: 'GP',
    accessor: 'Games-Played',
    width: '50',
    sortDescFirst: true,
  },
  {
    Header: 'PPG',
    accessor: 'Points-per Game',
    width: '50',
    sortDescFirst: true,
  },
];

const goaliesCols = [
  {
    Header: 'Name',
    accessor: 'Name',
    width: '165',
    sortDescFirst: true,
    sticky: 'left',
  },
  // {
  //   Header: 'GP',
  //   accessor: 'Games-Played',
  //   width: '165',
  //   sortDescFirst: true,
  // },
  {
    Header: 'Save %',
    accessor: 'Save-%',
    width: '165',
    sortDescFirst: true,
  },
  {
    Header: 'Goals Against',
    accessor: 'Goals-Against',
    width: '165',
    sortDescFirst: false,
  },
  {
    Header: 'Shots Against',
    accessor: 'Total-Shots',
    width: '165',
    sortDescFirst: true,
  },
];

const goaliesSort = [
  { id: 'Save-%', desc: true },
  { id: 'Goals-Against', desc: false },
];

interface DataTableProps {
  data:
    | Array<TeamsStatsInterface>
    | Array<PlayersStatsInterface>
    | Array<GoaliesStatsInterface>;
  cols: Array<{
    Header: string;
    accessor: string;
    sticky?: string;
    width: string;
    sortDescFirst: boolean;
    sortType?: (x: number, y: number) => number;
  }>;
  sortBy: Array<{ id: string; desc: boolean }>;
  teams?: boolean;
}

function DataTable({ data, cols, sortBy, teams = false }: DataTableProps) {
  const columns = useMemo(() => cols, [cols]);

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
        sortBy,
      },
    },
    useBlockLayout,
    useSticky,
    useSortBy
  );

  return (
    <Box w={[350, 550, 700, 800]}>
      <Styles teams={teams}>
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
                </div>
              ))}
            </div>
          </div>
          <div {...getTableBodyProps()} className="body">
            {rows.map((row) => {
              prepareRow(row);
              return (
                <div key={row.original} {...row.getRowProps()} className="tr">
                  {row.cells.map((cell, idx) => (
                    <div
                      key={{ ...row.original, ...cell.column }}
                      {...cell.getCellProps()}
                      className="td"
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

interface PlayersTableProps {
  data: Array<PlayersStatsInterface>;
}

interface TeamsTableProps {
  data: Array<TeamsStatsInterface>;
}

interface GoaliesTableProps {
  data: Array<GoaliesStatsInterface>;
}

export function TeamsTable({ data }: TeamsTableProps) {
  return <DataTable data={data} cols={teamsCols} sortBy={teamsSort} teams />;
}

export function PlayersTable({ data }: PlayersTableProps) {
  return <DataTable data={data} cols={playersCols} sortBy={playersSort} />;
}

export function GoaliesTable({ data }: GoaliesTableProps) {
  return <DataTable data={data} cols={goaliesCols} sortBy={goaliesSort} />;
}
