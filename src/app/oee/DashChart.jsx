"use client"
import { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';

//nested data is ok, see accessorKeys in ColumnDef below
const data = [
  {
    name: {
      firstName: 'A.VPO261-A.VPO261',
      lastName: '12340001',
    },
    address: 'A.TC0001-A.TC0001',
    city: 'East Daphne',
    state: 'Kentucky',
  },
  {
    name: {
      firstName: 'A.TC0004-A.TC0004',
      lastName: '12340002',
    },
    address: 'A.TC0004-A.TC0004',
    city: 'Columbus',
    state: 'Ohio',
  },
  {
    name: {
      firstName: 'A.TC0005-A.TC0005',
      lastName: '12340003',
    },
    address: 'A.TC0005-A.TC0005',
    city: 'South Linda',
    state: 'West Virginia',
  },
  {
    name: {
      firstName: 'A.TC0006-A.TC0006',
      lastName: '12340004',
    },
    address: '722 Emie Stream',
    city: 'Lincoln',
    state: 'Nebraska',
  },
  {
    name: {
      firstName: 'A.TC0007-A.TC0007',
      lastName: '12340005',
    },
    address: '32188 Larkin Turnpike',
    city: 'Charleston',
    state: 'South Carolina',
  },
];

const DashChart = () => {
  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: 'name.firstName', //access nested data with dot notation
        header: 'PRODUTO',
        size: 150,
      },
      {
        accessorKey: 'name.lastName',
        header: 'ORDEM',
        size: 150,
      },
      {
        accessorKey: 'address', //normal accessorKey
        header: 'OPERAÇÃO',
        size: 200,
      },
      {
        accessorKey: 'city',
        header: 'DESCRIÇÃO DO PRODUTO',
        size: 150,
      },
      {
        accessorKey: 'state',
        header: 'DOCUMENTO',
        size: 150,
      },
    ],
    [],
  );

  const table = useMaterialReactTable({
    columns,
    data, 
    //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
  });

  return <MaterialReactTable table={table} />;
};

export default DashChart;
